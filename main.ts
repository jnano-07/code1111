let X0 = 0
let Y0 = 0
basic.forever(function () {
    X0 = 2
    Y0 = 2
    led.plot(X0, Y0)
    for (let I = 0; I <= 2; I++) {
        led.plot(X0, Y0 + I)
        led.plot(X0 + I, Y0)
        led.plot(X0, Y0 - I)
        led.plot(X0 - I, Y0)
        basic.pause(200)
    }
    basic.clearScreen()
})
