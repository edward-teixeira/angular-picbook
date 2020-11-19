
export class Alert {
  constructor(
    public readonly message: string,
    public readonly alertType: AlertType
  ) { }

}

export enum AlertType {
  SUCCESS,
  WARNING,
  DANGER,
  INFO
}

