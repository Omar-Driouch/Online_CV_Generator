export function SplitTostring(str){
    let newSplit = str.split("");
    let res = "";
    for(let i = 0 ;i<newSplit.length ; i++){
        if(newSplit[i] === newSplit[i].toUpperCase()){
            res +=` ${newSplit[i]}`
        }else{
            res +=`${newSplit[i]}`
        }
    }
    return res;
}


 