const url = 

document.querySelector('button').addEventListener('click', apiRequest)

document.querySelector('#isagi').addEventListener('click', isagi)
document.querySelector('#bachira').addEventListener('click', bachira)
document.querySelector('#kunigami').addEventListener('click', kunigami)
document.querySelector('#chigiri').addEventListener('click', chigiri)
document.querySelector('#gagamaru').addEventListener('click', gagamaru)
document.querySelector('#imamura').addEventListener('click', imamura)
document.querySelector('#naruhaya').addEventListener('click', naruhaya)
document.querySelector('#kuon').addEventListener('click', kuon)
document.querySelector('#igarashi').addEventListener('click', igarashi)
document.querySelector('#raichi').addEventListener('click', raichi)
document.querySelector('#iemon').addEventListener('click', iemon)

async function apiRequest(){
    const playerName = document.querySelector('input').value
    try{
        const res = await fetch(`https://bluelock-api.cyclic.app/api/${playerName}`)
        const data = await res.json()

        console.log(data)
        document.querySelector('#playerCard').src = data.img
        document.querySelector('#name').innerText = `Name: ${data.Name}`
        document.querySelector('#alias').innerText = `Alias: ${data.Alias}`
        document.querySelector('#age').innerText = `Age: ${data.Age}`
        document.querySelector('#height').innerText = `Height: ${data.Height}`
        document.querySelector('#weapon').innerText = `Weapon: ${data.Weapon}`
        document.querySelector('#team').innerText = `Team: ${data.Team}`
    }catch(error){
        console.log(error)
    }
}