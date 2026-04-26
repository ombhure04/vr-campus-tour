import { Facility, Room, Floor, Entrance } from "./types";

export const facilities: Facility[] = [
  {
    id: "1",
    name: "Cafeteria",
    type: "food",
    image_360: null,
    icon: "coffee",
    description: "Campus cafeteria",
    order_index: 1
  }
];

export const floors: Floor[] = [
  {
    id: "1",
    floor_number: 1,
    name: "First Floor",
    corridor_image: null,
    order_index: 1
  }
];

export const rooms: Room[] = [
  {
    id: "1",
    floor_id: "1",
    name: "Library",
    type: "study",
    side: "left",
    position: 1,
    image_360: null,
    description: "Quiet study area"
  }
];

export const entrance: Entrance = {
  id: "1",
  name: "Main Entrance",
  image_360: null,
  description: "Welcome to campus",
  is_main: true
};