//load npms
var json = require('json-file');
var _= require('lodash');

//read file
var file = json.read('data.json');

//get items
var items = file.get('items');

//print out items
_.forEach(items, function(value){
    console.log(value);
});