import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';

describe('Teste a busca por todos os carros', function () {
  it('Teste a busca de todos os carros com SUCESSO', async function () {
    // Arrange
    const inputCar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const resultCar = {
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    sinon.stub(Model, 'create').resolves(resultCar);

    // Act
    const service = new CarService();
    const result = await service.create(inputCar);

    // Assert
    expect(result).to.be.deep.equal(resultCar);

    sinon.restore();
  });
});
