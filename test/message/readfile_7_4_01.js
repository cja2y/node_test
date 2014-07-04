/**
 * Created by Panda on 14-7-4.
 */

var fs = require('fs');
fs.readFile('file.txt','utf-8',function(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
});
console.log('end.');
