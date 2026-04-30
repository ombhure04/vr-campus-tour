
export type Scene =
  | "entrance1"
  | "entrance2"
  | "corridor_main"
  | "straight"
  | "straightleft1"
  | "straightleft2"
  | "straightright1"
  | "straightright2"
  | "left_corridor"
  | "left_corridor1"
  | "left_class1"
  | "left_class2"
  | "right_corridor"
  | "right_corridor1"
  | "right_class1"
  | "right_class2"
  | "stairs_left_gf"
  | "stairs_right_gf"

  // FIRST FLOOR
  | "first_corridor"
  | "first_class1"
  | "first_class2"
  | "first_right_corridor1"
  | "first_right_corridor2"
  | "first_left_corridor1"
  | "first_lab_1"
  | "first_HODCabin"
  | "first_lab2"
  | "first_right_corridor"
  | "first_corridor_right"
  | "first_classR1"
  | "first_classR2"
  | "first_left_corridorR1"
  | "first_left_corridorR2"
  | "first_right_corridorR1"
  | "first_labR1"
  | "first_HODCabinR"
  | "first_labR2"
  | "first_end_corridorR"
  | "stairs_left_ff"
  | "stairs_right_ff"

  // SECOND FLOOR
  | "second_corridor_main"
  | "second_straight"
  | "second_straight_left"
  | "second_straight_right"
  | "second_left_corridor"
  | "second_left_corridor1"
  | "second_class1"
  | "second_class2"
  | "second_right_corridor"
  | "second_right_corridor1"
  | "second_right_class1"
  | "second_right_class2"
  | "library"
  | "library2"
  | "library3"
  | "stairs_left_sf"
  | "stairs_right_sf"

  // THIRD FLOOR
  | "third_corridor_main"
  | "third_straight"
  | "third_straight_left"
  | "third_straight_right"
  | "third_left_corridor"
  | "third_left_corridor1"
  | "third_class1"
  | "third_class2"
  | "third_right_corridor"
  | "third_right_corridor1"
  | "third_right_class1"
  | "third_right_class2"
  | "auditorium";

  export type Hotspot = {
  position: string;
  next: Scene;
  direction: "front" | "left" | "right" | "back";
};

export type SceneData = {
  name: string;
  image: string;
  hotspots: Hotspot[];
};