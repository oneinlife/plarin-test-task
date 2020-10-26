import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';
import UserStore from './UserStore';
import ErrorsStore from './ErrorsStore';

class UsersStore {
  users = [];

  totalPages = null;

  currentPage = null;

  isLoading = true;

  constructor() {
    makeAutoObservable(this);
    this.loadUsers();
  }

  loadUsers(page = 1) {
    this.isLoading = true;
    axios({
      method: 'get',
      url: `https://reqres.in/api/users?page=${page}`,
    })
      .then(response => {
        runInAction(() => {
          this.users = response.data.data.map(user => new UserStore(this, user));
          this.isLoading = false;
          this.totalPages = response.data.total_pages;
          this.currentPage = response.data.page;
        });
      })
      .catch(error => {
        this.isLoading = false;
        ErrorsStore.logError({ message: 'Не удалось загрузить список пользователей', error });
      });
  }

  changePage(page) {
    this.currentPage !== page &&
      this.loadUsers(page);
  }

  addUser(user) {
    if (user.firstName) {
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
            this.users.unshift(new UserStore(this, response.data));
            this.users.length > 6 && this.users.pop();
          });
        })
        .catch(error => {
          ErrorsStore.logError({ message: 'Не удалось создать пользователя', error });
        });
    } else {
      ErrorsStore.logError({ message: 'Невозможно создать пользователя без имени' });
    }
  }

  deleteUser(id) {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}

export default UsersStore;
