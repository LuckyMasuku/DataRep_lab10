const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

  
// used to pass the html body
// parser application/xpress-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//connection string to connect to database
const myConnectionString = 'mongodb+srv://lucky:lucky@cluster0.ty8xv.mongodb.net/movies?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, {useNewUrlParser: true});

const Schema = mongoose.Schema;

// String type of data that will be stored in the database
var movieSchema = new Schema({
  title : String,
  year: String,
  poster:String,
})
//schema used to create new model for database 
//everytime entering the database channel will be opened to refer to a movie allows the editing and addidng data to database
var MovieModel = mongoose.model("movie", movieSchema);

//listening to get the request
app.get('/', (req, res) => {
  res.send('Welcome to data and representation and querying !')
})



app.get('/api/movies', (req, res)=>{

  // const mymovies = [{
    
    
  //   "Title":"Avengers: Infinity War",
  //   "Year":"2018",
  //   "imdbID":"tt4154756",
  //   "Type":"movie",
  //   "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  //   },
  //   {
  //   "Title":"Captain America: Civil War",
  //   "Year":"2016",
  //   "imdbID":"tt3498820",
  //   "Type":"movie",
  //   "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
  //   },
  //   ];

   
   // helps to finds all documents,records or data in the database and send them back
    MovieModel.find((err,data)=>{
      res.json(data);
    })

 //used to send data
//   res.status(200).json({
//      massage: "Everything is ok",
//     movies:mymovies});

 })
//when the conditions are met this function will used
//allows the use of body purser
app.get('/api/movies/:id',(req,res)=>{
  console.log(req.params.id);
 // this find request will listen and return any movie or data with the same id
  MovieModel.findById(req.params.id, (err, data)=>{
    res.json(data);
  })

})

app.put('/api/movies/:id', (req, res)=>{
  console.log("Update movie:" +req.params.id);
  console.log(req, body);
//find a record with an ID
  MovieModel.findByIdAndUpdate(req.params.id,req.body,{new:true},
    (err,data)=>{
      res.send(data);
    })

})

app.post('/api/movies',(req, res )=>{
  

  console.log('Movie Recieved!')
  console.log(req.body.title);
  console.log(req.body.year);
  console.log(req.body.poster);

  //this methord will allow the read from the database
  MovieModel.create({

    title:req.body.title,
    year:req.body.year,
    poster:req.body.poster,
  })
  //this allows not to have replication of database
  res.send('Item Added');
  
})
//delete methord
app.delete('/api/movies/:id',(req, res)=>{
console.log("Delete Movie: "+req.params.id);

//this fucntion will find the id and delete
MovieModel.findByIdAndDelete(req.params.id,(err, data)=>{
  res.send(data);
  })
})

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})