import { HOST } from "../constants";

export function normalizeRooms(rooms) {
  return rooms.map((room) => {
    return {
      id: room.id  || "",
      title: room.listing_name || "",
      image: `https:${room.image}` || "",
      homeType: room.home_type || "",
      bedRoom: room.bed_room || "",
      price: room.price || "",
      instant: room.instant || ""

    }
  })
}
export function normalizeRoom(room) {
	return {
		id: room.id || '',
		title: room.listing_name || '',
		image: `${HOST}${room.image}` || '',
		homeType: room.home_type || '',
		bedRoom: room.bed_room || '',
		price: room.price || '',
		instant: room.instant || '',
		summary: room.summary || '',
		accommodate: room.accommodate || '',
		bathRoom: room.bath_room || '',
		unavailableDates: room.unavailable_dates || '',
		host: room.host
			? {
					email: room.host.email || '',
					fullname: room.host.fullname || '',
					avatar: room.host.image || '',
			  }
			: {
					email: '',
					fullname: '',
					avatar: '',
			  },
	};
}




// home_type: "House",
//  room_type: "Entire",
//  accommodate: 4,
//  bed_room: 4,
//  bath_room: 4,
//  listing_name: "Beautiful Apartment",
//  summary: "The apartment is located on the top floor of a high end building and besides offering breathtaking views, the place is classy, modern and cozy. The materials, colors and details create an elegant and stylish environment, certainly a great place to live",
//  is_tv: nil,
//  is_kitchen: nil,
//  is_air: nil,
//   is_heating: nil,
//   is_internet: nil,
//   price: 150,
//   active: true,
//   user_id: user1.id,
//   created_at: "2019-04-02 20:36:29",
//   updated_at: "2019-04-02 20:40:37",
//   address: "317 Garces Drive, San Francisco, CA, USA",
//   latitude: 37.7161213469388,
//   longitude: -122.481991061224,
//   instant: "Instant")