import React, { useContext } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native'
import { LogicContext } from '../context/LogicContext';
import HistoryItem from './HistoryItem';
const History = ({ setDisplay }) => {
	const { history, setHistory } = useContext(LogicContext);
	const handleBack = () => {
		setDisplay('calculator');
	};

	const randomKey = () => {
		const randomNumber = Math.random().toString(36).substring(2);
		const randomDate = Date.now().toString(36);
		return randomNumber + randomDate;
	};


    const handleReset = () => {
        setHistory([]);
    }
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.sectionTitle}>Math History</Text>
			<View style={styles.historyContainer}>
				{history.length ? (
					history.map((historyItem) => (
						<HistoryItem
							historyItem={historyItem}
							key={randomKey()}
						/>
					))
				) : (
					<Text style={styles.historyDialog}>Start by doing some math operations first</Text>
				)}
			</View>
            {
                history.length ? (
                    <TouchableOpacity style={[styles.block, styles.blockFirstChild, styles.reset]} onPress={handleReset}>
                        <Text style={styles.blockText}>Reset History</Text>
                    </TouchableOpacity>
                ) : null
            }

			<TouchableOpacity style={[styles.block, styles.blockLastChild]} onPress={handleBack}>
				<Text style={styles.blockText}>Back</Text>
			</TouchableOpacity>
		</ScrollView>
	);
};
 
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        padding: 25,
        borderRadius: 5,
        width: '90%',
        marginTop: 150,
        marginBottom: 50,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '300',
    },
    historyContainer: {
        marginTop: 20,
    },
    historyDialog: {
        marginBottom: 20,
    },
    block: {
        height: 56,
        textAlignVertical: 'center',
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: 5,
        marginTop: 10,
    },
    blockText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        textAlignVertical: 'center',
        height: '100%',
    },
    blockFirstChild: {
        marginTop: 20
    },
    blockLastChild: {
        marginBottom: 50,
    },
    reset: {
        backgroundColor: '#ef4444'
    }
})

export default History;