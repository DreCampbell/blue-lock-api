document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const playerName = document.querySelector('input').value
    try{
        const res = await fetch(`https://bluelock-api.cyclic.app/api/${playerName}`)
        const data = await res.json()

        console.log(data)
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