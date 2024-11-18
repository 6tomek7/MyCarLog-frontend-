export class UpdatingUserDetailsModel {
  constructor(
    public username?: string,
    public email?: string,
    public language?: string,
    public mode?: string,
    public birthday?: Date,
    public gender?: string,
    public country?: string
  ) {}
}
