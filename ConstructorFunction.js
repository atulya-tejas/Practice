function IceCream(colour,flavour){
    this.colour=colour;
    this.flavour=flavour;
    this.describe = function(){
        return `This is a ${this.colour} of ${this.flavour} flavour`;
    }
}
IceCream.prototype.price = () => {
    return `This ice cream cost 20 rupees`;
}

let a = new IceCream("Red","chocolate")

console.log(a)
console.log(a.describe())
console.log(a.price())


