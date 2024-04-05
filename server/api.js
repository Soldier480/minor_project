
function getExpenseSuggestions(amount, expenseType) {
    let suggestions = [];
    let amountSaved = 0;

    switch (expenseType) {
        case 'food':
            suggestions = ['Cook at home', 'Eat out once a week', 'Limit fast food'];
            amountSaved = 0.2 * amount;
            break;
        case 'transportation':
            suggestions = ['Use public transportation', 'Carpool with friends', 'Bike to nearby places'];
            amountSaved = 0.2 * amount;
            break;
        case 'entertainment':
            suggestions = ['Watch movies at home', 'Explore free events in the city', 'Limit expensive outings'];
            amountSaved = 0.2 * amount;
            break;
        default:
            suggestions = ['No suggestions available for this expense type'];
            amountSaved=0;
            break;
    }

    return { suggestions, amountSaved };
} // Return an object with suggestions and amountsaved;


export default getExpenseSuggestions;