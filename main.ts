input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let g2: game.LedSprite = null
let ghost: game.LedSprite = null
let sprite: game.LedSprite = null
game.setScore(0)
sprite = game.createSprite(2, 4)
let L = 0
basic.forever(function () {
    basic.pause(randint(0, 4000))
    ghost = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000 - game.score() * 10)
        ghost.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(50)
    L += 1
    ghost.delete()
})
basic.forever(function () {
    basic.pause(randint(0, 4000))
    g2 = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000 - game.score() * 10)
        g2.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(50)
    L += 1
    g2.delete()
})
basic.forever(function () {
    if (ghost) {
        if (sprite.isTouching(ghost)) {
            ghost.delete()
            game.addScore(1)
        }
    }
})
basic.forever(function () {
    if (g2) {
        if (sprite.isTouching(g2)) {
            g2.delete()
            game.addScore(1)
        }
    }
})
basic.forever(function () {
    if (L - game.score() == 5) {
        sprite.delete()
        game.gameOver()
    }
})
