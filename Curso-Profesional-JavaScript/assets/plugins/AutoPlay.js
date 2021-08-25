class AutoPlay {
    constructor(player) {
        this.player = player;
    }
    run() {
        this.player.muted = true;
        this.player.play();
    }
}

export default AutoPlay;