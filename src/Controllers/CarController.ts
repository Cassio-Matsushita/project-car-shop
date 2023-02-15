import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const getAllCars = await this.service.getAll();
      return this.res.status(200).json(getAllCars);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    try { 
      const { id } = this.req.params;
      const getById = await this.service.getById(id);
      if (getById === 'Not found') this.res.status(404).json({ message: 'Car not found' });
      
      return this.res.status(200).json(getById);
    } catch (error) {
      this.next(error);
    }
  }

  public async getByIdAndUpdate() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try { 
      const { id } = this.req.params;
      const getById = await this.service.getById(id);
      if (getById === 'Not found' || getById === null) {
        return this.res.status(404).json({ message: 'Car not found' });
      }
      const getByIdAndUpdate = await this.service.getByIdAndUpdate(id, car);
      return this.res.status(200).json(getByIdAndUpdate);
    } catch (error) {
      this.next(error);
    }
  }
}
