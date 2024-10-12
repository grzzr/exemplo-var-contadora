scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
    sprites.changeDataNumberBy(jogador, "ouros", 1)
})
let jogador: Sprite = null
jogador = sprites.create(assets.image`jogador`, SpriteKind.Player)
sprites.setDataBoolean(jogador, "vivo", true)
sprites.setDataNumber(jogador, "vidas", 3)
sprites.setDataNumber(jogador, "ouros", 0)
let fantasma = sprites.create(assets.image`fantasma`, SpriteKind.Enemy)
sprites.setDataBoolean(fantasma, "vivo", true)
tiles.setCurrentTilemap(tilemap`nivel01`)
grid.place(jogador, tiles.getTileLocation(1, 1))
scene.cameraFollowSprite(jogador)
game.splash("Vidas: " + sprites.readDataString(jogador, "vidas"))
forever(function () {
    grid.moveWithButtons(jogador)
    if (jogador.overlapsWith(fantasma)) {
        sprites.changeDataNumberBy(jogador, "vidas", -1)
        if (sprites.readDataNumber(jogador, "vidas") == 0) {
            game.gameOver(false)
        }
        game.splash("Vidas: " + sprites.readDataString(jogador, "vidas"))
        grid.place(jogador, tiles.getTileLocation(1, 1))
    }
})
