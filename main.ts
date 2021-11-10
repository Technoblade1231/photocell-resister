// If light level is greater than 128 than show text wake up but if its less show animation
basic.forever(function () {
    if (input.lightLevel() > 128) {
        basic.showString("Wake up")
    }
    if (input.lightLevel() < 128) {
        basic.showLeds(`
            # # # . .
            . # # # .
            . . # # #
            . . . # #
            . . . . #
            `)
        basic.showLeds(`
            . # # . .
            . # # # .
            . . # # #
            . . . # #
            . . . . #
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # # #
            . . . # #
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . # # .
            . . # # #
            . . . # #
            . . . . #
            `)
    }
})
