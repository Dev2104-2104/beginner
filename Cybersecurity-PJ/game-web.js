const questions = [
    {
        q:"หากว่าคุณได้รับ E-mail ที่ดูเหมือนว่าจะมาจากธนาคาร แต่มีการขอข้อมูลบัตรเครดิต คุณจะทำอย่างไร ?",
        choices:["ปล่อยทิ้งไว้ ไม่ได้ทำอะไรต่อ.. ", "ติดต่อทางธนาคาร", "คลิกที่ลิงค์เพื่อเข้าไปดู"],
        correct: 1
    },
    {
        q:"รหัสผ่านที่ปลอดภัยควรมีลักษณะเป็นอย่างไร ?",
        choices:["วันเกิด", "ตัวอักษรพิเศษและยาว", "ตัวอักษรพิเศษ ตัวเล็ก ตัวใหญ่และยาว"],
        correct: 2
    },
    {
        q:"ถ้าเว็บไซต์แปลก ๆ ขอให้ติดตั้งปลั๊กอิน คุณควรทำอย่างไร?",
        choices:["ติดตั้งเลย", "ตรวจสอบ URL", "หลีกเลี่ยงและแจ้ง IT"],
        correct: 2
    }
];

let current = 0;
let score = 0;

function showQuestion() {
  if (current >= questions.length) {
    document.getElementById('question').innerText = `เกมจบแล้ว! คะแนนของคุณ: ${score}/${questions.length}`;
    document.getElementById('choices').innerHTML = '';
    return;
  }

  const q = questions[current];
  document.getElementById('question').innerText = q.q;
  const choicesDiv = document.getElementById('choices');
  choicesDiv.innerHTML = "";

  q.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.innerText = choice;
    btn.onclick = () => checkAnswer(index);
    choicesDiv.appendChild(btn);
  });
}

function checkAnswer(index) {
  const correct = questions[current].correct;
  const resultDiv = document.getElementById('result');
  if (index === correct) {
    resultDiv.innerText = "✅ ถูกต้อง!";
    score++;
  } else {
    resultDiv.innerText = "❌ ผิด! คำตอบที่ถูก: " + questions[current].choices[correct];
  }

  current++;
  setTimeout(() => {
    resultDiv.innerText = "";
    showQuestion();
  }, 1500);
}

showQuestion();