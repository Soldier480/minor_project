import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import getExpenseSuggestions from './api.js';
 var result={};
// Create an instance of Express app
const app = express();
app.use(bodyParser.json());

// Configure CORS to allow requests from localhost:3000
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['POST','GET'],
    credentials:true
    
  }));
// Define a route to handle user input
 app.post('/savings', (req, res) => {
    // Assuming the request body contains { name, amount, expenseType }
    const { name, amount, expenseType } = req.body;

   console.log(name, amount, expenseType);

    // Prepare the response object
    const response = getExpenseSuggestions(amount,expenseType);
    // Send the response back to the client
    result=response;
    res.json(response);
    console.log(response);
});

 app.get('/display', (req, res) => {
    console.log(result)
    res.json(result); 
 })
 

// Start the server
const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
