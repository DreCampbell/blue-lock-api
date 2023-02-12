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
        'Former Affiliation': 'Ichinan High School',
        'Round 1 Team': 'Team Z'
    },
    'bachira':{
        'Name': 'Meguru Bachira',
        'Age': 17,
        'Height': '176cm',
        'Alias': 'Bowl Cut, Bob Cut',
        'Weapon': 'Dribbling, Passing, Flow State',
        'Former Affiliation': 'Namikaze High',
        'Round 1 Team': 'Team Z'
    },
    'kunigami':{
        'Name': 'Rensuke Kunigami',
        'Age': 17,
        'Height': '188cm',
        'Alias': 'Hero, Muscle Hero, Muscle Kunigami, Cynic Hero, Hyena Hero',
        'Weapon': 'Superior Physicality, Finesse Shot, Ambidexterity',
    },
    'chigiri':{
        'Name': 'Hyoma Chigiri',
        'Age': 16,
        'Height': '177cm',
        'Alias': 'Princess, Konoichi, Redhead, Red Panther',
        'Weapon': 'Speed, Ball Control',
        'Former Affiliation': 'Rajitsu Tech',
        'Round 1 Team': 'Team Z'
    },
    'naruhaya':{
        'Name': 'Asahi Naruhaya',
        'Age': 16,
        'Height': '168cm',
        'Alias': 'Unknown',
        'Weapon': 'Getting Behind Opposition',
        'Former Affiliation': 'Unknown',
        'Round 1 Team': 'Team Z'
    },
    'raichi':{
        'Name': 'Jingo Raichi',
        'Age': 17,
        'Height': '182cm',
        'Alias': 'Unknown',
        'Weapon': 'Man-Marking, Immense Stamina',
        'Former Affiliation': 'Unknown',
        'Round 1 Team': 'Team Z'
    },
    'gagamaru':{
        'Name': 'Gin Gagamaru',
        'Age': 17,
        'Height': '191cm',
        'Alias': 'Unknown',
        'Weapon': 'Spring-Like Body, Explosive Reaction, Flexibility',
        'Former Affiliation': 'Unknown',
        'Round 1 Team': 'Team Z'
    },
    'igarashi':{
        'Name': 'Gurimu Igarashi',
        'Age': 16,
        'Height': '172cm',
        'Alias': 'Igaguri',
        'Weapon': 'Diving',
        'Former Affiliation': 'Unknown',
        'Round 1 Team': 'Team Z'
    },
    'lemon':{
        'Name': 'Okuhito Lemon',
        'Age': 18,
        'Height': '187cm',
        'Alias': 'Unknown',
        'Weapon': 'Unknown',
        'Former Affiliation': 'Unknown',
        'Round 1 Team': 'Team Z'
    },
    'kuon':{
        'Name': 'Wataru Kuon',
        'Age': 18,
        'Height': '185cm',
        'Alias': 'Unknown',
        'Weapon': 'Vertical Jump, Headers',
        'Former Affiliation': 'Unknown',
        'Round 1 Team': 'Team Z'
    },
    'imamura':{
        'Name': 'Yudai Imamura',
        'Age': 18,
        'Height': '178cm',
        'Alias': 'Unknown',
        'Weapon': 'Unknown',
        'Former Affiliation': 'Unknown',
        'Round 1 Team': 'Team Z'
    },
    'okawa':{
        'Name': 'Hibiki Okawa',
        'Age': 18,
        'Height': '177cm',
        'Alias': 'Unknown',
        'Weapon': 'Unknown',
        'Former Affiliation': 'Unknown',
        'Round 1 Team': 'Team Y'
    },
    'niko':{
        'Name': 'Ikki Niko',
        'Age': 15,
        'Height': '173cm',
        'Alias': 'Unknown',
        'Weapon': 'Spatial Awareness, Watchtower Soccer',
        'Former Affiliation': 'Unknown',
        'Round 1 Team': 'Team Y'
    },
    'baro':{
        'Name': 'Shoei Baro',
        'Age': 18,
        'Height': '187cm',
        'Alias': 'King, Villain, Scary Gorilla, King of Villains',
        'Weapon': 'Middle Shot, Charging Skill, Flow State',
        'Former Affiliation': 'Akudo Academy',
        'Round 1 Team': 'Team X'
    },
    'junichi':{
        'Name': 'Wanima Junichi',
        'Age': 18,
        'Height': '182cm',
        'Alias': 'Unknown',
        'Weapon': 'Eye Contact',
        'Former Affiliation': 'Raijutsu Tech',
        'Round 1 Team': 'Team W'
    },
    'keisuke':{
        'Name': 'Wanima Keisuke',
        'Age': 18,
        'Height': '182cm',
        'Alias': 'Unknown',
        'Weapon': 'Eye Contact',
        'Former Affiliation': 'Raijutsu Tech',
        'Round 1 Team': 'Team W'
    },
    'reo':{
        'Name': 'Mikage Reo',
        'Age': 17,
        'Height': '185cm',
        'Alias': 'Chameleon',
        'Weapon': 'Dexterity, Copy Cat, Metavision',
        'Former Affiliation': 'Akudo Academy',
        'Round 1 Team': 'Team V'
    },
    'nagi':{
        'Name': 'Seishiro Nagi',
        'Age': 17,
        'Height': '190cm',
        'Alias': 'Genius, Nagicchi',
        'Weapon': 'Ball Control, Trapping, Flow State',
        'Former Affiliation': 'Unknown',
        'Round 1 Team': 'Team V'
    },
    'tsurugi':{
        'Name': 'Tsurugi Zantetsu',
        'Age': 17,
        'Height': '187cm',
        'Alias': 'Unknown',
        'Weapon': 'Acceleration, Left Foot Shot',
        'Former Affiliation': 'Unknown',
        'Round 1 Team': 'Team V'
    },
    'tanya':{
        'Name': 'Tanya Milici, my love'
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