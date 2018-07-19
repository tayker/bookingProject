export class User {
  private firstName: string;
  private lastName: string;
  private password: string;
  private phone: any;
  private email: string;
  private userType: string;
  private city: string;

  constructor(name, surname, password, phone, email, userType, city) {
    this.firstName = name;
    this.lastName = surname;
    this.password = password;
    this.phone = phone;
    this.email = email;
    this.userType = userType;
    this.city = city;
  }
}
