import { camelCase, formatMdn, pad, pluralize, toGB } from './formatters';

describe('camelCase', () => {
  it('converts a string of words to camel case', () => {
    expect(
      camelCase('Hello my name is')
    ).toEqual('HelloMyNameIs');
    expect(
      camelCase('hello MY Name is')
    ).toEqual('HelloMyNameIs');
  });

});

describe('formatMdn', () => {
  it('formats a 10 digit mdn', () => {
    expect(
      formatMdn('1234567890')
    ).toEqual('(123) 456-7890');
  });
  it('returns the input if length < 10', () => {
    expect(
      formatMdn('123')
    ).toEqual('123');
    expect(
      formatMdn()
    ).toEqual(undefined);
  });
});

describe('pad(n, size)', () => {
  it('pads a the number n to size number of digits', () => {
    expect(
      pad(4, 2)
    ).toEqual('04');
    expect(
      pad(123, 3)
    ).toEqual('123');
  });
});

describe('pluralize', () => {
  it('adds an s to the string if the number is not 1', () => {
    expect(
      pluralize('day', 2)
    ).toEqual('days');
    expect(
      pluralize('camera', 0)
    ).toEqual('cameras');
  });

  it('does not add an s if the number is 1', () => {
    expect(
      pluralize('donkey', 1)
    ).toEqual('donkey');
  });
});

describe('toGB', () => {
  it('returns a MB float as a GB string with one decimal point, rounded', () => {
    expect(
      toGB(2048)
    ).toEqual('2');
    expect(
      toGB(1536)
    ).toEqual('1.5')
    expect(
      toGB(1300)
    ).toEqual('1.27');
  });
});
