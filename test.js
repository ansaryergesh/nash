
function filter(arr, criteria) {
  return arr.filter(function(obj) {
    return Object.keys(criteria).every(function(c) {
      return obj[c] == criteria[c];
    });
  });
}

var arr = [
  { name: 'Steve', age: 18, color: 'red' },
  { name: 'Louis', age: 21, color: 'blue' }, //*
  { name: 'Mike', age: 20, color: 'green' },
  { name: 'Greg', age: 21, color: 'blue' }, //*
  { name: 'Josh', age: 18, color: 'red' }
];

console.log(filter(arr, { age: 21, color: 'blue' }));