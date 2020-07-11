input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # # # #
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
})
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
	
})
