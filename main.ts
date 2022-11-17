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
    led.setBrightness(255 - input.lightLevel())
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
basic.forever(function () {
	
})
