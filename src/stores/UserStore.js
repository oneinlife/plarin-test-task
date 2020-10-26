import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';
import ErrorsStore from './ErrorsStore';

class UserStore {
  id = null;

  firstName = null;

  lastName = null;

  email = null;

  avatar = null;

  isLoading = false;

  parent = null;

  constructor(parent, { id, first_name: firstName, avatar }) {
    makeAutoObservable(this);
    this.id = id;
    this.firstName = firstName;
    this.avatar = avatar;
    this.parent = parent;
  }

  setLoading(isLoading) {
    this.isLoading = isLoading;
  }

  loadFull(cb) {
    this.setLoading(true);
    axios({
      method: 'get',
      url: `https://reqres.in/api/users/${this.id}`,
    })
      .then(({ data }) => {
        runInAction(() => {
          this.setLoading(false);
          this.lastName = data.data.last_name;
          this.email = data.data.email;
          this.avatar = data.data.avatar;
          cb();
        });
      })
      .catch(error => {
        this.setLoading(false);
        ErrorsStore.logError({ message: 'Не удалось загрузить данные пользователя', error });
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
      })
      .catch(error => {
        ErrorsStore.logError({ message: 'Не удалось обновить данные пользователя', error });
      });
  }

  deleteUser() {
    axios({
      method: 'delete',
      url: `https://reqres.in/api/users/${this.id}`,
    })
      .then(() => {
        this.parent.deleteUser(this.id);
      })
      .catch(error => {
        ErrorsStore.logError({ message: 'Не удалось удалить пользователя', error });
      });
  }
}

export default UserStore;
