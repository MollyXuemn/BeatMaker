class DrumKit {
    constructor() {
        this.pads = document.querySelectorAll(".pad");
        this.kickAudio = document.querySelectorAll(".kick-sound");
        this.snareAudio = document.querySelectorAll(".snare-sound");
        this.hihatAudio = document.querySelectorAll(".hithat-sound");
        this.index = 0 ;
    }

    repeat() {
        let step = this.index % 8;
        const activeBars = document.querySelectorAll(`.b${step}`);
        this.index++;
    }
    start() {
        setInterval(() => {
            this.repeat();
        }, 1000);
    }
}