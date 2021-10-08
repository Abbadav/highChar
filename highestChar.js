//Look(L=1,o=2,k=1)
//Drill {D=1,r=1,i=1,l=2}

function high(arr){
    let nesArr =[];
    for(let i=0; i<arr.length; i++){
        let val =arr[i]
        console.log(val);

        if(nesArr.includes(val===true)){

        }
        else{
            nesArr.push(val)
            if(nesArr.indexOf(val)===-1){
                nesArr.push(val)
            }
        }
        return nesArr
    }arr=[L,o,o,k], [D,r,i,l];
    console.log(high(arr));

}