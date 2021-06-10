export const emailValid = val => {
  // const value = val.split(' ').join('');
  const value = val.trim()
  let error;
  if (!value) {
    error = 'Поле Email обязательно для заполнения'
  }
  if (value) {
    let emailvalid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
    if (!emailvalid) {
      error = 'Неправильный email'
    }
  }
  return error
}

export const required = val => {
  let error;
  if (!val) {
    error = 'Поле обязательно для заполнения'
  }
  return error
}

export const phoneCheck = (val) => {

  var PHONE_OPERATORS = [
    {
      id: '7700'
    }, {
      id: '7701'
    }, {
      id: '7702'
    }, {
      id: '7705'
    }, {
      id: '7706'
    }, {
      id: '7707'
    }, {
      id: '7708'
    }, {
      id: '7747'
    }, {
      id: '7771'
    }, {
      id: '7775'
    }, {
      id: '7776'
    }, {
      id: '7777'
    }, {
      id: '7778'
    }
  ];
  var phone = String(val).replace(/[^A-Z0-9]/g, ''),
    code = phone.match(/^(\d{4})(\d{3})(\d{4})$/);
  if (!code || phone.length !== 11) {
    return false
  }

  var phone_number = code[1];
  var phone_operator = PHONE_OPERATORS.filter(function (item) {
    return item.id == phone_number
  });

  if (phone_operator.length > 0) {
    return true
  } else {
    return false;
  }
}

export const phoneValidation = (val) => {
  const phoneval = val.replace(/ /g, "");

  let error

  if (phoneval.length === 16 && phoneCheck(val) === true) {
    error = ''
  }
  if (phoneval.length !== 16) {
    error = 'Неправильный телефон номер'
  }
  if (phoneval.length === 16 && phoneCheck(val) === false) {
    error = 'Нет соответствующего оператора'
  }

  return error
}

export const passwordValid = val => {
  let error;
  if (!val) {
    error = 'Поле обязательно для заполнения'
  }
  if (val && val.length < 6) {
    error = 'минимальная длина пароля должна быть не менее 6 символов'
  }
  return error;
}

const checkStringName = val => {
  if (val && val.replace(/\s+$/, '').split(/\W+/).length  <2) {
    return false;
  }else {
    return true;
  }
}

export const acceptCirrilic = val => {
  var falsy = /[a-zA-Z0-9_"*/]/i.test(val)
  let error = '';
  var str = val;
  str = str.replace(/(^\s*)|(\s*$)/gi,"");
  str = str.replace(/[ ]{2,}/gi," ");
  str = str.replace(/\n /,"\n");
  let length = val ? str.split(' ').length : 0;
  if (!val) {
    error = 'Поле обязательно для заполнения'
  }
  if (val) {
    if(falsy ===true) {
      error = 'Введите только на киррилице'
    }
    if(falsy== false && parseInt(length)<2) {
      error = 'Введите полное имя ( Например: Абаев Абылай)'
    }
    
  }

  // return length + `${falsy}`;
  return error;
}


export const iinValidation = (val) => {
  let error = '';
  var b1 = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ];
  var b2 = [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    1,
    2
  ];
  var a = [];
  const value = val
    ? val.replace(/ /g, "")
    : ''
  var controll = 0;
  if (!value) {
    error = 'Поле обязательно для заполнения'
  }
  if (value && value.length !== 12) {
    error = 'Неправильный ИИН';
  }

  if (value && value.length === 12) {
    for (var i = 0; i < 12; i++) {
      a[i] = parseInt(value.substring(i, i + 1));
      if (i < 11) 
        controll += a[i] * b1[i];
      }
    controll = controll % 11;
    if (controll == 10) {
      controll = 0;
      for (var i = 0; i < 11; i++) 
        controll += a[i] * b2[i];
      controll = controll % 11;
    }
    if (controll != a[11]) {
      error = 'Некорректный ИИН';
    }
  }

  return error;

}

export const acceptCirrilicOnly = val => {
  var falsy = /[a-zA-Z0-9_"*/]/i.test(val)
  let error;
  if (val) {
    if (falsy === true) {
      error = 'Нужно вводить только на кириллице'
    }
  }
  return error;
}