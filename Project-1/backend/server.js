import express from "express";

const app = express()

app.get('/', (req, res) => { 
    res.send('Server is ready')
})

app.get('/jokes', (req, res) => { 
    const jokes = [
        {
            id: 1,
            title: 'Joke Title 1',
            content: 'Joke 1' 
        },
        {
            id: 2,
            title: 'Joke Title 2',
            content: 'Joke 2' 
        },
        {
            id: 3,
            title: 'Joke Title 3',
            content: 'Joke 3' 
        }
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => { 
    console.log(`Server at http://Localhost:${port}`);
})