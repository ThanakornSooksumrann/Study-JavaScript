class Dog {
    constructor(name, name2) {
        this._name = name;
        this._name = name2;
    }

    introduce() {
        console.log("This is " + this._name + " ?");
    }

    static bark() { //เพราะเป็น static เลย ไม่ต้องสร้าง Obj
        console.log("Woof!");
    }

    static bark2() { 
        console.log("Woof!" + this._name2);
    }
}

const myDog = new Dog("Buster","Dragon");
myDog.introduce();

const myDogSc = new Dog("Dragon","Dragon");
myDogSc.introduce();

Dog.bark();
Dog.bark2();