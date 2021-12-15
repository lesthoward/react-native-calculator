import React, { useState, useMemo }from 'react';
export const LogicContext = React.createContext();

const  LogicProvider = ({children}) => {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState(0);
    const [lastKey, setLastKey] = useState(false);
    const [history, setHistory] = useState([]);

    const value = useMemo(() => ({
        firstNumber,
        setFirstNumber,
        secondNumber,
        setSecondNumber,
        operator,
        setOperator,
        result,
        setResult,
        lastKey,
        setLastKey,
        history,
        setHistory,
    }), [firstNumber, secondNumber, operator, result, history]);

    return (
        <LogicContext.Provider value={value}>
            { children }
        </LogicContext.Provider>
    )
}
 
export default LogicProvider;
