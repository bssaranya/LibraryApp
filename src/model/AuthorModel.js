const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://saranya:saranya@cluster0.j1jik.mongodb.net/LibraryApp?retryWrites=true&w=majority')
// mongoose.connect('mongodb://localhost:27017/LibraryFile');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;