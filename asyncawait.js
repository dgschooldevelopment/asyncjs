var flag=false;
async function fetchData() {
    setTimeout(()=>{
        flag=true;
        return console.log(flag);
    }, 2000)
     
}


var abc=await fetchData();

if(abc){
    console.log(abc)
}