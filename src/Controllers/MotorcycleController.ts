import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.create(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const getAllMotorcycles = await this.service.getAll();
      return this.res.status(200).json(getAllMotorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    try { 
      const { id } = this.req.params;
      const getById = await this.service.getById(id);
      if (getById === 'Not found') this.res.status(404).json({ message: 'Motorcycle not found' });
      
      return this.res.status(200).json(getById);
    } catch (error) {
      this.next(error);
    }
  }

  public async getByIdAndUpdate() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try { 
      const { id } = this.req.params;
      const getById = await this.service.getById(id);
      if (getById === 'Not found' || getById === null) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      const getByIdAndUpdate = await this.service.getByIdAndUpdate(id, motorcycle);
      return this.res.status(200).json(getByIdAndUpdate);
    } catch (error) {
      this.next(error);
    }
  }
}