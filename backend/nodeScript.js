const express = require('express');
const app = express();
const routerRollUpdate = require('./router/rollUpdate');
const db = require('./mySQL');
const path = require('path')
const fs = require('fs')
    
app.use('/roll', routerRollUpdate);
app.use(express.json())

app.use(express.static(path.join(__dirname, '../frontend')));
const homepagepath = path.join(__dirname, '../frontend/index.html')
const homepage = fs.readFileSync(homepagepath, 'utf-8')
const homepagec = '<h1>Hello World</h1>'

app.get('/data', async (req, res) => {
    res.json(await db())
})

app.get('/rolldata2', async (req, res) => {
    const dbData = await db();
})

app.listen(process.env.PORT || 3000, () => console.log("APP RUNNING ON PORT 3000 "));