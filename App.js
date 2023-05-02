const express = require('express');
const app = express();
const port = 3000;

// Configurar directorio de archivos estáticos
app.use(express.static('public'));

// Configurar plantilla EJS
app.set('view engine', 'ejs');

// Rutas
app.get('/', (req, res) => {
  res.render('index.ejs', { pageTitle: 'Inicio' });
});

app.get('/habilidades', (req, res) => {
  res.render('skills.ejs', { pageTitle: 'Habilidades' });
});

app.get('/contacto', (req, res) => {
  res.render('contact.ejs', { pageTitle: 'Contacto' });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
