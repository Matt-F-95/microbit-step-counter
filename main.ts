input.onButtonPressed(Button.AB, function () {
    steps = 0
    basic.showNumber(steps)
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    steps += 100
    basic.showNumber(steps)
})
let steps = 0
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
steps = 0
basic.showString("PRESS A + B TO RESET")
basic.showArrow(ArrowNames.East)
basic.showArrow(ArrowNames.West)
basic.showNumber(steps)
basic.forever(function () {
    if (steps == 100) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showIcon(IconNames.Yes)
    }
    if (steps == 500) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.showIcon(IconNames.Happy)
    }
    if (steps == 1000) {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
        basic.showIcon(IconNames.SmallHeart)
    }
    if (steps == 2000) {
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
        basic.showIcon(IconNames.Heart)
    }
    if (steps == 5000) {
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
        basic.showIcon(IconNames.Butterfly)
    }
    if (steps == 7500) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
        basic.showIcon(IconNames.StickFigure)
    }
    if (steps == 10000) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
        basic.showIcon(IconNames.Sword)
    }
    if (steps == 12500) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
        basic.showIcon(IconNames.Pitchfork)
    }
    if (steps == 15000) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
        basic.showIcon(IconNames.LeftTriangle)
    }
    if (steps == 17500) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
        basic.showIcon(IconNames.Asleep)
    }
    if (steps == 20000) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
        basic.showIcon(IconNames.Silly)
    }
    if (steps == 25000) {
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        basic.showIcon(IconNames.Skull)
    }
    if (steps == 30000) {
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.ForeverInBackground)
        basic.showIcon(IconNames.Ghost)
    }
})
