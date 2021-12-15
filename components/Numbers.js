import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LogicContext } from '../context/LogicContext';

const Numbers = () => {
    const { firstNumber, setFirstNumber, secondNumber, setSecondNumber, operator, result, setResult, lastKey, setLastKey } = useContext(LogicContext);

    const handlePress = (number) => {
        if(operator !== '') {
            if(secondNumber !== 0) {
                return setSecondNumber([...secondNumber, number].join(''));

            } else {
                setLastKey(false);
                return setSecondNumber(number);
            }
        } else if(firstNumber !== 0) {
            if(lastKey) return alert('Please enter an operator');
            return setFirstNumber([...firstNumber, number].join(''));

        } else {
            setFirstNumber(number);
        }

    }

    useEffect(() => {
        if(operator !== '') {
            setResult(secondNumber)
        } else {
            if(lastKey) return
            setResult(firstNumber)
        }
    }, [firstNumber, secondNumber]);

    return (  
        <View style={styles.parent}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.block}>
                    <Text style={styles.blockText} onPress={(e) => handlePress(e._targetInst.memoizedProps.children)}>1</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.block}>
                    <Text style={styles.blockText} onPress={(e) => handlePress(e._targetInst.memoizedProps.children)}>2</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.block}>
                    <Text style={styles.blockText} onPress={(e) => handlePress(e._targetInst.memoizedProps.children)}>3</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                <TouchableOpacity style={styles.block}>
                    <Text style={styles.blockText} onPress={(e) => handlePress(e._targetInst.memoizedProps.children)}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block}>
                    <Text style={styles.blockText} onPress={(e) => handlePress(e._targetInst.memoizedProps.children)}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block}>
                    <Text style={styles.blockText} onPress={(e) => handlePress(e._targetInst.memoizedProps.children)}>6</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.container}>
                <TouchableOpacity style={styles.block}>
                    <Text style={styles.blockText} onPress={(e) => handlePress(e._targetInst.memoizedProps.children)}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block}>
                    <Text style={styles.blockText} onPress={(e) => handlePress(e._targetInst.memoizedProps.children)}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block}>
                    <Text style={styles.blockText} onPress={(e) => handlePress(e._targetInst.memoizedProps.children)}>9</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={[styles.block, styles.blockWidth]}>
                        <Text style={styles.blockText} onPress={(e) => handlePress(e._targetInst.memoizedProps.children)}>0</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    parent: {
        width: '75%'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    block: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderColor: 'rgba(255,255,255,0.4)',
        borderWidth: 3.5,
        width: '32%',
        height: 80,
        borderRadius: 3,
        marginTop: 10,

    },
    blockWidth: {
        width: '100%'
    },
    blockText: {
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'rgba(0, 0, 0, 0.6)',
        height: '100%',
    }
})
 
export default Numbers;