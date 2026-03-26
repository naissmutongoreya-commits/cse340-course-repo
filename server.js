import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 10000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

// Arrow function routes as required
const getHome = (req, res) => res.render('index', { title: 'Home' });
const getOrgs = (req, res) => res.render('organizations', { title: 'Organizations' });
const getProjects = (req, res) => res.render('projects', { title: 'Service Projects' });
const getCategories = (req, res) => res.render('categories', { title: 'Categories' });

app.get('/', getHome);
app.get('/organizations', getOrgs);
app.get('/projects', getProjects);
app.get('/categories', getCategories);

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});


