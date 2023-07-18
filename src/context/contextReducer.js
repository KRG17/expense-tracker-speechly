// Reducer => a function that takes in the old state, and an action and returns a new state

const contextReducer = (state,action) => {
    let transactions;
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t) => t.id !==  action.payload);
            return transactions;

        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state]; //accepting the transaction coming from before and spreading it with the new addition
            return transactions

        default:
            return state;
    }
}

export default contextReducer;