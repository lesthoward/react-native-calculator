import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { LogicContext } from '../context/LogicContext';


const TopOperators = () => {
    const { setFirstNumber, setSecondNumber, setOperator, setResult, setLastKey } = useContext(LogicContext);
    const handleClear = () => {
        setFirstNumber(0);
        setSecondNumber(0);
        setOperator('');
        setResult(0);
        setLastKey(false);
    }

    const handleOperator = (operator) => {
        setOperator(operator);
        setResult(operator)
    }

    return (  
        <View style={styles.container}>
            <TouchableOpacity style={styles.block} onPress={handleClear}>
                <Text style={styles.blockText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.block}>
                <Text style={styles.blockText} onPress={(e) => handleOperator(e._targetInst.memoizedProps.children)}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.block}>
                <Text style={styles.blockText} onPress={(e) => handleOperator(e._targetInst.memoizedProps.children)}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.block}>
                <Text style={styles.blockText} onPress={(e) => handleOperator(e._targetInst.memoizedProps.children)}>-</Text>
            </TouchableOpacity>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    block: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderColor: 'rgba(0,0,0,0.4)',
        borderWidth: 3.5,
        width: '24%',
        height: 80,
        borderRadius: 3,

    },
    blockText: {
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'rgba(255, 255, 255, 0.6)',
        height: '100%',
    }
})

export default TopOperators;