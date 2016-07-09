import React, {
	Component
} from 'react';

import {
	View,
	Text,
	TextInput,
	TouchableHighlight,
	StyleSheet,
} from 'react-native';

class DeliveryForm extends Component
{
	render()
	{
		return (
			<View style={styles.container}>
				<View style={styles.row}>
					<View style={styles.form}>
						<Text style={styles.pageTitle}>Please delivery my { this.props.selected }</Text>
						<View style={styles.form__group}>
							<Text style={styles.form__label}>Name</Text>
							<TextInput 
								style={styles.form__control}
								onChangeText={(text) => console.log(text)} />
						</View>
						<View style={styles.form__group}>
							<Text style={styles.form__label}>eMail</Text>
							<TextInput 
								style={styles.form__control}
								onChangeText={(text) => console.log(text)} />
						</View>

						<View style={styles.form__group}>
							<Text style={styles.form__label}>Phone</Text>
							<TextInput 
								style={styles.form__control}
								onChangeText={(text) => console.log(text)} />
						</View>

						<View style={styles.form__group}>
							<Text style={styles.form__label}>Address</Text>
							<TextInput 
								style={[styles.form__control, styles.textArea]}
								multiline={true}
								onChangeText={(text) => console.log(text)} />
						</View>

						<View style={[styles.form__group, styles.button__container]}>
							<TouchableHighlight 
								style={styles.button} 
								underlayColor="#333" 
								onPress={() => alert('submitted')}
							>
								<Text style={styles.button__text}>Makikisuyo Po</Text>
							</TouchableHighlight>
						</View>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: 'white',
	},

	pageTitle: {
		fontSize: 18,
		marginVertical: 20,
		textAlign: 'center',
	},

	form__group: {
		marginBottom: 15,
	},

	form__label: {
		color: '#333',
		marginBottom: 5,
	},

	form__control: {
		height: 30,
		padding: 5,
		borderRadius: 3,
		borderWidth: 1,
		borderColor: '#ddd',
	},

	textArea: {
		height: 60
	},

	button__container: {
		marginTop: 20,
	},

	button: {
		padding: 10,
		borderRadius: 50,
		backgroundColor: '#d32f2f',
	},	

	button__text: {
		color: 'white',
		textAlign: 'center',
	}
})

export default DeliveryForm;