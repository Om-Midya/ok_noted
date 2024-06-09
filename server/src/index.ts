import express from 'express';
import './DB'
import router from './routers/noteRouter'

// Create a Server
const app = express();

// This is a middleware that will help us to parse the request body coming from the post request
app.use(express.json());

// This middleware will help us to parse the post request coming from the form
app.use(express.urlencoded({ extended: false }));

// Create a route
app.use(router)

// Create a route
// app.post('/',
//     (req, res) => {
//     // Here we will need data from the request
//     console.log(req.body);
//     res.json({ message: 'Hello World' });
// });




// Listen to a port
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

