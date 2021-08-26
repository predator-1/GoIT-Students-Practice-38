/**
 * Напиши класс Client который создаёт объект со свойствами login и email.
 * Объяви приватные свойства #login и #email, доступ к которым сделай через
 * геттер и сеттер login и email.
 */

class Client {
  #login;
  #email;

  get login() {
    return this.#login ?? '';
  }

  set login(value) {
    this.#login = value;
  }

  get email() {
    return this.#email ?? '';
  }

  set email(value) {
    if (value.includes('@')) {
      this.#email = value;
    }
  }
}

const client = new Client();
client.login = 'new_login';
client.email = 'new@email.com';

console.log('login --- ', client.login);
console.log('email --- ', client.email);
