class Shapes {
    constructor() {
        this.shapeColor = '';
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render() {
        throw new Error('Child class must implement a render() method.');
    }
}

module.exports = Shapes;