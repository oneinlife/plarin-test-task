import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';

export class UsersStore {
  users = [];

  totalPages = null;

  currentPage = null;

  isLoading = true;

  constructor() {
    makeAutoObservable(this);
    this.loadTodos();
  }

  loadTodos(page = 1) {
    this.isLoading = true;
    axios({
      method: 'get',
      url: `https://reqres.in/api/users?page=${page}`,
    })
      .then(response => {
        runInAction(() => {
          this.users = response.data.data;
          this.isLoading = false;
          this.totalPages = response.data.total_pages;
          this.currentPage = response.data.page;
        });
      });
  }

  changePage(page) {
    this.currentPage !== page &&
      this.loadTodos(page);
  }

  addUser(user) {
    axios({
      method: 'post',
      url: 'https://reqres.in/api/users',
      data: {
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
      },
    })
      .then(response => {
        runInAction(() => {
          this.users.unshift(response.data);
          this.users.pop();
        });
      });
  }

  updateUser({ firstName, lastName, email, id }) {
    axios({
      method: 'put',
      url: `https://reqres.in/api/users/${id}`,
      data: {
        first_name: firstName,
        last_name: lastName,
        email,
      },
    })
      .then(response => {
        runInAction(() => {
          const index = this.users.findIndex(user => user.id === id);
          this.users[index] = { ...this.users[index], ...response.data };
        });
      });
  }

  deleteUser(id) {
    axios({
      method: 'delete',
      url: `https://reqres.in/api/users/${id}`,
    })
      .then(() => {
        runInAction(() => {
          const index = this.users.findIndex(user => user.id === id);
          this.users.splice(index, 1);
        });
      });
  }
}

export default UsersStore;
