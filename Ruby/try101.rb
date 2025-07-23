$cache = {}

# if x
#     y
# end

# y if x

def fib(a)
    return 0 if a == 0
    return 1 if a == 1
    $cache[a] = fib(a - 1) + fib(a - 2) unless $cache[a]
    $cache[a]
end

p fib(1000)