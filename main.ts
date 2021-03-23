input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
})
let steps = 0
steps = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . # # # .
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    `)
basic.forever(function () {
    if (steps == 25) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . # . . .
            . # . # #
            . # . . #
            . # # # #
            `)
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
    }
    if (steps == 50) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . # . . .
            . # . # #
            . # . . #
            . # # # #
            `)
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
    }
    if (steps == 100) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . # . . .
            . # . # #
            . # . . #
            . # # # #
            `)
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
    }
})
