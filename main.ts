input.onGesture(Gesture.ThreeG, function () {
    game.pause()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.Angry)
    game.resume()
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    if (sprite.isTouching(_1)) {
        _1.set(LedSpriteProperty.X, randint(0, 4))
        game.addScore(1)
        music.playTone(988, music.beat(BeatFraction.Half))
    }
})
input.onButtonPressed(Button.AB, function () {
    serial.redirectToUSB()
    music.playTone(988, music.beat(BeatFraction.Double))
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    music.playTone(988, music.beat(BeatFraction.Half))
    _1.delete()
    sprite.delete()
    basic.clearScreen()
    images.createBigImage(`
        # # # . # # # . . .
        # . # . . # . . . .
        # # # . # # # . . .
        # . # . . # . . . .
        # # # . # # . . . .
        `).scrollImage(1, 200)
    basic.clearScreen()
    for (let index = 0; index < 99999 * 22222; index++) {
        basic.showNumber(game.score())
    }
})
let sprite: game.LedSprite = null
let _1: game.LedSprite = null
basic.showLeds(`
    . . # . .
    # . # . #
    # . # . #
    # . . . #
    . # # # .
    `)
music.playTone(988, music.beat(BeatFraction.Half))
game.setScore(0)
basic.clearScreen()
sprite = game.createSprite(2, 2)
_1 = game.createSprite(randint(0, 4), 2)
sprite = sprite
basic.forever(function () {
    radio.sendNumber(game.score())
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(500)
    radio.setGroup(0)
})
