input.onButtonPressed(Button.A, function () {
    music.stopMelody(MelodyStopOptions.All)
    tune += 1
})
let tune = 0
tune += 1
basic.forever(function () {
    if (tune == 1) {
        basic.showIcon(IconNames.Heart)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
    } else if (tune == 2) {
        basic.showIcon(IconNames.Happy)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
    } else if (tune == 3) {
        basic.showIcon(IconNames.Yes)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Blues), music.PlaybackMode.InBackground)
    } else if (tune == 4) {
        basic.showIcon(IconNames.Duck)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
    }
})
