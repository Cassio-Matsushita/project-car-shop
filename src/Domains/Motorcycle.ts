import IMotorcycle from '../Interfaces/IMotorcycle';

export default class Motorcycle {
  private category: string;
  private engineCapacity: number;
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;

  constructor(moto: IMotorcycle) {
    this.category = moto.category;
    this.engineCapacity = moto.engineCapacity;
    this.id = moto.id;
    this.model = moto.model;
    this.year = moto.year;
    this.color = moto.color;
    this.status = moto.status;
    this.buyValue = moto.buyValue;
  }
}