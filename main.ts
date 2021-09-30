let Luz = 0
let T = 0
basic.forever(function () {
    Luz = input.lightLevel()
    T = input.temperature()
    if (T >= 20 && T <= 30 && (Luz >= 100 && Luz <= 120)) {
        basic.showString("AGRADABLE")
    } else {
        basic.showString("NO AGRADABLE")
    }
})
