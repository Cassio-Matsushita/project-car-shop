import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';

const motoArray = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];

describe('Teste a busca por todas as motos', function () {
  it('Teste a busca de todas as motos com SUCESSO', async function () {
    // Arrange
    
    sinon.stub(Model, 'find').resolves(motoArray);

    // Act
    const service = new MotorcycleService();
    const result = await service.getAll();

    // Assert
    expect(result).to.be.deep.equal(motoArray);

    sinon.restore();
  });
});
