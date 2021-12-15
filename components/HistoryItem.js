import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { currencyFormat } from '../helpers/app.helpers';

const HistoryItem = ({historyItem}) => {
    const {firstNumber, secondNumber, operator, result} = historyItem

    return (  
        <View style={styles.container}>
            <Text style={styles.text}>{currencyFormat(firstNumber)} {operator} {currencyFormat(secondNumber)} = {currencyFormat(result)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, .5)',
        padding: 24,
        marginTop: 10,
    },
    text: {
        color: 'rgba(255, 255, 255, .8)',
        fontSize: 20,
    }
})

export default HistoryItem;