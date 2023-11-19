basic.forever(function () {
    if (input.lightLevel() < 50) {
        music.play(music.stringPlayable("C D E D C D F C ", 120), music.PlaybackMode.UntilDone)
    } else if (input.lightLevel() > 200) {
        music.play(music.stringPlayable("C5 A B C5 A C5 - B ", 160), music.PlaybackMode.UntilDone)
    }
})
