let workbook = null;
let currentData = [];
let fileName = '';

        // Drag and drop functionality
        const uploadArea = document.getElementById('uploadArea');
        const fileInput = document.getElementById('fileInput');

        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('dragover');
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleFile(files[0]);
            }
        });

        uploadArea.addEventListener('click', () => {
            fileInput.click();
        });

        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                handleFile(e.target.files[0]);
            }
        });

        function handleFile(file) {
            if (!file.name.match(/\.(xlsx|xls)$/)) {
                alert('กรุณาเลือกไฟล์ Excel (.xlsx หรือ .xls)');
                return;
            }

            fileName = file.name;
            document.getElementById('loading').style.display = 'block';
            document.getElementById('dataSection').style.display = 'none';

            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = new Uint8Array(e.target.result);
                    workbook = XLSX.read(data, { type: 'array' });
                    
                    // แสดงข้อมูลไฟล์
                    const fileInfo = document.getElementById('fileInfo');
                    fileInfo.innerHTML = `
                        <strong>ไฟล์:</strong> ${fileName}<br>
                        <strong>จำนวน Sheet:</strong> ${workbook.SheetNames.length}<br>
                        <strong>Sheets:</strong> ${workbook.SheetNames.join(', ')}
                    `;

                    // เติม sheet selector
                    const sheetSelector = document.getElementById('sheetSelector');
                    sheetSelector.innerHTML = '';
                    workbook.SheetNames.forEach((name, index) => {
                        const option = document.createElement('option');
                        option.value = name;
                        option.textContent = name;
                        sheetSelector.appendChild(option);
                    });

                    // แสดง sheet แรก
                    displaySheet(workbook.SheetNames[0]);
                    
                    document.getElementById('loading').style.display = 'none';
                    document.getElementById('dataSection').style.display = 'block';
                    
                } catch (error) {
                    alert('เกิดข้อผิดพลาดในการอ่านไฟล์: ' + error.message);
                    document.getElementById('loading').style.display = 'none';
                }
            };
            reader.readAsArrayBuffer(file);
        }

        document.getElementById('sheetSelector').addEventListener('change', function() {
            displaySheet(this.value);
        });

        function displaySheet(sheetName) {
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            
            currentData = jsonData;
            
            const tableHead = document.getElementById('tableHead');
            const tableBody = document.getElementById('tableBody');
            
            // ล้างตาราง
            tableHead.innerHTML = '';
            tableBody.innerHTML = '';
            
            if (jsonData.length === 0) {
                tableBody.innerHTML = '<tr><td colspan="100%">ไม่มีข้อมูลใน Sheet นี้</td></tr>';
                return;
            }
            
            // สร้าง header
            const headerRow = document.createElement('tr');
            const maxCols = Math.max(...jsonData.map(row => row.length));
            
            for (let i = 0; i < maxCols; i++) {
                const th = document.createElement('th');
                th.textContent = jsonData[0] && jsonData[0][i] ? jsonData[0][i] : `คอลัมน์ ${i + 1}`;
                headerRow.appendChild(th);
            }
            tableHead.appendChild(headerRow);
            
            // สร้าง body (เริ่มจากแถวที่ 2 ถ้าแถวแรกเป็น header)
            const startRow = jsonData[0] && typeof jsonData[0][0] === 'string' ? 1 : 0;
            
            for (let i = startRow; i < jsonData.length; i++) {
                const row = document.createElement('tr');
                for (let j = 0; j < maxCols; j++) {
                    const td = document.createElement('td');
                    td.textContent = jsonData[i] && jsonData[i][j] !== undefined ? jsonData[i][j] : '';
                    row.appendChild(td);
                }
                tableBody.appendChild(row);
            }
        }

        function exportToPDF() {
            if (!currentData || currentData.length === 0) {
                alert('ไม่มีข้อมูลให้ Export');
                return;
            }

            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            // เพิ่มฟอนต์ไทย (จำลอง)
            doc.setFont('helvetica');
            
            // หัวเอกสาร
            doc.setFontSize(16);
            doc.text('Excel Data Export', 20, 20);
            doc.setFontSize(12);
            doc.text(`ไฟล์: ${fileName}`, 20, 30);
            doc.text(`Sheet: ${document.getElementById('sheetSelector').value}`, 20, 40);
            doc.text(`วันที่: ${new Date().toLocaleDateString('th-TH')}`, 20, 50);
            
            // สร้างตาราง
            const tableData = [];
            const maxCols = Math.max(...currentData.map(row => row.length));
            
            // Header
            const headers = [];
            for (let i = 0; i < maxCols; i++) {
                headers.push(currentData[0] && currentData[0][i] ? currentData[0][i] : `Col ${i + 1}`);
            }
            
            // Data rows
            const startRow = currentData[0] && typeof currentData[0][0] === 'string' ? 1 : 0;
            for (let i = startRow; i < Math.min(currentData.length, 50); i++) { // จำกัด 50 แถว
                const row = [];
                for (let j = 0; j < maxCols; j++) {
                    row.push(currentData[i] && currentData[i][j] !== undefined ? String(currentData[i][j]) : '');
                }
                tableData.push(row);
            }
            
            // สร้างตารางด้วย autoTable
            doc.autoTable({
                head: [headers],
                body: tableData,
                startY: 60,
                styles: {
                    fontSize: 8,
                    cellPadding: 2
                },
                headStyles: {
                    fillColor: [102, 126, 234],
                    textColor: 255
                },
                alternateRowStyles: {
                    fillColor: [248, 249, 255]
                }
            });
            
            // ดาวน์โหลด PDF
            const pdfFileName = fileName.replace(/\.[^/.]+$/, '') + '.pdf';
            doc.save(pdfFileName);
        }