//select the house by the district, wards
app.filter('customDistrict', function() {
  return function(input, search) {
    if (!input) return input;
    if (!search) return search;
    // var _tmp = {}
    var result = {};
    // var result = [];
    angular.forEach(input, function(value, key) {
      if (input[key].districtId == search) {      
        // _tmp = JSON.parse(JSON.stringify(input[key]));
        // _tmp["id"] = key;
        // result.push(_tmp);
        result[key] = input[key];
      }
    });
    return result;
  }
});
app.filter('customCity', function() {
  return function(input, search) {
    if (!input) return input;
    if (!search) return search;
    // var _tmp = {};
    var result = {};
    angular.forEach(input, function(value, key) {
      if (input[key].cityId == search) {
        // _tmp = JSON.parse(JSON.stringify(input[key]));
        // _tmp["id"] = key;
        // console.log(_tmp);
        // console.log(input[key]);
        // result.push(input[key]);
        result[key] = input[key];
      }
    });
    return result;
  }
});