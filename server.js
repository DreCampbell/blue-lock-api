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
        'Former Affiliation': 'Ichinan High School'
    },
    'bachira':{
        'Name': 'Meguru Bachira',
        'Age': 17,
        'Height': '176cm',
        'Alias': 'Bowl Cut, Bob Cut',
        'Weapon': 'Dribbling, Passing, Flow State',
        'Former Affiliation': 'Namikaze High'
    },
    'unknown':{
        'Error': 'Player does not exist'
    }
}

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