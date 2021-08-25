class MediaPlayer {
    constructor({video, plugins}){
        this.media = video;
        this.plugins = plugins || [];

        this._initPlugins();
    }

    _initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run();
        })
    }
    
    play() {
        this.media.play();
    };
    
    pause()  {
        this.media.pause();
    };
    
    togglePlay() {
        this.media.paused ? this.play() : this.pause();
    };

    mute() {
        this.media.muted = true;
    }

    unMute() {
        this.media.muted = false;
    }

    toggleMute() {
        this.media.muted ? this.unMute() : this.mute();
    }
}

export default MediaPlayer;