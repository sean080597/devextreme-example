export interface Employee {
  ID: number;
  FirstName: string;
  LastName: string;
  Prefix: string;
  Position: string;
  BirthDate: string;
  HireDate: string;
  Notes: string;
  Address: string;
  StateID: number;
}

export interface State {
  ID: number;
  Name: string;
}
