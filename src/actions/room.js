import { normalizeRooms, normalizeRoom } from '../utils';
import { HOST } from "../constants";




export const SET_ROOMS = "SET_ROOMS"
export const SET_ROOM = "SET_ROOM"

export function setRooms(rooms) {
	return {
		type: SET_ROOMS,
		rooms,
	};
}
export const setRoom = (room) => ({
	type: SET_ROOM,
	room
})

export function getRooms() {
	return dispatch => {
		return fetch(`${HOST}/api/v1/rooms`)
			.then(response => response.json())
			.then(json => {
				console.log('getRooms', json);
				console.log('HEllo');

				if (json.is_success) {
          let t = dispatch(setRooms(normalizeRooms(json.rooms)));
          console.log(t);
          return t
				} else {
					alert(json.errors);
				}
			})
			.catch(e => alert(e));
	};
}
export function getRoom(roomId) {
	return dispatch => {
		return fetch(`${HOST}/api/v1/rooms/${roomId}`)
			.then(response => response.json())
			.then(json => {
				console.log('get a single room', json);
				

				if (json.is_success) {
          let t = dispatch(setRoom(normalizeRoom(json.room)));
          console.log(t);
          return t
				} else {
					alert(json.errors);
				}
			})
			.catch(e => alert(e));
	};
}