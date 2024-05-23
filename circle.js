class Circle {

    private radius: number = 1.0;
    private color: string = "red";

    constructor();
    constructor(radius: number);
    constructor(radius: number, color: string);
    constructor(radius?: number, color?: string) {
        if (radius !== undefined) {
            this.radius = radius;
        }
        if (color !== undefined) {
            this.color = color;
        }
    }


    getRadius(): number {
        return this.radius;
    }


    setRadius(radius: number): void {
        this.radius = radius;
    }


    getColor(): string {
        return this.color;
    }


    setColor(color: string): void {
        this.color = color;
    }


    toString(): string {
        return `Circle[radius=${this.radius},color=${this.color}]`;
    }


    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}


const defaultCircle = new Circle();
console.log(defaultCircle.toString());

const radiusCircle = new Circle(2.5);
console.log(radiusCircle.toString());

const customCircle = new Circle(3.5, "blue");
console.log(customCircle.toString());

console.log(customCircle.getArea());
console.log(customCircle.getCircumference());
