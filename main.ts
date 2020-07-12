input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # . # #
            . # # # .
            # . # . #
            `)
    }
    basic.clearScreen()
    for (let index = 0; index < 1; index++) {
        // 延迟 1 小时
        basic.pause(3600000)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        `)
    for (let index = 0; index < 1; index++) {
        // 延迟 1 小时
        basic.pause(3600000)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        . # . # .
        `)
    for (let index = 0; index < 1; index++) {
        // 延迟 1 小时
        basic.pause(3600000)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . # # # .
        . # . # .
        `)
    for (let index = 0; index < 1; index++) {
        // 延迟 1 小时
        basic.pause(3600000)
    }
    basic.showLeds(`
        . . . . .
        . # # # .
        # # # # #
        . # # # .
        . # . # .
        `)
    for (let index = 0; index < 1; index++) {
        // 延迟 1 小时
        basic.pause(3600000)
    }
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . # . # .
        `)
    basic.pause(5000)
    basic.showIcon(IconNames.Yes)
})
function 增加1度 () {
    servos.P0.setAngle(0)
    basic.pause(1000)
    servos.P0.setAngle(30)
    basic.pause(1000)
    servos.P0.setAngle(0)
    basic.pause(1000)
}
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
	
})
