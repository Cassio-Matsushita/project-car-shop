import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Teste a criação de Motorcycles ', function () {
  it('Teste a criação de uma Motorcycle com SUCESSO', async function () {
    // Arrange
    const inputMoto = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const resultMoto = {
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'create').resolves(resultMoto);

    // Act
    const service = new MotorcycleService();
    const result = await service.create(inputMoto);

    // Assert
    expect(result).to.be.deep.equal(resultMoto);

    sinon.restore();
  });
});
