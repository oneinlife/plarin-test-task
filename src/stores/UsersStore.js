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
        this.users = response.data.data;
        runInAction(() => {
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
}

export default UsersStore;
