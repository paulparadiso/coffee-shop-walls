import { action, makeObservable, observable } from "mobx";

class LayoutSelector {

    constructor() {
        this.mode = null;
        makeObservable(this, {
            mode: observable,
            setMode: action
        });
        window.addEventListener('resize', () => this.resizeHandler());
        this.setMode();
    }

    setMode() {
        const width = window.innerWidth;
        if(width <= 1080) {
            this.mode = 'vertical';
        } else if(width <= 1776) {
            this.mode = 'charter-house'
        }else if (width <= 1920) {
            this.mode = 'horizontal';
        } else if (width <= '9594') {
            this.mode = 'living-room';
        } else {
            this.mode = 'charter-house';
        }
        console.log(this.mode);
    }

    resizeHandler() {
        this.setMode();
    }

}

export default LayoutSelector;