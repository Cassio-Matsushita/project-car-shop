import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Teste a busca por motos através do id', function () {
  it('Teste a busca das motos usando o id com SUCESSO', async function () {
    const motorcycle = {
      id: '634852326b35b59438fbea31',
      model: 'Honda Cbr 1000rr',
      year: 2011,
      color: 'Orange',
      status: true,
      buyValue: 59.99,
      category: 'Street',
      engineCapacity: 1000,
    };

    sinon.stub(Model, 'findById').resolves(motorcycle);

    const service = new MotorcycleService();
    const result = await service.getById('634852326b35b59438fbea31');

    expect(result).to.be.deep.equal(motorcycle);

    sinon.restore();
  });
});