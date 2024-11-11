/* eslint-disable prettier/prettier */

import { svgIconList } from "./svgIconList";

export const getAmountValue = (textValue: string) => {
    if (textValue) {
      const [whole, decimal] = textValue.trim().split('.');
      const hasDecimal = typeof decimal !== 'undefined';
      const formattedWhole = whole?.replace(/\D/g, '');
      return formattedWhole + (hasDecimal ? `.${decimal}` : '');
    }
    return '';
  };


  export const formateCurrency = (textValue: string | number, showSymbol = false) => {
    if (textValue) {
      const hasSign = Number(textValue) < 0;
      const [whole, decimal] = textValue.toString().trim().split('.');
      const hasDecimal = typeof decimal !== 'undefined';
      const formattedWhole = whole!
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return `${hasSign ? '-' : ''}${showSymbol ? '₦' : ''}${formattedWhole}${
        hasDecimal ? '.' + decimal : ''
      }`;
    }
    return `${showSymbol ? '₦' : ''}0`;
  };

  export const getSvgIcon = (name:string) => {
    let ret = svgIconList.find(i => i.name === name)
    return ret
  }
  