import FloatingDiv from './FloatingDiv'

const MouseTrailItem = () => {
    this.x = 0;
    this.y = 0;
    this.div = 

    MouseTrailItem.prototype.draw = function() {
        this.node.style.left = this.x + "px";
        this.node.style.top = this.y + "px";
    };
};