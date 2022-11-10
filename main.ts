let x = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    x = input.lightLevel()
    if (x < 50) {
        led.setBrightness(255)
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    }
})
