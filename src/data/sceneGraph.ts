import type { Scene } from "../types/scene";

const sceneGraph: Partial<Record<Scene, Scene[]>> = {
  // ENTRANCE
  entrance1: ["entrance2"],
  entrance2: ["entrance1", "corridor_main"],

  // GROUND FLOOR
  corridor_main: ["entrance2", "straight"],
  straight: ["corridor_main", "straightleft1", "straightright1"],
  straightleft1: ["straight", "straightleft2"],
  straightleft2: ["straightleft1"],
  straightright1: ["straight", "straightright2"],
  straightright2: ["straightright1"],
  // (Left)
  left_corridor: ["corridor_main", "left_corridor1"],
  left_corridor1: ["left_corridor", "left_class1", "left_class2"],
  left_class1: ["left_corridor1"],
  left_class2: ["left_corridor1", "stairs_left_gf"],
  // (Right)
  right_corridor: ["corridor_main", "right_corridor1"],
  right_corridor1: ["right_corridor", "right_class1", "right_class2"],
  right_class1: ["right_corridor1"],
  right_class2: ["right_corridor1", "stairs_right_gf"],
  //(Stairs)
  stairs_left_gf: ["left_class2", "ff_main_corridor"],
  stairs_right_gf: ["right_class2", "ff_right_block_main", "ff_main_corridor"],


  // FIRST FLOOR (LEFT SIDE)

  ff_main_corridor: [
    "ff_right_corridor_1",
    "ff_class_17",
    "ff_class_18",
    "ff_left_corridor_1",
    "stairs_left_gf"
  ],

  ff_right_corridor_1: [
    "ff_main_corridor",
    "ff_right_corridor_2"
  ],

  ff_right_corridor_2: [
    "ff_right_corridor_1"
  ],

  ff_left_corridor_1: [
    "ff_main_corridor",
    "ff_lab_08"
  ],

  ff_class_17: [
    "ff_main_corridor"
  ],

  ff_class_18: [
    "ff_main_corridor",
    "stairs_left_ff"
  ],

  ff_lab_08: [
    "ff_left_corridor_1",
    "ff_hod_cabin"
  ],

  ff_hod_cabin: [
    "ff_lab_08",
    "ff_lab_21"
  ],

  ff_lab_05: [
    "ff_hod_cabin",
    "ff_right_corridor_l1"
  ],


  // FIRST FLOOR (RIGHT SIDE)

  ff_right_block_main: [
    "stairs_right_gf",
    "ff_class_19",
    "ff_class_20",
    "ff_left_block_1",
    "ff_right_corridor_l1",
    "ff_right_corridor_r1"
  ],

  ff_class_19: [
    "ff_right_block_main"
  ],

  ff_class_20: [
    "ff_right_block_main",
    "stairs_right_ff"
  ],

  ff_left_block_1: [
    "ff_right_block_main",
    "ff_left_block_2"
  ],

  ff_left_block_2: [
    "ff_left_block_1"
  ],

  ff_right_corridor_l1: [
    "ff_right_block_main",
    "ff_lab_05"
  ],

  ff_right_corridor_r1: [
    "ff_right_block_main",
    "ff_lab_21"
  ],

  ff_lab_21: [
    "ff_right_corridor_r1",
    "ff_hod_cabin_r",
    "ff_hod_cabin"
  ],

  ff_hod_cabin_r: [
    "ff_lab_21",
    "ff_lab_22"
  ],

  ff_lab_22: [
    "ff_hod_cabin_r",
    "ff_end_corridor_r"
  ],

  ff_end_corridor_r: [
    "ff_lab_22"
  ],


  // STAIRS (IMPORTANT FIX)

  stairs_left_ff: [
    "ff_class_18",
    "second_corridor_main"
  ],

  stairs_right_ff: [
    "ff_class_20",
    "second_corridor_main"
  ],

  // SECOND FLOOR (library instead of straight)
  second_corridor_main: ["stairs_left_ff", "stairs_right_ff", "library", "second_left_corridor", "second_right_corridor"],

  library: ["second_corridor_main", "library2", "library3"],
  library2: ["library"],
  library3: ["library"],

  second_left_corridor: ["second_corridor_main", "second_left_corridor1"],
  second_left_corridor1: ["second_left_corridor", "second_class1", "second_class2"],
  second_class1: ["second_left_corridor1"],
  second_class2: ["second_left_corridor1", "stairs_left_sf"],

  second_right_corridor: ["second_corridor_main", "second_right_corridor1"],
  second_right_corridor1: ["second_right_corridor", "second_right_class1", "second_right_class2"],
  second_right_class1: ["second_right_corridor1"],
  second_right_class2: ["second_right_corridor1", "stairs_right_sf"],

  stairs_left_sf: ["second_class2", "third_corridor_main"],
  stairs_right_sf: ["second_right_class2", "third_corridor_main"],

  // THIRD FLOOR (auditorium instead of straight)
  third_corridor_main: ["stairs_left_sf", "stairs_right_sf", "auditorium", "third_left_corridor", "third_right_corridor"],

  auditorium: ["third_corridor_main"],

  third_left_corridor: ["third_corridor_main", "third_left_corridor1"],
  third_left_corridor1: ["third_left_corridor", "third_class1", "third_class2"],
  third_class1: ["third_left_corridor1"],
  third_class2: ["third_left_corridor1"],

  third_right_corridor: ["third_corridor_main", "third_right_corridor1"],
  third_right_corridor1: ["third_right_corridor", "third_right_class1", "third_right_class2"],
  third_right_class1: ["third_right_corridor1"],
  third_right_class2: ["third_right_corridor1"],
};

export default sceneGraph;