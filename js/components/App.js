import React, {
	Component
} from 'react';

import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableHighlight,
	AppRegistry
} from 'react-native';

import { Actions } from 'react-native-router-flux';
const { height, width } = Dimensions.get('window');

class App extends Component
{
	render()
	{
		return (
			<View style={styles.container}>
				<Text style={styles.pageTitle}>What do you want us to send?</Text>
				<View style={styles.row}>
					<TouchableHighlight 
						underlayColor="#ddd" 
						onPress={() => Actions.deliveryForm({ selected: 'Documents' })} 
						style={styles.column}
					>
						<Text style={styles.columnText}>Documents</Text>
					</TouchableHighlight>

					<TouchableHighlight 
						underlayColor="#ddd" 
						onPress={() => Actions.deliveryForm({ selected: 'Perishables' })} 
						style={styles.column}
					>
						<Text style={styles.columnText}>Perishables</Text>
					</TouchableHighlight>

					<TouchableHighlight 
						underlayColor="#ddd" 
						onPress={() => Actions.deliveryForm({ selected: 'Apparels' })} 
						style={styles.column}
					>
						<Text style={styles.columnText}>Apparels</Text>
					</TouchableHighlight>

					<TouchableHighlight 
						underlayColor="#ddd" 
						onPress={() => Actions.deliveryForm({ selected: 'Appliances' })} 
						style={styles.column}
					>
						<Text style={styles.columnText}>Appliances</Text>
					</TouchableHighlight>

					<TouchableHighlight 
						underlayColor="#ddd" 
						onPress={() => Actions.deliveryForm({ selected: 'Others' })} 
						style={styles.column}
					>
						<Text style={styles.columnText}>Others</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	pageTitle: {
		fontSize: 18,
		marginVertical: 20,
		textAlign: 'center',
	},

	container: {
		flex: 1,
	},

	row: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},

	column: {
		width: width / 2 - 10,
		height: 120,
		margin: 5,
		padding: 5,
		borderRadius: 3,
		backgroundColor: '#ddd',
		// flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},

	columnText: {
		fontSize: 12,
	}
})

export default App;