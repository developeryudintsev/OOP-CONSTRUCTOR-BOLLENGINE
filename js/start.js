let Ball = function () {
    this.x = 100;
    this.y = 100;
    this.xSpeed = -2;
    this.ySpeed = 3;
    this.canvas = document.querySelector('#canvas');
    this.element = canvas.getContext('2d');
};

Ball.prototype.start = function () {
    setInterval(() => {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        this.element.clearRect(0, 0, 200, 200);
        this.element.beginPath();
        this.element.arc(this.x, this.y, 3, 0, Math.PI * 2);
        this.element.fill();
        this.element.strokeRect(0, 0, 200, 200);

        this.changeSpeed();
    }, 30);
};

Ball.prototype.changeSpeed = function () {
    if (this.x < 0 || this.x > 200) {
        this.xSpeed = -this.xSpeed;
    }
    if (this.y < 0 || this.y > 200) {
        this.ySpeed = -this.ySpeed;
    }
}

