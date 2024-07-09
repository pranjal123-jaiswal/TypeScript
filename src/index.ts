let text:number | string

type username = (n:number , m:number) => number

const func: username = (n, m) => {
    return n + m
}



////////////////// Array //////////////////////

let arr1:Number[] = []
let arr2: Array<Number | String> = new Array(20)

//////////////////////////////////////////////



/////////////// OBJECT ////////////////////

type obj = {
    height: number,
    weight: number,
    gender?: number
}

interface obj1  {
    height: number,
    weight: number,
    gender?: number
}

type FuncType = (n:number , m:number) => void
interface obj2 extends obj {
    scolar?: boolean
    func?: FuncType
}

const newObj: obj2 = {  
    weight: 15,
    height: 10,
    func: (n,m)=> {
        console.log(n,m)
    }
}
///////////////////////////////////////////


/////////////////// FUNCTION ///////////////

// optional parameter

type FuncT = (n: number , m: number , l?:number) => number

const function1: FuncT = (a , b , c) => {
    if(typeof c === "undefined") return a * b
    return a * b * c
}


// Rest parameter

type NymberArray = (...m:number[]) => number[]

const func1:NymberArray = (...m) => {
    return m
}

func1(25 , 88 , 65 , 77 ,23)


// With Objects

type GetData = (product:{
    name:string,
    stock:number,
    price:number
}) => void

const get: GetData = (product) => {
    console.log(product)
};

const product ={
    name:"a",
    stock:5,
    price:10
}

get(product)

// never

type themeMode = "light" | "Dark"

const errroHandler = (): never => {
    throw new Error()
}

const monde: themeMode = "light"


////////////////////////////////////


/////////// CLASSES //////////////

class Player{
    constructor(
        private height: number,
        public weight: number,
        protected power: number
    ){}

    // getMyHeight = () => {return this.height}

    get getMyHeight() : number {
        return this.height
    }

    set setMyHeight(val: number) {
         this.height = val
    }

}

class Player2 extends Player {
    special: boolean
    constructor(height:number , weight:number , power:number , special:boolean){
        super(
            height , weight , power
        )
        this.special = special
    }
    getMyPower = () => {
        this.power
    }
}

const abhi = new Player(100 , 25 , 33 )
abhi.getMyHeight
abhi.setMyHeight = 200



interface ProductType {
    name:string,
    price:number,
    stock:number,
    getId:() => string,
    id?:string,
    offer?: boolean
}

class Product implements ProductType {
    public name: string;
    public price: number;
    public stock: number;

    constructor(name:string , price:number , stock:number){
        this.name = name,
        this.price = price,
        this.stock = stock
    }
    getId= () => this.name

}

///////////////////////////////////////////////////////


////////// Type Assertation /////////////////////

const form = document.getElementById("myform") as HTMLFormElement

interface Person {
    [key: string] : string
    // name:string,
    // email: string
}

const myObj: Person = {
    name : "Abhi",
    email: "ndjdj"
}

const getData = (key: keyof Person): string => {
    return myObj[key]
}

////////////////////////////////////////////////


//////////// UTILITY /////////////////////////


// Partial type
type User = {
    name: string,
    email: string
}

type User2 = Partial<User>   // Makes optional

//Required type

type User1 = {
    name: string,
    email: string
}

type User21 = Required<User1> // Opposite of Partial

// ReadOnly type

type User11 = {
    name: string,
    email: string
}

type User211 = Readonly<User11>

// Record type

interface UsserInfo {
    age: number
}

type Username123 = "john" | "levi" | "elon" | "jack"

const users:  Record<Username123 , UsserInfo> = {
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
}

// Pick one
type pickUser =  Pick<User1 , "name">

// Omit type

type omitUser =  Omit<User1 , "name">

// Exclude 
type MyUnion = string | number | boolean | null | undefined
type Random = Exclude<MyUnion , boolean>

// Extract
type Random2 = Extract<MyUnion , boolean>

// NonNullable
type Random3 = NonNullable<MyUnion>

//////////////////////////////////////////////////////////


///////////// GENERIC ///////////////////

const func11= <T>(n: T): T => {
    return n
}

const ans = func11(20)


const func111 = <T , U extends T> (n:T , o:U): {n:T , o:U} => {
    return {n , o}
}

const ans1 = func111<number , number>(20,20)

