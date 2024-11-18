let plus_12 = 0
let terug_naar_o = 0
let getal = 0
basic.forever(function () {
    basic.showNumber(getal)
    getal += 3
    basic.pause(1000)
    terug_naar_o = 12
    if ((0 as any) < (12 as any)) {
        plus_12 += 1
    }
})
