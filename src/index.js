//np-loader会
// var content = require('./index.np');
// console.log(content);
const niepan = require('./niepan.js');
// console.log(niepan);
var o = niepan();
// console.log(o);

o.sub('xx',function(){console.log('pub...')});
o.pub('xx');
o.pub('xx');

o.sub('yy',function(){console.log('pub...')},true);
o.pub('yy');
o.pub('yy');

o.request({
  url:'https://api.family.ink/test/animals',
  success:function(res){
    console.log(res);
  }
});

var li1 = niepan(document.getElementById('li1'));
// console.log(li1);
li1.sub('click',function(){
  console.log('clicked li1,this event could be pubed all the time');
});

var body= niepan(document.body);
// console.log(body);
body.sub('click',function(){
  console.log('clicked body,this event would be pubed only one time');
},true);

var li3 = niepan(document.getElementById('li3'));
console.log(li3.$data.age);

var input1 = niepan(document.getElementById('input1'));
input1.sub('input',function(evt){
  console.log(input1.$data.name);
});

// It will throw a error when define a niepan for the same element moe than one time;
// var input2 = niepan(document.getElementById('input1'));//ERROR
