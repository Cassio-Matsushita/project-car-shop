import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';

describe('Teste a busca por todos os carros', function () {
  it('Teste a busca de todos os carros com SUCESSO', async function () {
    // Arrange
    const inputCar = {
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };

    const resultCar = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };

    sinon.stub(Model, 'findByIdAndUpdate').resolves(resultCar);

    // Act
    const service = new CarService();
    const result = await service.getByIdAndUpdate('634852326b35b59438fbea2f', inputCar);

    // Assert
    expect(result).to.be.deep.equal(resultCar);

    sinon.restore();
  });
});
