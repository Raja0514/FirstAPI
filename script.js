async function randomCat(){

const url=await fetch("https://aws.random.cat/meow")

.then(response=>{

return response.json();
})
.then(data=>{

    console.log(data);

    document.getElementById('img').src=data.file;

})
.catch(error=>{
    console.log('error');
    console.error(error);
})


}