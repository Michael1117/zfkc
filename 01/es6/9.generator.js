/*
* 生成器
* */

function read(books) {
    let index = 0;
    return {
        next() {
            let done = index == books.length;
            let value = books[index++]
            return {
                value,
                done
            }
        }
    }
}

// 迭代器

let it = read(['js', 'node','css']);
// it 有一个方法叫做next  每次调用 next 都会返回一个结果 {value, done}
/*
let r1 = it.next();
let r2 = it.next();
let r3 = it.next();
console.log(r1, r2, r3);

*/

let result;
do{
    result = it.next();
    console.log(result);
}while (!result.done)
