function musica () {
	
}
function mano () {
    pins.servoWritePin(AnalogPin.P2, 60)
    basic.pause(750)
    pins.servoWritePin(AnalogPin.P2, 180)
}
input.onPinPressed(TouchPin.P1, function () {
    premuto = 1
    basic.showIcon(IconNames.Heart)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    premuto = 1
})
let premuto = 0
music.setTempo(60)
premuto = 0
basic.showIcon(IconNames.SmallHeart)
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.servoWritePin(AnalogPin.P2, 180)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (premuto == 1) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Forever)
        basic.showLeds(`
            . # # # .
            # . . . #
            . . . . .
            . # . # .
            . . . . .
            `)
        basic.pause(randint(0, 2000))
        mano()
        music.stopAllSounds()
        basic.showLeds(`
            . # # # .
            . # # # .
            # # # # #
            # . # . #
            . # # # .
            `)
        basic.pause(500)
        basic.clearScreen()
        premuto = 0
    }
})
