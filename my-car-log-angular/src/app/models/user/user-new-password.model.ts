export class UserNewPasswordModel {
  constructor(
    public username: string,
    public oldPassword: string,
    public newPassword: string
  ) {}
}
