import React, {
	Component
} from 'react';

import {
	AppRegistry,
	StyleSheet,
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import App from './js/components/App';
import DeliveryForm from './js/components/DeliveryForm';

class DeliveryApp extends Component
{
	render()
	{
		return (
			<Router
				navigationBarStyle={styles.router}
				sceneStyle={styles.scene}
				titleStyle={styles.navigationTitle}
			>
				<Scene key="home" component={App} title="Delivery App" initial={true} />
				<Scene key="deliveryForm" component={DeliveryForm} title="Fill-up the form" />
			</Router>
		)
	}
}

const styles = StyleSheet.create({
	router: {
		backgroundColor: '#d32f2f',
		borderBottomWidth: 0,
	},
	scene: {
		paddingTop: 64,
	},
	navigationTitle: {
		color: 'white',
	},
})

AppRegistry.registerComponent('DeliveryApp', () => DeliveryApp);