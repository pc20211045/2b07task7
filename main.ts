let x = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    x = input.lightLevel()
    if (x < 50) {
        led.setBrightness(255)
    } else if (x > 50 && x < 100) {
        led.setBrightness(128)
    } else if (x > 100 && x < 200) {
        led.setBrightness(64)
    } else if (x > 200) {
        led.setBrightness(0)
    }
    basic.showNumber(x)
})
