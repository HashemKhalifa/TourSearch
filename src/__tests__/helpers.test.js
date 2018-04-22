import { CAPcase } from '../helpers.js';

describe('Helpers -> CAPcase', () => {
  it('it should return correct kebab case string ', () => {
    const string = 'Hashem Khalifa';
    const expected = 'hashem-khalifa';
    expect(CAPcase(string)).toEqual(expected);
  });
});
