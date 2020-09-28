const express = require('express');
const app = express();
const router = require('./routes/index');
const path = require('path');
const hbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);
app.engine('hbs', hbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.listen(
    PORT,
    () => {
      console.log(`Listening to port ${PORT}`);
    }
  );
  