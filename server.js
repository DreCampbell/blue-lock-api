const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const players = {
    'isagi':{
        'img': 'https://static.wikia.nocookie.net/bluelock/images/f/f3/Yoichi_Isagi_uniform_anime_design.png',
        'Name': 'Name: Yoichi Isagi',
        'Position': 'Position: Forward',
        'Age': 'Age: 16',
        'Height': 'Height: 173cm',
        'Alias': 'Alias: Mr. Mediocre, The Adaptation Genius, The Heart of Blue Lock',
        'Weapon': 'Weapon: Spacial Awareness, Direct Shot, Off the Ball Movement, Metavision, Reflex, Flow State',
    },
    'bachira':{
        'img': 'https://static.wikia.nocookie.net/bluelock/images/f/f4/Meguru_Bachira_uniform_anime_design.png',
        'Name': 'Name: Meguru Bachira',
        'Position': 'Position: Forward',
        'Age': 'Age: 17',
        'Height': 'Height: 176cm',
        'Alias': 'Alias: Bowl Cut, Bob Cut',
        'Weapon': 'Weapon: Dribbling, Passing, Flow State',
    },
    'kunigami':{
        'img': 'https://static.wikia.nocookie.net/bluelock/images/d/db/Rensuke_Kunigami_uniform_anime_design.png',
        'Name': 'Name: Rensuke Kunigami',
        'Position': 'Position: Forward',
        'Age': 'Age: 17',
        'Height': 'Height: 188cm',
        'Alias': 'Alias: Hero, Muscle Hero, Muscle Kunigami, Cynic Hero, Hyena Hero',
        'Weapon': 'Weapon: Superior Physicality, Finesse Shot, Ambidexterity',
    },
    'chigiri':{
        'img': 'https://static.wikia.nocookie.net/bluelock/images/2/2b/Hyoma_Chigiri_uniform_anime_design.png',
        'Name': 'Name: Hyoma Chigiri',
        'Position': 'Position: Forward',
        'Age': 'Age: 16',
        'Height': 'Height: 177cm',
        'Alias': 'Alias: Princess, Konoichi, Redhead, Red Panther',
        'Weapon': 'Weapon: Speed, Ball Control',
    },
    'naruhaya':{
        'img': 'https://static.wikia.nocookie.net/bluelock/images/5/5a/Asahi_Naruhaya_uniform_anime_design.png',
        'Name': 'Name: Asahi Naruhaya',
        'Position': 'Position: Forward',
        'Age': 'Age: 16',
        'Height': 'Height: 168cm',
        'Alias': 'Alias: Unknown',
        'Weapon': 'Weapon: Getting Behind Opposition',
    },
    'raichi':{
        'img': 'https://static.wikia.nocookie.net/bluelock/images/6/6e/Jingo_Raichi_uniform_anime_design.png',
        'Name': 'Name: Jingo Raichi',
        'Position': 'Position: Forward',
        'Age': 'Age: 17',
        'Height': 'Height: 182cm',
        'Alias': 'Alias: Unknown',
        'Weapon': 'Weapon: Man-Marking, Immense Stamina',
    },
    'gagamaru':{
        'img': 'https://static.wikia.nocookie.net/bluelock/images/d/d4/Gin_Gagamaru_uniform_anime_design.png',
        'Name': 'Name: Gin Gagamaru',
        'Position': 'Position: Forward',
        'Age': 'Age: 17',
        'Height': 'Height: 191cm',
        'Alias': 'Alias: Unknown',
        'Weapon': 'Weapon: Spring-Like Body, Explosive Reaction, Flexibility',
    },
    'igarashi':{
        'img': 'https://static.wikia.nocookie.net/bluelock/images/6/66/Gurimu_Igarashi_uniform_anime_design.png',
        'Name': 'Name: Gurimu Igarashi',
        'Position': 'Position: Forward',
        'Age': 'Age: 16',
        'Height': 'Height: 172cm',
        'Alias': 'Alias: Igaguri',
        'Weapon': 'Weapon: Diving',
    },
    'iemon':{
        'img': 'https://static.wikia.nocookie.net/bluelock/images/e/e9/Okuhito_Iemon_uniform_anime_design.png',
        'Name': 'Name: Okuhito Iemon',
        'Position': 'Position: Forward',
        'Age': 'Age: 18',
        'Height': 'Height: 187cm',
        'Alias': 'Alias: Unknown',
        'Weapon': 'Weapon: Unknown',
    },
    'kuon':{
        'img': 'https://static.wikia.nocookie.net/bluelock/images/5/50/Wataru_Kuon_uniform_anime_design.png',
        'Name': 'Name: Wataru Kuon',
        'Position': 'Position: Forward',
        'Age': 'Age: 18',
        'Height': 'Height: 185cm',
        'Alias': 'Alias: Unknown',
        'Weapon': 'Weapon: Vertical Jump, Headers',
    },
    'imamura':{
        'img': 'https://static.wikia.nocookie.net/bluelock/images/3/3b/Yudai_Imamura_uniform_anime_design.png',
        'Name': 'Name: Yudai Imamura',
        'Position': 'Position: Forward',
        'Age': 'Age: 18',
        'Height': 'Height: 178cm',
        'Alias': 'Alias: Unknown',
        'Weapon': 'Weapon: Unknown',
    },
    'unknown':{
        'Error': 'Player does not exist'
    }
}

app.use(express.static("public"));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:playerName', (req, res) =>{
    const playersName = req.params.playerName.toLowerCase()
    if(players[playersName]){
        res.json(players[playersName])
    }else{
        res.json(players['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}!`)
})