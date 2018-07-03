export const arrumaTelefone = (tel) => {
    const entrada = tel;
    tel = tel.replace(/\(/g, '');
    tel = tel.replace(/\)/g, '');
    tel = tel.replace(/-/g, '');
    tel = tel.replace(/ /g, '');

    if (tel.length === 10) {
      let fixo = '(';
      fixo = fixo + tel.substring(0, 2);
      fixo = fixo + ')';
      fixo = fixo + tel.substring(2, 6);
      fixo = fixo + '-';
      fixo = fixo + tel.substring(6, 10);
      return fixo;
    }
    if (tel.length === 11) {
      let cel = '(';
      cel = cel + tel.substring(0, 2);
      cel = cel + ')';
      cel = cel + tel.substring(2, 7);
      cel = cel + '-';
      cel = cel + tel.substring(7, 11);

      if (tel[2] !== '9') {
        return tel;
      } else {
        return cel;
      }
    }
    return entrada;
  };
