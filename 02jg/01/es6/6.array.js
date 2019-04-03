//let arr1 = [24, 56, 88, 90, 5];
// filter  返回true 此元素 保留在新数组中 返回false 则删除
/*
let arr2 = arr1.filter(function (item) {
    return item >= 60
});

console.log(arr2);*/


/*
Array.prototype.filter1 = function (fn) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        let flag = fn(this[i]);
        flag && newArr.push(this[i])
    }
    return newArr;
}

let arr2 = arr1.filter1(function (item) {
    return item >= 60
})

console.log(arr2);
*/


// map reduce reduceRight filter forEach
// some find findIndex every

/*
let arr4 = [1, 2, 3];

Array.prototype.find = function (fn) {
    for (let i = 0; i < this.length; i++) {
        let flag = fn(this[i]);
        if (flag) {
            return this[i]
        }
    }
}
Array.prototype.findIndex = function (fn) {
    for (let i = 0; i < this.length; i++) {
        let flag = fn(this[i]);
        if (flag) {
            return i
        }
    }
}

let result = arr4.find(function (item) {
    return item === 2
})
/!*
let result = arr4.find(function (item) {
    return item === 2
});

console.log(result);*!/
*/


/*let arr4 = [1, 2, 3];

Array.prototype.some = function (fn) {
    for (let i = 0; i < this.length; i++) {
        let flag = fn(this[i]);

        if (flag) {
            return flag
        }

    }
    return false;
}*/

/*
let arr4 = [1, 2, 3];
Array.prototype.every = function (fn) {
    let flag = true;
    for (let i = 0; i < this.length; i++) {
        let flag = fn(this[i]);

        if(!flag) {
            flag = false;
        }

    }
    return flag
}
*/

/*function print(a, b) {
    /!*!//let arr = Array.prototype.slice.call(arguments)
    arr.forEach(function (item) {
        console.log(item);
    })*!/

    /!*Array.prototype.forEach.call(arguments, function (item) {
        console.log(item);
    })*!/
    // 把一个类数组 转换成数组
    Array.from(arguments).forEach(function (item) {
        console.log(item);
    })

}

print('a', 'b', 'c')*/

//let arr6 = Array(3);
let arr6 = Array.of(3)
console.log(arr6);

