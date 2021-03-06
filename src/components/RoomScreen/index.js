import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { getRoom } from '../../actions/room';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 16,
	},
});

class DetailScreen extends Component {
	componentWillMount() {
		const selectedId = this.props.navigation.state.params.item.id;
		this.props.getRoom(selectedId);
	}
	render() {
		const room = this.props.room;
		
		if (!room) return null;
		const item = this.props.navigation.state.params.item;
		return (
			<View style={styles.container}>
				<Text style={styles.text}>{room.host.fullname}</Text>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	room: state.room.room,
});

const mapDispatchToProps = dispatch => ({
	getRoom: roomId => dispatch(getRoom(roomId)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DetailScreen);
