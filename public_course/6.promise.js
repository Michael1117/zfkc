class Promise{
  constructor(excutorCallBack) {
    this.status = 'pending';
    this.value = undefined;
    this.fulfilledAry = [];  // 成功要做的方法
    this.rejectedAry = [];    // 失败要做的方法

    // 执行excutor
    let resolveFn = result => {
      
      let timer = setTimeout(() => {
        clearTimeout(timer)
        if(this.status !== 'pending') return
        this.status = 'fulfilled'
        this.value = result;
        this.fulfilledAry.forEach(item => item(this.value))
      }, 0 )
      
    }

    let rejectFn = reason => {
      let timer = setTimeout(() =>{
        clearTimeout(timer);
        if(this.status !== 'pending') return 
        this.status = 'rejected'
        this.value = reason
  
        this.rejectedAry.forEach(item => item(this.value))
      },0 )
      
    }

    // 执行excutor (异常捕获)
    try{
      excutorCallBack(resolveFn, rejectFn);
    }catch(err) {
      // 有异常信息按照rejected 状态处理
      rejectFn(err)
    }
    
  }

  then(fulfilledCallBack, rejectedCallBack) {
    // 处理不传递的状况
    typeof fulfilledCallBack !== 'function' ? fulfilledCallBack = result => result : null;
    typeof rejectedCallBack !== 'function' ? rejectedCallBack = reason => {
      throw new Error(reason instanceof Error ? reason.message: reason);
    }: null;
    // 返回一个新的promise 实例
    return new Promise((resolve, reject) =>{
      this.fulfilledAry.push(() => {
        try{
          let x = fulfilledCallBack(this.value)
          if(x instanceof Promise) {
            x.then(resolve, reject);
            return;
          }
          resolve(x)
        }catch(err) {
          reject(err)
        }
      });

      this.rejectedAry.push(()=> {
        try{
          let x = rejectedCallBack(this.value)

          resolve(x)
        }catch(err) {
          reject(err)
        }
      })
    })
    //this.fulfilledAry.push(fulfilledCallBack);

    //this.rejectedAry.push(rejectedCallBack)
  }

  catch(rejectedCallBack) {
    return this.then(null, rejectedCallBack)
  }

  static all(promiseAry = []) {  // Promise.all()
    return new Promise((resolve, reject) => {
      let index = 0, // 记录有几个成功了
          result = []  // 记录成功的结果
      for(let i = 0; i < promiseAry.length; i++) {
        // promiseAry[i] 每一个需要处理的promise实例
        promiseAry[i].then(val => {
          index ++;
          result[i] = val;  // 索引需要和promiseAry对应上 ，保证结果的顺序和数组顺序一致
          if(index === promiseAry.length) {
            resolve(result)
          }
        }, reason => {
          reject(reason)
        })
      }
    })
  }
}

module.exports = Promise;