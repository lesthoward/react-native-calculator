import React, { useContext, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { LogicContext } from '../context/LogicContext';
import { currencyFormat } from '../helpers/app.helpers';

const Header = ({setDisplay}) => {
    const {result} = useContext(LogicContext)
    const handleResult = () => {
        const string = result.toString().includes('.') ? result.toFixed(2) : result
        return currencyFormat( string)
    }

    return (  
        <View style={styles.container}>
            <Text style={[styles.child, styles.result]}>{handleResult()} </Text>
            <TouchableOpacity style={[styles.child, styles.history]} onPress={() => setDisplay('history')}>
                <Text style={styles.historyText}>H</Text>
            </TouchableOpacity>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row'
    },
    child: {
        height: 80,
        textAlignVertical: 'center',
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: 5,
    },
    result: {
        width: '75%',
        textAlign: 'right',
        paddingRight: 20,
        marginRight: 5,
        fontSize: 18,
        fontWeight: '300'
    },
    history: {
        flex: 1,
    },
    historyText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        textAlignVertical: 'center',
        height: '100%',
    }
});

export default Header;