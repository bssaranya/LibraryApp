const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
const bodyParser = require('body-parser');


const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
// file name changed
const homeRouter = require('./src/routes/homeroute');
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');


const app = new express; 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});



// Port number changed

app.listen(process.env.Port || 8000,()=>{
    console.log("Server Ready on 8000");
});
