import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';

import AbstractODM from './AbstractODM';

export default class CarODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'Motorcycle');
  }

  public async create(obj: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...obj });
  }

  public async getAll(): Promise<IMotorcycle[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise<IMotorcycle | null> {
    return this.model.findById(id);
  }

  public async getByIdAndUpdate(id: string, obj: Partial<IMotorcycle>):
  Promise<IMotorcycle | null> {
    return this.model.findByIdAndUpdate(id, obj, { new: true });
  }
}
