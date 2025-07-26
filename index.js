



import express from 'express';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();

const dataStore= ["You are a hacker, post a few comments, then add some javascript code and see what happens. Try connecting to the server with other browsers or incognito mode. Since the changes are made to the server itself, those browsers will still be affected"]

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

console.log(__dirname)
console.log(path.join(__dirname, 'public'))

app.get('/', (req, res) => {


    res.render('home', {dataStore});
});

app.post('/add-comment', (req, res) => {
    

    const { text } = req.body;

    dataStore.push(text)

    res.status(200).send('Comment saved');

});

app.listen(3000);
