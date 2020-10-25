import UsersStore from './UsersStore';
import ErrorsStore from './ErrorsStore';

class Store {
  constructor() {
    this.userstore = new UsersStore();
    this.errorsStore = ErrorsStore;
  }
}

const store = new Store();

export default store;
