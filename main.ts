input.onButtonPressed(Button.AB, function () {
    steps = 0
    basic.showNumber(steps)
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
})
let steps = 0
steps = 0
basic.showIcon(IconNames.StickFigure)
basic.showString("PRESS A + B TO RESET")
basic.showArrow(ArrowNames.East)
basic.showArrow(ArrowNames.West)
basic.forever(function () {
    if (steps == 25) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("GREAT START!")
    }
    if (steps == 50) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.showString("KEEP IT UP!")
    }
    if (steps == 100) {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
        basic.showString("AMAZING!")
    }
    if (steps == 250) {
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
        basic.showString("NICE!")
    }
    if (steps == 500) {
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
        basic.showString("OUTSTANDING!")
    }
    if (steps == 1000) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
        basic.showString("OLYMPIAN!")
    }
})
