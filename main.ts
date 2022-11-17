let x = 0
input.onButtonPressed(Button.A, function () {
    x = input.lightLevel()
    basic.showNumber(x)
    led.plotBarGraph(
    x,
    255
    )
})
input.onButtonPressed(Button.B, function () {
    if (x < 50) {
        led.setBrightness(255)
    } else if (x > 50 && x < 100) {
        led.setBrightness(64)
    } else if (x > 100 && x < 200) {
        led.setBrightness(128)
    } else if (x > 200) {
        led.setBrightness(0)
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
basic.forever(function () {
    led.setBrightness(255 - input.lightLevel())
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
