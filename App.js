import React, { useContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './components/Header';
import Numbers from './components/Numbers';
import RightPad from './components/RightPad';
import TopOperators from './components/TopOperators';
import History from './components/History';
import LogicProvider from './context/LogicContext';
const App = () => {
    const [display, setDisplay] = useState('calculator');
    return (
        <LogicProvider>
                {
                    display === 'calculator'
                    ? (
                        <View style={[styles.container, styles.verticalCenter]}>
                            <View style={styles.calculator}>
                                <Header setDisplay={setDisplay}/>
                                <TopOperators/>

                                <View style={styles.pad}>
                                    <Numbers style={styles.numbers}/>
                                    <RightPad/>
                                </View>
                                
                            </View>
                        </View>
                    )
                    : (
                        <View style={[styles.container]}>
                            <History setDisplay={setDisplay}/>
                        </View>
                    )
                }
        </LogicProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CB356B',
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center'
    },
    verticalCenter: {
        // justifyContent: 'center',
        paddingTop: 150,
    },
    calculator: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        padding: 25,
        borderRadius: 5,
        width: '90%'
    },
    pad: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default App;
