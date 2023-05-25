class User {
  constructor(fullname, email, password) {
    (this.fullname = fullname),
      (this.email = email),
      (this.password = password);
  }

  login(email, senha) {
    if (email === this.email && senha === this.password) {
      console.log("Acesso liberado");
    } else {
      console.log("Dados incorretos. Tente novamente.");
    }
  }
}

const rogerio = new User("Rogério Souza", "rogerio@gmail.com", "novasenha");

rogerio.login("rogerio@gmail.com", "novasenha");
