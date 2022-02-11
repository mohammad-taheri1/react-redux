const initialState = 0;

interface DepositeAction {
    type: "deposit",
    payload: number
}

interface WithdrawAction {
    type: "withdraw"
    payload: number
}

interface BankruptAction {
    type: "bankrupt"
}

type Action = DepositeAction | WithdrawAction | BankruptAction

const bankReducer = (state: number = initialState, action: Action) => {
    switch(action.type){
        case "deposit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        case "bankrupt":
            return 0;
        default:
            return state;
    }
}

export default bankReducer;