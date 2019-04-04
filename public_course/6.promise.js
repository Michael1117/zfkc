class Promise{
  constructor(excutorCallBack) {
    this.status = 'pending';
    this.value = undefined;

    // 执行excutor
    let resolveFn = result => {
      if(this.status !== 'pending') return
      this.status = 'fulfilled'
      this.value = result;
    }

    let rejectFn = reason => {
      if(this.status !== 'pending') return 
      this.status = 'rejected'
      this.value = reason
    }
    excutorCallBack(resolveFn, rejectFn);
  }
}

module.exports = Promise;