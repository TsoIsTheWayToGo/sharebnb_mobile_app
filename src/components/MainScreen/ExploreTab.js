import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, FlatList, TouchableOpacity, Text, Image, Dimensions } from 'react-native';

import { navigate } from '../../actions/nav';
import { getRooms } from '../../actions/room';

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: 'white',
	},

	item: {
		backgroundColor: 'white',
		padding: 20,
		marginBottom: 20,
	},

	image: {
		width: Dimensions.get('window').width - 80,
		height: (Dimensions.get('window').width * 4) / 7,
		marginBottom: 15,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 16,
		marginBottom: 5,
		color: '#555',
	},
});

const items = [
	{
		id: 1,
		title: 'New York',
		homeType: 'House',
		image: {
			uri:
				'http://keypuncher.co/wp-content/uploads/2018/10/big-beautiful-houses-big-beautiful-houses-pretty-homes-house-big-nice-houses-inside.jpg',
		},
		bedRoom: 2,
		price: 150,
		instant: true,
	},
	{
		id: 2,
		title: 'San Francisnco',
		homeType: 'apartment',
		image: {
			uri:
				'https://cdn20.patchcdn.com/users/22872566/20171102/025001/styles/T800x600/public/processed_images/gwinnettwater3-1509648448-3701.jpg',
		},
		bedRoom: 3,
		price: 250,
		instant: false,
	},
	{
		id: 3,
		title: 'Paris',
		homeType: 'House',
		image: {
			uri:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgu1PBOu5tv3tzVq9i6krqiz9nnU2o9pHqJI72roSY0joGOs2E',
		},
		bedRoom: 1,
		price: 100,
		instant: false,
	},
];

class ExploreTab extends Component {

	componentWillMount(){
		this.props.getRooms()
	}

	onPress(item) {
		this.props.navigate({ routeName: 'Room', params: { item: item } });
	}

	render() {
		const { rooms } = this.props;
		return (
			<FlatList
				style={styles.container}
				data={rooms}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => this.onPress(item)} style={styles.item}>
						<Image style={styles.image} source={{uri: item.image}} />
						<Text style={styles.title}>{`$${item.price} ${item.instant ? '⚡' : ''} ${item.title}`}</Text>
						<Text>{`${item.homeType} - ${item.bedRoom} bedroom(s)`}</Text>
					</TouchableOpacity>
				)}
				keyExtractor={(item, index) => item.id}
			/>
		);
	}
}

const mapStateToProps = state => ({
	rooms: state.room.rooms
});

const mapDispatchToProps = dispatch => ({
	navigate: route => dispatch(navigate(route)),
	getRooms: () => dispatch(getRooms()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ExploreTab);
