import { UsersStore } from "./UsersStore";

class Store {
  constructor(){
    this.userstore = new UsersStore();
  }
}

const store = new Store()

export default store;