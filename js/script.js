var livestock =[];
function animals(a=['cow']){
    var c=0;
    for (i=0;i<a.length;i++){
        if(a[i]===a[c]){
            console.log(true);
            livestock.push(a[c]+c);
            c++
        }
        else{
            console.log(false);
        }
    }
}animals(a=['cow']);
console.log(livestock);