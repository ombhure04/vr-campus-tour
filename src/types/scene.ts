
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
  | "ff_main_corridor"

  | "ff_class_17"
  | "ff_class_18"

  | "ff_right_corridor_1"
  | "ff_right_corridor_2"

  | "ff_left_corridor_1"

  | "ff_lab_08"
  | "ff_hod_cabin"
  | "ff_lab_05"
  | "ff_right_corridor_l1"


  | "ff_right_block_main"

  | "ff_class_19"
  | "ff_class_20"

  | "ff_left_block_1"
  | "ff_left_block_2"

  | "ff_right_corridor_r1"
  | "ff_lab_21"
  | "ff_hod_cabin_r"
  | "ff_lab_22"
  | "ff_end_corridor_r"

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
  keywords?: string[];
  image: string;
  hotspots: Hotspot[];
};