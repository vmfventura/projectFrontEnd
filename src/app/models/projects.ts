export class Projects {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  isSavedInDB: boolean = false

  constructor (id: number, name: string, startDate: Date, endDate: Date){
    this.id = id;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.isSavedInDB = true;
  }
}
