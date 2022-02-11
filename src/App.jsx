import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";

const App = () => {

    const dispatch = useDispatch();

    const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);
    const amount = useSelector((state: State) => state.bank)

    return (
        <div className="container border border-primary rounded text-center">
            <h1>{amount}</h1>
            <button onClick={() => depositMoney(1000)} className="btn btn-primary">Deposit</button>
            <button onClick={() => withdrawMoney(500)} className="btn btn-secondary">WithDraw</button>
            <button onClick={() => bankrupt()} className="btn btn-success">Bankrupt</button>
        </div>
    );
};

export default App;