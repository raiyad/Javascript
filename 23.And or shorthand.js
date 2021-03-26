var Name = ''

//var fullname = 'raiyad alam'
/*if(name.length==0){
    fullname='raiyad'
}
else{
    fullname=name
} */

var fullname = Name || 'raiyad'
console.log(fullname)

var isok = true
isok && console.log('everything is okay')