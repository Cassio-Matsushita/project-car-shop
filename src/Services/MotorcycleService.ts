import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorCycleODM from '../Models/MotorcycleODM';
import Motorcycle from '../Domains/Motorcycle';

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
}
