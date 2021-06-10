const thousandSeparator = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

console.log(thousandSeparator('1000000000'))