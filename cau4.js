class Animal{
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }
    setName(newName){
        this.name = newName;
    }
    setWeight(newWeight){
        this.weight = newWeight;
    }
    getName(){
        console.log(this.name);
    }
    getWeight(){
        console.log(this.weight);

    }
    toString(){
        console.log(`The name is ${this.name} and the weight is ${this.weight}`)
    }
}

let objAnimal1 = new Animal("Elephant", 45.6);
objAnimal1.toString();

let objAnimal2 = new Animal("Cat", 10);
objAnimal2.setName("Mouse");
objAnimal2.getName();
