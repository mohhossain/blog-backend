//node modules
const express = require('express')
const bodyParser = require('body-parser')

//import variables
const PORT = 8000;
const db = require('./db');
const createLocalDatabase = require('./createLocalDatabase');
const seed = require('./seed');



const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded());

app.use('/api', require('./api'));

app.get('/', (req, res) => {
    res.send('Server Running')
  });




  const syncDb = () => {
    if (process.env.NODE_ENV === 'production') {
      db.sync();
    }
    else {
      console.log('As a reminder, the forced synchronization option is on');
      db.sync({ force: true })
        .then(() => seed())
        .catch(err => {
          if (err.name === 'SequelizeConnectionError') {
            createLocalDatabase();
            seed();
          }
          else {
            console.log(err);
          }
        });
      }
  };

  syncDb();


app.listen(PORT, ()=>{
    console.log('Server running:' + PORT);
})

module.exports = app;




