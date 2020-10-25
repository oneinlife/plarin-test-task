import { makeAutoObservable } from 'mobx';

const sendToServer = error => {
  console.log(error);
};

class ErrorsStore {
  errors = [];

  constructor() {
    makeAutoObservable(this);
  }

  logError(error) {
    sendToServer(error);
    this.addError(error);
    setTimeout(() => {
      this.removeError();
    }, 5000);
  }

  addError(error) {
    this.errors.unshift(error);
  }

  removeError() {
    this.errors.pop();
  }
}

const errorsStore = new ErrorsStore();

export default errorsStore;
