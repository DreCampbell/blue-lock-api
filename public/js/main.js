document.querySelector('button').addEventListener('click', button)

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

function button(){
    app.get('/', (req, res) =>{
        res.sendFile('https://bluelock-api.cyclic.app/')
    })
}

async function isagi(){
//    async function apiRequest(){
    // const playerName = document.querySelector('input').value

	document.querySelector('.container').classList.remove('hidden');
	document.querySelector('.blueLock').classList.add('hidden');

    try{
        const res = await fetch(`https://bluelock-api.cyclic.app/api/isagi`)
        const data = await res.json()

        console.log(data)
        document.querySelector('#playerPhoto').src = data.img
        document.querySelector('#name').innerText = `Name: ${data.Name}`
        document.querySelector('#alias').innerText = `Alias: ${data.Alias}`
        document.querySelector('#age').innerText = `Age: ${data.Age}`
        document.querySelector('#height').innerText = `Height: ${data.Height}`
        document.querySelector('#weapon').innerText = `Weapon: ${data.Weapon}`
        document.querySelector('#error').innerText = `Error: ${data.Error}`
    }catch(error){
        console.log(error)
    }    
}

async function bachira(){
//    async function apiRequest(){
    // const playerName = document.querySelector('input').value
    document.querySelector('.container').classList.remove('hidden');
document.querySelector('.blueLock').classList.add('hidden');

    try{        
        const res = await fetch(`https://bluelock-api.cyclic.app/api/bachira`)
        const data = await res.json()

        console.log(data)
        document.querySelector('#playerPhoto').src = data.img
        document.querySelector('#name').innerText = `Name: ${data.Name}`
        document.querySelector('#alias').innerText = `Alias: ${data.Alias}`
        document.querySelector('#age').innerText = `Age: ${data.Age}`
        document.querySelector('#height').innerText = `Height: ${data.Height}`
        document.querySelector('#weapon').innerText = `Weapon: ${data.Weapon}`
        document.querySelector('#error').innerText = `Error: ${data.Error}`
    }catch(error){
        console.log(error)
    }    
}

async function kunigami(){
//    async function apiRequest(){
    // const playerName = document.querySelector('input').value
    document.querySelector('.container').classList.remove('hidden');
document.querySelector('.blueLock').classList.add('hidden');

    try{        
        const res = await fetch(`https://bluelock-api.cyclic.app/api/kunigami`)
        const data = await res.json()

        console.log(data)
        document.querySelector('#playerPhoto').src = data.img
        document.querySelector('#name').innerText = `Name: ${data.Name}`
        document.querySelector('#alias').innerText = `Alias: ${data.Alias}`
        document.querySelector('#age').innerText = `Age: ${data.Age}`
        document.querySelector('#height').innerText = `Height: ${data.Height}`
        document.querySelector('#weapon').innerText = `Weapon: ${data.Weapon}`
        document.querySelector('#error').innerText = `Error: ${data.Error}`
    }catch(error){
        console.log(error)
    }    
}

async function chigiri(){
//    async function apiRequest(){
    // const playerName = document.querySelector('input').value
    document.querySelector('.container').classList.remove('hidden');
document.querySelector('.blueLock').classList.add('hidden');

    try{        
        const res = await fetch(`https://bluelock-api.cyclic.app/api/chigiri`)
        const data = await res.json()

        console.log(data)
        document.querySelector('#playerPhoto').src = data.img
        document.querySelector('#name').innerText = `Name: ${data.Name}`
        document.querySelector('#alias').innerText = `Alias: ${data.Alias}`
        document.querySelector('#age').innerText = `Age: ${data.Age}`
        document.querySelector('#height').innerText = `Height: ${data.Height}`
        document.querySelector('#weapon').innerText = `Weapon: ${data.Weapon}`
        document.querySelector('#error').innerText = `Error: ${data.Error}`
    }catch(error){
        console.log(error)
    }    
}

async function gagamaru(){
//    async function apiRequest(){
    // const playerName = document.querySelector('input').value
    document.querySelector('.container').classList.remove('hidden');
document.querySelector('.blueLock').classList.add('hidden');

    try{        
        const res = await fetch(`https://bluelock-api.cyclic.app/api/gagamaru`)
        const data = await res.json()

        console.log(data)
        document.querySelector('#playerPhoto').src = data.img
        document.querySelector('#name').innerText = `Name: ${data.Name}`
        document.querySelector('#alias').innerText = `Alias: ${data.Alias}`
        document.querySelector('#age').innerText = `Age: ${data.Age}`
        document.querySelector('#height').innerText = `Height: ${data.Height}`
        document.querySelector('#weapon').innerText = `Weapon: ${data.Weapon}`
        document.querySelector('#error').innerText = `Error: ${data.Error}`
    }catch(error){
        console.log(error)
    }    
}

async function imamura(){
//    async function apiRequest(){
    // const playerName = document.querySelector('input').value
    document.querySelector('.container').classList.remove('hidden');
document.querySelector('.blueLock').classList.add('hidden');

    try{        
        const res = await fetch(`https://bluelock-api.cyclic.app/api/imamura`)
        const data = await res.json()

        console.log(data)
        document.querySelector('#playerPhoto').src = data.img
        document.querySelector('#name').innerText = `Name: ${data.Name}`
        document.querySelector('#alias').innerText = `Alias: ${data.Alias}`
        document.querySelector('#age').innerText = `Age: ${data.Age}`
        document.querySelector('#height').innerText = `Height: ${data.Height}`
        document.querySelector('#weapon').innerText = `Weapon: ${data.Weapon}`
        document.querySelector('#error').innerText = `Error: ${data.Error}`
    }catch(error){
        console.log(error)
    }    
}

async function naruhaya(){
//    async function apiRequest(){
    // const playerName = document.querySelector('input').value
    document.querySelector('.container').classList.remove('hidden');
document.querySelector('.blueLock').classList.add('hidden');

    try{        
        const res = await fetch(`https://bluelock-api.cyclic.app/api/naruhaya`)
        const data = await res.json()

        console.log(data)
        document.querySelector('#playerPhoto').src = data.img
        document.querySelector('#name').innerText = `Name: ${data.Name}`
        document.querySelector('#alias').innerText = `Alias: ${data.Alias}`
        document.querySelector('#age').innerText = `Age: ${data.Age}`
        document.querySelector('#height').innerText = `Height: ${data.Height}`
        document.querySelector('#weapon').innerText = `Weapon: ${data.Weapon}`
        document.querySelector('#error').innerText = `Error: ${data.Error}`
    }catch(error){
        console.log(error)
    }    
}

async function kuon(){
//    async function apiRequest(){
    // const playerName = document.querySelector('input').value
    document.querySelector('.container').classList.remove('hidden');
document.querySelector('.blueLock').classList.add('hidden');

    try{        
        const res = await fetch(`https://bluelock-api.cyclic.app/api/kuon`)
        const data = await res.json()

        console.log(data)
        document.querySelector('#playerPhoto').src = data.img
        document.querySelector('#name').innerText = `Name: ${data.Name}`
        document.querySelector('#alias').innerText = `Alias: ${data.Alias}`
        document.querySelector('#age').innerText = `Age: ${data.Age}`
        document.querySelector('#height').innerText = `Height: ${data.Height}`
        document.querySelector('#weapon').innerText = `Weapon: ${data.Weapon}`
        document.querySelector('#error').innerText = `Error: ${data.Error}`
    }catch(error){
        console.log(error)
    }    
}

async function igarashi(){
//    async function apiRequest(){
    // const playerName = document.querySelector('input').value
    document.querySelector('.container').classList.remove('hidden');
document.querySelector('.blueLock').classList.add('hidden');

    try{        
        const res = await fetch(`https://bluelock-api.cyclic.app/api/igarashi`)
        const data = await res.json()

        console.log(data)
        document.querySelector('#playerPhoto').src = data.img
        document.querySelector('#name').innerText = `Name: ${data.Name}`
        document.querySelector('#alias').innerText = `Alias: ${data.Alias}`
        document.querySelector('#age').innerText = `Age: ${data.Age}`
        document.querySelector('#height').innerText = `Height: ${data.Height}`
        document.querySelector('#weapon').innerText = `Weapon: ${data.Weapon}`
        document.querySelector('#error').innerText = `Error: ${data.Error}`
    }catch(error){
        console.log(error)
    }    
}

async function raichi(){
//    async function apiRequest(){
    // const playerName = document.querySelector('input').value
    document.querySelector('.container').classList.remove('hidden');
document.querySelector('.blueLock').classList.add('hidden');

    try{        
        const res = await fetch(`https://bluelock-api.cyclic.app/api/raichi`)
        const data = await res.json()

        console.log(data)
        document.querySelector('#playerPhoto').src = data.img
        document.querySelector('#name').innerText = `Name: ${data.Name}`
        document.querySelector('#alias').innerText = `Alias: ${data.Alias}`
        document.querySelector('#age').innerText = `Age: ${data.Age}`
        document.querySelector('#height').innerText = `Height: ${data.Height}`
        document.querySelector('#weapon').innerText = `Weapon: ${data.Weapon}`
        document.querySelector('#error').innerText = `Error: ${data.Error}`
    }catch(error){
        console.log(error)
    }    
}

async function iemon(){
//    async function apiRequest(){
    // const playerName = document.querySelector('input').value
    document.querySelector('.container').classList.remove('hidden');
document.querySelector('.blueLock').classList.add('hidden');

    try{        
        const res = await fetch(`https://bluelock-api.cyclic.app/api/iemon`)
        const data = await res.json()

        console.log(data)
        document.querySelector('#playerPhoto').src = data.img
        document.querySelector('#name').innerText = `Name: ${data.Name}`
        document.querySelector('#alias').innerText = `Alias: ${data.Alias}`
        document.querySelector('#age').innerText = `Age: ${data.Age}`
        document.querySelector('#height').innerText = `Height: ${data.Height}`
        document.querySelector('#weapon').innerText = `Weapon: ${data.Weapon}`
        document.querySelector('#error').innerText = `Error: ${data.Error}`
    }catch(error){
        console.log(error)
    }    
}


async function apiRequest(){
    // const playerName = document.querySelector('input').value
    try{
        const res = await fetch(`https://bluelock-api.cyclic.app/api/${playerName}`)
        const data = await res.json()

        console.log(data)
        document.querySelector('#playerPhoto').src = data.img
        document.querySelector('#name').innerText = `Name: ${data.Name}`
        document.querySelector('#alias').innerText = `Alias: ${data.Alias}`
        document.querySelector('#age').innerText = `Age: ${data.Age}`
        document.querySelector('#height').innerText = `Height: ${data.Height}`
        document.querySelector('#weapon').innerText = `Weapon: ${data.Weapon}`
        document.querySelector('#error').innerText = `Error: ${data.Error}`
    }catch(error){
        console.log(error)
    }
}
