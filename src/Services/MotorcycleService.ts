import { isValidObjectId } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorCycleODM from '../Models/MotorcycleODM';
import Motorcycle from '../Domains/Motorcycle';
import HttpErros from '../utils/HttpError';

export default class MotorcycleService {
  private createMotorcycleDomain(moto: IMotorcycle | null): Motorcycle | null {
    if (moto) {
      return new Motorcycle(moto);
    }
    return null;
  }

  public async create(moto: IMotorcycle) {
    const motorcycleODM = new MotorCycleODM();
    const result = await motorcycleODM.create(moto);
    return this.createMotorcycleDomain(result);
  }

  public async getAll() {
    const motorcycleODM = new MotorCycleODM();
    const motos = await motorcycleODM.getAll();
    const motorcycleArray = motos.map((moto) => this.createMotorcycleDomain(moto));
    return motorcycleArray;
  }

  public async getById(id: string) {
    const motorcycleODM = new MotorCycleODM();
    if (!isValidObjectId(id)) throw new HttpErros(422, 'Invalid mongo id');
    const result = await motorcycleODM.getById(id);
    if (result === null) return 'Not found';
    return this.createMotorcycleDomain(result);
  }

  public async getByIdAndUpdate(id: string, obj: Partial<IMotorcycle>) {
    const motorcycleODM = new MotorCycleODM();
    if (!isValidObjectId(id)) throw new HttpErros(422, 'Invalid mongo id');
    const result = await motorcycleODM.getByIdAndUpdate(id, obj);
    if (result === null) return 'Not found';
    return this.createMotorcycleDomain(result);
  }
}
