import ICar from '../Interfaces/ICar';

export default class Car {
  private doorsQty: number;
  private seatsQty: number;
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;

  constructor(car: ICar) {
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status;
    this.buyValue = car.buyValue;
  }
}