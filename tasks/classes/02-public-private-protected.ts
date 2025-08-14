// 2. Public, Private, and Protected Fields
// Create a class Account with:
// public username: string
// private password: string
// A method login(pwd: string) that checks if the password is correct.
// A method changePassword(newPwd: string) that changes the password only if the user is logged in.

class Account {
  public username: string = "";
  private password: string = "";
  private loggedIn: boolean = false;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  login(pwd: string) {
    if (pwd === this.password) {
      this.loggedIn = true;
      console.log("Login successful");
    } else {
      console.log("Incorrect password");
    }
  }

  changePassword(newPwd: string) {
    if (this.loggedIn) {
      this.password = newPwd;
      console.log("Password is changed");
    } else {
      console.log("You are not logged in");
    }
  }
}

//Example:
const account = new Account("Bega", "1234");
account.login("1234");
account.changePassword("0000");
