/*
var a = 10;
var b = {
    c: 22
}

var c = [1,3]
console.log(a.toString());
console.log(b.toString());
console.dir(c.toString());*/


/*
var num = 12;

console.log(isNaN(num));

console.log(isNaN(''));*/

/*console.log(!'啊啊啊');

console.log(!!null);*/

/*
var obj = {
    name: 'Michael',
    age: 9
}


console.log(obj.name);
obj.gender = '男'

console.log(obj);

//delete obj['age']

obj.name = null

console.log(obj);*/


/*
var obj = {
    name: 'Michael',
    age: 19,
    //Jack: '哈哈哈'
}

var name = 'Jack';

console.log(obj.name);
console.log(obj[name]);*/
/*
var obj = {}
obj[{}] = 300

console.log(obj['[object Object]']);

console.log(({}).toString())*/


/*
var fn = function () {

}

console.log(typeof fn);*/


/*
var ary1 = [3,4];

var ary2 = ary1;

ary2[0] = 1;
ary2 = [4,5];
ary2[1] = 2
ary1[1] = 0

console.log(ary1, ary2);
*/


/*
num = 10;

num >= 10 ? (++num , num *= 10) : null

console.log(num);*/


for(var i=0;i<10;i+=2){
    if(i<=5){
        i++;
        continue;
    }else{
        i+=3;
        break;
    }
    console.log(i);
}
//console.log(i);

console.log([] == false);
console.log(![] == false);