

import moment from 'moment';

export const required = (value) => (value ? undefined : 'Campo obrigatório');

export const toUpper = (value) => value && value.toUpperCase();

export const trim = (value) => value && value.trim();

export const onlyChar = (value) => value.replace(/[0-9]/g, '');

export const requiredSelect = (optionSelected) => {
  if(!optionSelected?.value) {
    return 'Campo obrigatório';
  }
  return undefined;
}

export const validateDate = (value) => {
  const date = moment(value, 'DD/MM/YYYY');

  if (
    !moment(date).isValid()
    || moment(date).isBefore(moment('01-01-1940'))
    || moment(date).isAfter(moment().format('L'))
  ) {
    return 'Data inválida.';
  }
  return undefined;
};

const minLength = (min) => (value) =>
  value && value.length < min ? `Devo pelo menos ${min} characteres.` : undefined;

export const maxLength11 = minLength(11);

export const rgMask = (value) => {
  const v = value.toUpperCase().replace(/[^\dX]/g,'');
  return v.replace(/^(\d{2})(\d{2,3})(\d{3})([\dX])$/,'$1.$2.$3-$4');

}
export const dateMask = (value) =>
  value &&
  value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)+?$/, '$1');