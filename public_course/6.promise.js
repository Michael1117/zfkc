class Promise{
  constructor(excutorCallBack) {

    this.status = 'pending';
    this.value = undefined;
    this.fulfilledAry = [];  // 成功要做的方法
    this.rejectedAry = [];  // 失败要做的方法

    // => 执行excutor (异常捕获)
    let resolveFn = result => {
      let timer = setTimeout (() => {
        clearTimeout(timer)
        if(this.status !== 'pending') return
        this.status = 'fulfilled';
        this.value = result;

        this.fulfilledAry.forEach(item => item(this.value))
      }, 0)
    };

    let rejectFn = reason => {
      let timer = setTimeout (() => {
        clearTimeout(timer);
        if(this.status !== 'pending') return
        this.status = 'rejected';
        this.value = reason;
        this.rejectedAry.forEach(item => item(this.value))
      }, 0)
    }

    try{
      excutorCallBack(resolveFn, rejectFn)
    }catch(err){
      // 有异常信息 按照rejected状态处理
      rejectFn(err)
    }
  } 

  //fulfilledCallBack成功的回调   rejectedCallBack失败的回调
  then(fulfilledCallBack, rejectedCallBack) {
    this.fulfilledAry.push(fulfilledCallBack);
    this.rejectedAry.push(rejectedCallBack)
  }
}

module.exports = Promise;