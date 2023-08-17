let a = [10,20,30,40,50,60,70,80];
let b = a.filter(function(item) {
    return item > 50;
})

let c = a.reduce(function(a,b) {
    return a+b;
})
console.log(c)

let d = [[10,20],[30,40],[50,60],[70,80]];

console.log(d.flat());

let str = "shubham, yogender, rajesh";
console.log(str.split(","));

console.log(a.join(","));


let obj = {
    name : 'Mohit',
    age : 59,
    address : 'jaiput'
}

console.log(obj.name)
console.log(obj.age)
console.log(obj.address)


let ob = [
    {
        name : 'Mohit',
        age : 59,
        address : 'jaipur'
    },
    {
        name : 'Ankit',
        age : 39,
        address : 'Udaipur'
    },
    {
        name : 'Sumit',
        age : 60,
        address : 'Jodhpur'
    }
]

for(let i of ob) {
    console.log(i.name,i.age,i.address);
}

let object = [
    {
        name : 'Sumit',
        age : 10,
    },
    {
        name : 'Aakash',
        age : 15,
    },
    {
        name : 'Ankit',
        age : 22,
    },
    {
        name : 'Yash',
        age : 56,
    },
    {
        name : 'Anand',
        age : 60,
    },
    {
        name : 'Rajesh',
        age : 39,
    },
    {
        name : 'Shubham',
        age : 18,
    },
    {
        name : 'Yogender',
        age : 35,
    },
    {
        name : 'Anuj',
        age : 27,
    },
    {
        name : 'Sumit',
        age : 11,
    },
    
]

let e = object.filter(function(item) {
    return item.age >= 18;
})

console.log(e);