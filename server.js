const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const players = {
    'isagi':{
        'img': 'https://static.wikia.nocookie.net/bluelock/images/f/f3/Yoichi_Isagi_uniform_anime_design.png',
        'Name': 'Yoichi Isagi',
        'Position': 'Forward',
        'Age': 16,
        'Height': '173cm',
        'Alias': 'Mr. Mediocre, The Adaptation Genius, The Heart of Blue Lock',
        'Weapon': 'Spacial Awareness / Direct Shot',
        'Team': 'Team Z'
    },
    'bachira':{
        'img': 'https://static.wikia.nocookie.net/bluelock/images/f/f4/Meguru_Bachira_uniform_anime_design.png',
        'Name': 'Meguru Bachira',
        'Position': 'Forward',
        'Age': 17,
        'Height': '176cm',
        'Alias': 'Bowl Cut, Bob Cut',
        'Weapon': 'Dribbling / Passing',
        'Team': 'Team Z'
    },
    'kunigami':{
        'img': 'https://static.wikia.nocookie.net/bluelock/images/d/db/Rensuke_Kunigami_uniform_anime_design.png',
        'Name': 'Rensuke Kunigami',
        'Position': 'Forward',
        'Age': 17,
        'Height': '188cm',
        'Alias': 'Hero, Muscle Hero, Muscle Kunigami, Cynic Hero, Hyena Hero',
        'Weapon': 'Superior Physicality / Ambidexterity',
        'Team': 'Team Z'
    },
    'chigiri':{
        'img': 'https://static.wikia.nocookie.net/bluelock/images/2/2b/Hyoma_Chigiri_uniform_anime_design.png',
        'Name': 'Hyoma Chigiri',
        'Position': 'Forward',
        'Age': 16,
        'Height': '177cm',
        'Alias': 'Princess, Konoichi, Redhead, Red Panther',
        'Weapon': 'Speed / Ball Control',
        'Team': 'Team Z'
    },
    'naruhaya':{
        'img': 'https://static.wikia.nocookie.net/bluelock/images/5/5a/Asahi_Naruhaya_uniform_anime_design.png',
        'Name': 'Asahi Naruhaya',
        'Position': 'Forward',
        'Age': 16,
        'Height': '168cm',
        'Alias': 'Unknown',
        'Weapon': 'Getting Behind Opposition',
        'Team': 'Team Z'
    },
    'raichi':{
        'img': 'https://static.wikia.nocookie.net/bluelock/images/6/6e/Jingo_Raichi_uniform_anime_design.png',
        'Name': 'Jingo Raichi',
        'Position': 'Forward',
        'Age': 17,
        'Height': '182cm',
        'Alias': 'Unknown',
        'Weapon': 'Man-Marking / Immense Stamina',
        'Team': 'Team Z'
    },
    'gagamaru':{
        'img': 'https://static.wikia.nocookie.net/bluelock/images/d/d4/Gin_Gagamaru_uniform_anime_design.png',
        'Name': 'Gin Gagamaru',
        'Position': 'Forward',
        'Age': 17,
        'Height': '191cm',
        'Alias': 'Unknown',
        'Weapon': 'Explosive Reaction / Flexibility',
        'Team': 'Team Z'
    },
    'igarashi':{
        'img': 'https://static.wikia.nocookie.net/bluelock/images/6/66/Gurimu_Igarashi_uniform_anime_design.png',
        'Name': 'Gurimu Igarashi',
        'Position': 'Forward',
        'Age': 16,
        'Height': '172cm',
        'Alias': 'Igaguri',
        'Weapon': 'Diving',
        'Team': 'Team Z'
    },
    'iemon':{
        'img': 'https://static.wikia.nocookie.net/bluelock/images/e/e9/Okuhito_Iemon_uniform_anime_design.png',
        'Name': 'Okuhito Iemon',
        'Position': 'Forward',
        'Age': 18,
        'Height': '187cm',
        'Alias': 'Unknown',
        'Weapon': 'Unknown',
        'Team': 'Team Z'
    },
    'kuon':{
        'img': 'https://static.wikia.nocookie.net/bluelock/images/5/50/Wataru_Kuon_uniform_anime_design.png',
        'Name': 'Wataru Kuon',
        'Position': 'Forward',
        'Age': 18,
        'Height': '185cm',
        'Alias': 'Unknown',
        'Weapon': 'Vertical Jump / Headers',
        'Team': 'Team Z'
    },
    'imamura':{
        'img': 'https://static.wikia.nocookie.net/bluelock/images/3/3b/Yudai_Imamura_uniform_anime_design.png',
        'Name': 'Yudai Imamura',
        'Position': 'Forward',
        'Age': 18,
        'Height': '178cm',
        'Alias': 'Unknown',
        'Weapon': 'Unknown',
        'Team': 'Team Z'
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