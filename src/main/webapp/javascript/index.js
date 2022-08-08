let button = document.getElementById("button")
button.onclick = getFavoriteCandy;
async function getFavoriteCandy(){
try{
    const raw_response = await fetch(`http://localhost:8080/app/candies`);
    if(!raw_response.ok){
        throw new Error(raw_response.status);
    }
    const jsondata = await raw_response.json();
    console.log(jsondata);
    let candies = document.getElementById("candies");
    console.log(jsondata[0])
    console.log(jsondata[0].name)
    candies.innerHTML = `I declare that ${jsondata[0].name} is the greatest candy of all the land!`
} catch (error){
    alert("There is an error :( " + error)}};
