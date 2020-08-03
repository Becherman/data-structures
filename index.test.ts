import { greeting } from './index';

describe('simple test checking', () => {
  it('should run tests without erors', () => {
    expect(greeting).toEqual('hello');
  });
});
