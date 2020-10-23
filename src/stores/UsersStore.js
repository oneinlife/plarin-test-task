import { makeAutoObservable, autorun, runInAction } from 'mobx';
import axios from 'axios';

export class UsersStore {
  users = [];
  isLoading = true

  constructor(transportLayer, authorStore) {
    makeAutoObservable(this)
    this.loadTodos()
  }

  loadTodos() {
    this.isLoading = true
    axios({
      method: 'get',
      url: 'https://reqres.in/api/users',
    })
    .then(response => {
      this.users = response.data.data;
      runInAction(() => {
        this.isLoading = false
      })
    });
  }
}
