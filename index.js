document.querySelector('botton').addEventListener('click', apiRequest)

async function apiRequest(){
    const playerName = document.querySelector('input').value
    try{
        const res = await fetch(`https://enchanting-seal-nightgown.cyclic.app/api/${playerName}`)
        const data = await res.json()

        console.log(data)
        document.querySelector('h2').innerText = data.name
    }catch(error){
        console.log(error)
    }
}