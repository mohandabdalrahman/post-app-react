const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://Mohand:Honda1994@cluster0.nocin.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true 
}, (err) => {
  if (!err) {
    console.log('MongoDB Connection Succeeded.👍')
  } else {
    console.log('Error in DB connection:👎 ' + err)
  }
});
