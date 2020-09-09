controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 1 5 5 1 . . . . . . 
        . . . . . 4 5 1 1 5 4 . . . . . 
        . . . . . 4 5 1 1 5 4 . . . . . 
        . . . . . . 1 5 5 1 . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, luigi_spaceship, 0, -50)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    sprite.destroy(effects.confetti, 500)
})
let OND_SVAMP: Sprite = null
let projectile: Sprite = null
let luigi_spaceship: Sprite = null
luigi_spaceship = sprites.create(img`
    c c c c c c c c c c c c c c c c 
    c . . . . . . . . . . . . . . c 
    c . . . . . . . . . . . . . . c 
    c . . . . . . 7 7 . . . . . . c 
    c . . . . . . 4 4 . . . . . . c 
    c . . . . . . 4 4 . . . . . . c 
    c . . . . . 7 7 7 7 . . . . . c 
    c . . . . . 8 8 8 8 . . . . . c 
    c . . . f 7 7 8 8 7 7 f . . . c 
    c . . . f 8 8 7 7 8 8 f . . . c 
    c . . . . f f f f f f . . . . c 
    c . . . . . . . . . . . . . . c 
    c . . . . . . . . . . . . . . c 
    c . . . . . . . . . . . . . . c 
    c . . . . . . . . . . . . . . c 
    c c c c c c c c c c c c c c c c 
    `, SpriteKind.Player)
controller.moveSprite(luigi_spaceship, 100, 100)
luigi_spaceship.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(1000, function () {
    OND_SVAMP = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a 9 9 a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . 4 f 4 4 f 4 . . . . . 
        . . . . . 4 f 4 4 f 4 . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    OND_SVAMP.y = 0
    OND_SVAMP.x = randint(0, scene.screenWidth())
    OND_SVAMP.ay = 100
})
