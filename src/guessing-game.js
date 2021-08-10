class GuessingGame {
    constructor() {}
        lowerBound;
        upperBound;
        result;
    setRange(min, max) {
        this.lowerBound = min;
        this.upperBound = max;
    }

    guess() {
        this.result = Math.ceil((this.upperBound - this.lowerBound) / 2) + this.lowerBound;
        return this.result;
    }

    lower() {
        this.upperBound = this.result;
    }

    greater() {
        this.lowerBound  = this.result;
    }
}

module.exports = GuessingGame;

