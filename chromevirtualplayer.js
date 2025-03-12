function dispatchKey(type, key) {
    document.dispatchEvent(new KeyboardEvent(type, {keyCode: key}));
}
setInterval(function () {
    const KEY_CODE_SPACE_BAR = 32
    const KEY_CODE_ARROW_DOWN = 40
    const CANVAS_HEIGHT = Runner.instance_.dimensions.HEIGHT
    const DINO_HEIGHT = Runner.instance_.tRex.config.HEIGHT

    const obstacle = Runner.instance_.horizon.obstacles[0]
    const speed = Runner.instance_.currentSpeed

    if (obstacle) {
        const w = obstacle.width
        const x = obstacle.xPos 
        const y = obstacle.yPos
        const yFromBottom = CANVAS_HEIGHT - y - obstacle.typeConfig.height
        const isObstacleNearby = x < 25 * speed - w / 2

        if (isObstacleNearby) {
            if (yFromBottom > DINO_HEIGHT) {
            } else if (y > CANVAS_HEIGHT / 2) {
                dispatchKey("keyup", KEY_CODE_ARROW_DOWN)
                dispatchKey("keydown", KEY_CODE_SPACE_BAR)
            } else {
                dispatchKey("keydown", KEY_CODE_ARROW_DOWN)
            }
        }
    }
}, Runner.instance_.msPerFrame);
