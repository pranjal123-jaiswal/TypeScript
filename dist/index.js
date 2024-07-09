"use strict";
let text;
const func = (n, m) => {
    return n + m;
};
////////////////// Array //////////////////////
let arr1 = [];
let arr2 = new Array(20);
const newObj = {
    weight: 15,
    height: 10,
    func: (n, m) => {
        console.log(n, m);
    }
};
const function1 = (a, b, c) => {
    if (typeof c === "undefined")
        return a * b;
    return a * b * c;
};
const func1 = (...m) => {
    return m;
};
func1(25, 88, 65, 77, 23);
const get = (product) => {
    console.log(product);
};
const product = {
    name: "a",
    stock: 5,
    price: 10
};
get(product);
const errroHandler = () => {
    throw new Error();
};
const monde = "light";
////////////////////////////////////
/////////// CLASSES //////////////
class Player {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
    }
    // getMyHeight = () => {return this.height}
    get getMyHeight() {
        return this.height;
    }
    set setMyHeight(val) {
        this.height = val;
    }
}
class Player2 extends Player {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.getMyPower = () => {
            this.power;
        };
        this.special = special;
    }
}
const abhi = new Player(100, 25, 33);
abhi.getMyHeight;
abhi.setMyHeight = 200;
class Product {
    constructor(name, price, stock) {
        this.getId = () => this.name;
        this.name = name,
            this.price = price,
            this.stock = stock;
    }
}
///////////////////////////////////////////////////////
////////// Type Assertation /////////////////////
const form = document.getElementById("myform");
const myObj = {
    name: "Abhi",
    email: "ndjdj"
};
const getData = (key) => {
    return myObj[key];
};
const users = {
    john: {
        age: 23
    },
    levi: {
        age: 23
    },
    elon: {
        age: 23
    },
    jack: {
        age: 23
    }
};
//////////////////////////////////////////////////////////
///////////// GENERIC ///////////////////
const func11 = (n) => {
    return n;
};
const ans = func11(20);
const func111 = (n, o) => {
    return { n, o };
};
const ans1 = func111(20, 20);
