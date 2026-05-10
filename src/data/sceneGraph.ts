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
  left_corridor1: ["left_corridor", "left_class1", "left_class2", "stairs_left_gf"],
  left_class1: ["left_corridor1"],
  left_class2: ["left_corridor1"],
  // (Right)
  right_corridor: ["corridor_main", "right_corridor1"],
  right_corridor1: ["right_corridor", "right_class1", "right_class2", "stairs_right_gf"],
  right_class1: ["right_corridor1"],
  right_class2: ["right_corridor1"],
  //(Stairs)
  stairs_left_gf: ["left_class2", "ff_main_corridor"],
  stairs_right_gf: ["right_class2", "ff_right_block_main", "ff_main_corridor"],


  // FIRST FLOOR (LEFT SIDE)

  ff_main_corridor: ["ff_right_corridor_1","ff_class_17","ff_class_18","ff_left_corridor_1","stairs_left_gf"],

  ff_right_corridor_1: ["ff_main_corridor","ff_right_corridor_2"],

  ff_right_corridor_2: ["ff_right_corridor_1"],

  ff_left_corridor_1: ["ff_main_corridor","ff_lab_08"],

  ff_class_17: ["ff_main_corridor"],

  ff_class_18: ["ff_main_corridor","stairs_left_ff"],

  ff_lab_08: ["ff_left_corridor_1","ff_hod_cabin","ff_lab_08_inside"],

  ff_lab_08_inside: ["ff_lab_08"],

  ff_hod_cabin: ["ff_lab_08","ff_lab_21"],

  ff_lab_05: ["ff_hod_cabin","ff_right_corridor_l1","ff_lab_05_inside"],

  ff_lab_05_inside: ["ff_lab_05"],

  // FIRST FLOOR (RIGHT SIDE)

  ff_right_block_main: ["stairs_right_gf","ff_class_19","ff_class_20","ff_left_block_1","ff_right_corridor_l1","ff_right_corridor_r1"],

  ff_class_19: ["ff_right_block_main"],

  ff_class_20: ["ff_right_block_main","stairs_right_ff"],

  ff_left_block_1: ["ff_right_block_main","ff_left_block_2"],

  ff_left_block_2: ["ff_left_block_1"],

  ff_right_corridor_l1: ["ff_right_block_main","ff_lab_05"],

  ff_right_corridor_r1: ["ff_right_block_main","ff_lab_21"],

  ff_lab_21: ["ff_right_corridor_r1","ff_hod_cabin_r","ff_hod_cabin","ff_lab_21_inside"],

  ff_lab_21_inside: ["ff_lab_21"],

  ff_hod_cabin_r: ["ff_lab_21","ff_lab_22"],

  ff_lab_22: ["ff_hod_cabin_r","ff_end_corridor_r","ff_lab_22_inside"],

  ff_lab_22_inside: ["ff_lab_22",],

  ff_end_corridor_r: ["ff_lab_22"],


  // STAIRS (IMPORTANT FIX)

  stairs_left_ff: ["ff_main_corridor","sflcorridor"],
  stairs_right_ff: ["ff_right_block_main","sfrcorridor"],

  // SECOND FLOOR (LEFT SIDE)
  sflcorridor: ["c214", "c215", "sflcorridor1", "stairs_left_ff"],
  c214: ["sflcorridor"],
  c215: ["sflcorridor"],
  sflcorridor1: ["sflcorridor", "lab1"],
  lab1: ["sflcorridor1","lab2"],
  lab2: ["lab1","lab3"],
  lab3: ["lab2","lab4"],
  lab4: ["lab3","sfrcorridor"],
  sfrcorridor: ["lab4","lab209", "class20", "stairs_right_ff"],
  lab209: ["sfrcorridor"],
  class20: ["sfrcorridor"],

  // SECOND FLOOR (RIGHT SIDE)
  sfrightcorridor: ["rlab209", "rclass20", "rlab4","stairs_right_ff"],
  rlab209: ["sfrightcorridor"],
  rclass20: ["sfrightcorridor"],
  rlab4: ["sfrightcorridor","rlab3"],
  rlab3: ["rlab4","rlab2"],
  rlab2: ["rlab3","rlab1"],
  rlab1: ["rsflcorridor1","rlab2"],
  rsflcorridor1: ["rsflcorridor", "rlab1"],
  rsflcorridor: ["rsflcorridor1", "stairs_left_ff"],
};

export default sceneGraph;