import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import getExpenseSuggestions from './api.js'

// Create an instance of Express app
const app = express();

// Configure middleware to parse JSON requests
app.use(bodyParser.json());
app.use(cors());
// Define a route to handle user input
 app.post('/save-money', (req, res) => {
    // Assuming the request body contains { name, amount, expenseType }
    const { name, amount, expenseType } = req.body;

   console.log(name, amount, expenseType);

    // Prepare the response object
    const response = getExpenseSuggestions(amount,expenseType);
    // Send the response back to the client
    
    res.json(response);
    console.log(response);
});

 

// Start the server
const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
