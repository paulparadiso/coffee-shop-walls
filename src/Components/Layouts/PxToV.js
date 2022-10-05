class PxToV {

    constructor(w, h) {
        this.w = w;
        this.h = h;
    }

    toVh(p) {
        return p / this.h * 100.0;
    }

    toVw(p) {
        return p / this.w * 100.0;
    }

}

export default PxToV;