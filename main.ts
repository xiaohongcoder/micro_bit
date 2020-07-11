input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(60000)
    basic.showIcon(IconNames.Yes)
})
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
}
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
