function year(dateString) {
  if( dateString[0] == 0) {
      return '20'+dateString.substring(0,2);
  }
      return '19'+dateString.substring(0,2);
}
function getAge(dateString) {
  var now = new Date();
  var yearNow = now.getYear();
  var monthNow = now.getMonth();
  var dateNow = now.getDate();

  var dob = new Date(year(dateString),
                     dateString.substring(2,4)-1,
                     dateString.substring(4,6)
                     );

  var yearDob = dob.getYear();
  var monthDob = dob.getMonth();
  var dateDob = dob.getDate();
  var age = {};

  var yearAge = yearNow - yearDob;

  if (monthNow >= monthDob)
    var monthAge = monthNow - monthDob;
  else {
    yearAge--;
    var monthAge = 12 + monthNow -monthDob;
  }

  if (dateNow >= dateDob)
    var dateAge = dateNow - dateDob;
  else {
    monthAge--;
    var dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  age = {
      years: yearAge,
      months: monthAge,
      days: dateAge
      };

  return age.years;
}


export const validage = (iin) => {
  if(iin[6]%2 != 0) {
      if(getAge(iin)<18) {
          return false
      }
  }
  if(iin[6]%2 == 0) {
      if(getAge(iin)<18) {
          return false
      }
  }
  return true;
}
