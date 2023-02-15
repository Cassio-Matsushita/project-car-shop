import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import HttpErros from '../utils/HttpError';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const result = await carODM.create(car);
    return this.createCarDomain(result);
  }

  public async getAll() {
    const carODM = new CarODM();
    const cars = await carODM.getAll();
    const carArray = cars.map((car) => this.createCarDomain(car));
    return carArray;
  }

  public async getById(id: string) {
    const carODM = new CarODM();
    if (!isValidObjectId(id)) throw new HttpErros(422, 'Invalid mongo id');
    const result = await carODM.getById(id);
    if (result === null) return 'Not found';
    return this.createCarDomain(result);
  }

  public async getByIdAndUpdate(id: string, obj: Partial<ICar>) {
    const carODM = new CarODM();
    if (!isValidObjectId(id)) throw new HttpErros(422, 'Invalid mongo id');
    const result = await carODM.getByIdAndUpdate(id, obj);
    if (result === null) return 'Not found';
    return this.createCarDomain(result);
  }
}
