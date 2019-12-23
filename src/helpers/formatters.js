import moment from 'moment';

const titleCase = (str) => {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

export const camelCase = (str) => {
  return str.toLowerCase().split(' ').map(word => {
    return word.replace(word[0], word[0].toUpperCase());
  }).join('');
}

export const prettyKey = (key) => {
  return titleCase(key.replace(/_/g, ' '));
}

export const formatDate = (date, format) => moment(date).format(format);

export const formatMdn = (mdn) => {
  if (!mdn || mdn.length < 10) { return mdn; }
  return ['(', mdn.slice(0, 3), ') ', mdn.slice(3, 6), '-', mdn.slice(6)].join('');
}

export const pad = (n, size) => {
  let s = String(n);
  while (s.length < size) {
    s = '0' + s;
  }
  return s;
}

export const pluralize = (str, num) => {
  if (num !== 1) {
    str += 's';
  }
  return str;
}

export const percent = (num, denom) => {
  return Math.floor((num / denom) * 100);
}

export const toGB = (mb) => {
  let gb = (mb / 1024).toFixed(2);
  if (gb.slice(-3) === '.00') {
    return gb.slice(0, -3);
  }
  if (gb.slice(-1) === '0') {
    return gb.slice(0, -1);
  }
  return gb;
}

export const formatDataAmount = (data) => {
  if (data >= 1024) {
    return [toGB(data), 'GB'];
  }
  return [data.toFixed(0), 'MB'];
}
