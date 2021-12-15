import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LogicContext } from '../context/LogicContext';
const RightPad = () => {
	const {
		firstNumber,
		secondNumber,
		operator,
		result,
		setResult,
		setFirstNumber,
		setSecondNumber,
		setOperator,
        lastKey,
        setLastKey,
        history,
        setHistory
	} = useContext(LogicContext);
	const handleResult = () => {
		if (!firstNumber) return alert('Please enter a number');
		if (!operator) return alert('Please select an operator');
		if (!secondNumber) return alert('Please enter a second number');

		switch (operator) {
			case '+':
				setResult(Number(firstNumber) + Number(secondNumber));
				break;
			case '-':
				setResult(Number(firstNumber) - Number(secondNumber));
				break;
			case '*':
				setResult(Number(firstNumber) * Number(secondNumber));
				break;
			case '/':
				setResult(Number(firstNumber) / Number(secondNumber));
				break;
			default:
				break;
		}

        setHistory([...history, {
            firstNumber,
            secondNumber,
            operator,
            result
        }]);

		setOperator('');
        setSecondNumber(0);
        setLastKey(true);

	};


    const handleOperator = (operator) => {
        setOperator(operator);
        setResult(operator)
    }

    useEffect(() => {
        if(lastKey) {
            setFirstNumber(result);
        }
    } , [lastKey]);

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.block}>
				<Text style={styles.blockText} onPress={(e) => handleOperator(e._targetInst.memoizedProps.children)}>+</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.block} onPress={handleResult}>
				<Text style={styles.blockText}>=</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '23.5%',
	},
	block: {
		flex: 1,
		marginTop: 10,
		backgroundColor: 'rgba(0,0,0,0.3)',
		borderColor: 'rgba(0,0,0,0.4)',
		borderWidth: 3.5,
		borderRadius: 3,
	},
	blockText: {
		fontSize: 20,
		textAlign: 'center',
		textAlignVertical: 'center',
		color: 'rgba(255, 255, 255, 0.6)',
		height: '100%',
	},
});

export default RightPad;
