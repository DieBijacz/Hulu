def sds(x):
    out = 1
    for num in range(1, x+1):
        out *= num
    print(out)

sds(6)