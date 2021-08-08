import { nameof, nameofFactory } from './string-utils';

describe('utils', () => {
  describe('stringUtils', () => {
    describe('nameof', () => {
      it('should return the name of the specified object prop', () => {
        const obj = {
          aaa: 123,
          bbb: 'abc',
        };

        expect(nameof<typeof obj>('aaa')).toEqual('aaa');
        expect(nameof<typeof obj>('bbb')).toEqual('bbb');
      });
    });

    describe('nameofFactory', () => {
      it('should return a typed nameof function', () => {
        const obj = {
          aaa: 123,
          bbb: 'abc',
        };

        const n = nameofFactory<typeof obj>();

        expect(n('aaa')).toEqual('aaa');
        expect(n('bbb')).toEqual('bbb');
      });
    });
  });
});
