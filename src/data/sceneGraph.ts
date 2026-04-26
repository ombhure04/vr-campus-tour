import type { Scene } from "../types/scene";
  
  const sceneGraph: Partial<Record<Scene, Scene[]>> = {
    // ENTRANCE
    entrance1: ["entrance2"],
    entrance2: ["entrance1", "corridor_main"],

    // GROUND FLOOR
    corridor_main: ["entrance2", "straight", "left_corridor", "right_corridor"],
    straight: ["corridor_main", "straight_left", "straight_right"],
    straight_left: ["straight"],
    straight_right: ["straight"],

    left_corridor: ["corridor_main", "left_corridor1"],
    left_corridor1: ["left_corridor", "left_class1", "left_class2"],
    left_class1: ["left_corridor1"],
    left_class2: ["left_corridor1", "stairs_left_gf"],

    right_corridor: ["corridor_main", "right_corridor1"],
    right_corridor1: ["right_corridor", "right_class1", "right_class2"],
    right_class1: ["right_corridor1"],
    right_class2: ["right_corridor1", "stairs_right_gf"],

    stairs_left_gf: ["left_class2", "first_corridor_main"],
    stairs_right_gf: ["right_class2", "first_corridor_main"],

    // FIRST FLOOR (no straight - only left/right corridors)
    first_corridor_main: ["stairs_left_gf", "stairs_right_gf", "first_left_corridor", "first_right_corridor"],

    first_left_corridor: ["first_corridor_main", "first_left_corridor1"],
    first_left_corridor1: ["first_left_corridor", "first_class1", "first_class2"],
    first_class1: ["first_left_corridor1"],
    first_class2: ["first_left_corridor1", "stairs_left_ff"],

    first_right_corridor: ["first_corridor_main", "first_right_corridor1"],
    first_right_corridor1: ["first_right_corridor", "first_right_class1", "first_right_class2"],
    first_right_class1: ["first_right_corridor1"],
    first_right_class2: ["first_right_corridor1", "stairs_right_ff"],

    stairs_left_ff: ["first_class2", "second_corridor_main"],
    stairs_right_ff: ["first_right_class2", "second_corridor_main"],

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