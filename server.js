const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const players = {
    'isagi':{
        'Name': 'Yoichi Isagi',
        'Age': 16,
        'Height': '173cm',
        'Alias': 'Mr. Mediocre, The Adaptation Genius, The Heart of Blue Lock',
        'Weapon': 'Spacial Awareness, Direct Shot, Off the Ball Movement, Metavision, Reflex, Flow State',
        'Team': 'Team Z'
    },
    'bachira':{
        'Name': 'Meguru Bachira',
        'Age': 17,
        'Height': '176cm',
        'Alias': 'Bowl Cut, Bob Cut',
        'Weapon': 'Dribbling, Passing, Flow State',
        'Team': 'Team Z'
    },
    'kunigami':{
        'Name': 'Rensuke Kunigami',
        'Age': 17,
        'Height': '188cm',
        'Alias': 'Hero, Muscle Hero, Muscle Kunigami, Cynic Hero, Hyena Hero',
        'Weapon': 'Superior Physicality, Finesse Shot, Ambidexterity',
        'Team': 'Team Z'
    },
    'chigiri':{
        'Name': 'Hyoma Chigiri',
        'Age': 16,
        'Height': '177cm',
        'Alias': 'Princess, Konoichi, Redhead, Red Panther',
        'Weapon': 'Speed, Ball Control',
        'Team': 'Team Z'
    },
    'naruhaya':{
        'Name': 'Asahi Naruhaya',
        'Age': 16,
        'Height': '168cm',
        'Alias': 'Unknown',
        'Weapon': 'Getting Behind Opposition',
        'Team': 'Team Z'
    },
    'raichi':{
        'Name': 'Jingo Raichi',
        'Age': 17,
        'Height': '182cm',
        'Alias': 'Unknown',
        'Weapon': 'Man-Marking, Immense Stamina',
        'Team': 'Team Z'
    },
    'gagamaru':{
        'Name': 'Gin Gagamaru',
        'Age': 17,
        'Height': '191cm',
        'Alias': 'Unknown',
        'Weapon': 'Spring-Like Body, Explosive Reaction, Flexibility',
        'Team': 'Team Z'
    },
    'igarashi':{
        'Name': 'Gurimu Igarashi',
        'Age': 16,
        'Height': '172cm',
        'Alias': 'Igaguri',
        'Weapon': 'Diving',
        'Team': 'Team Z'
    },
    'lemon':{
        'Name': 'Okuhito Lemon',
        'Age': 18,
        'Height': '187cm',
        'Alias': 'Unknown',
        'Weapon': 'Unknown',
        'Team': 'Team Z'
    },
    'kuon':{
        'Name': 'Wataru Kuon',
        'Age': 18,
        'Height': '185cm',
        'Alias': 'Unknown',
        'Weapon': 'Vertical Jump, Headers',
        'Team': 'Team Z'
    },
    'imamura':{
        'Name': 'Yudai Imamura',
        'Age': 18,
        'Height': '178cm',
        'Alias': 'Unknown',
        'Weapon': 'Unknown',
        'Team': 'Team Z'
    },
    'okawa':{
        'Name': 'Hibiki Okawa',
        'Age': 18,
        'Height': '177cm',
        'Alias': 'Unknown',
        'Weapon': 'Unknown',
        'Team': 'Team Y'
    },
    'niko':{
        'Name': 'Ikki Niko',
        'Age': 15,
        'Height': '173cm',
        'Alias': 'Unknown',
        'Weapon': 'Spatial Awareness, Watchtower Soccer',
        'Team': 'Team Y'
    },
    'baro':{
        'Name': 'Shoei Baro',
        'Age': 18,
        'Height': '187cm',
        'Alias': 'King, Villain, Scary Gorilla, King of Villains',
        'Weapon': 'Middle Shot, Charging Skill, Flow State',
        'Team': 'Team X'
    },
    'junichi':{
        'Name': 'Wanima Junichi',
        'Age': 18,
        'Height': '182cm',
        'Alias': 'Unknown',
        'Weapon': 'Eye Contact',
        'Team': 'Team W'
    },
    'keisuke':{
        'Name': 'Wanima Keisuke',
        'Age': 18,
        'Height': '182cm',
        'Alias': 'Unknown',
        'Weapon': 'Eye Contact',
        'Team': 'Team W'
    },
    'reo':{
        'Name': 'Mikage Reo',
        'Age': 17,
        'Height': '185cm',
        'Alias': 'Chameleon',
        'Weapon': 'Dexterity, Copy Cat, Metavision',
        'Team': 'Team V'
    },
    'nagi':{
        'Name': 'Seishiro Nagi',
        'Age': 17,
        'Height': '190cm',
        'Alias': 'Genius, Nagicchi',
        'Weapon': 'Ball Control, Trapping, Flow State',
        'Team': 'Team V'
    },
    'tsurugi':{
        'Name': 'Tsurugi Zantetsu',
        'Age': 17,
        'Height': '187cm',
        'Alias': 'Unknown',
        'Weapon': 'Acceleration, Left Foot Shot',
        'Team': 'Team V'
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