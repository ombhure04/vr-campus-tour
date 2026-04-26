import type { Scene } from "../types/scene";
 
 const navigationTree = {
    "Entrance": {
      "Entrance 1": "entrance1",
      "Entrance 2": "entrance2"
    },
    "Ground Floor": {
      "Main Corridor": "corridor_main",
      "Straight Corridor": {
        "Straight": "straight",
        "Left Room": "straight_left",
        "Right Room": "straight_right"
      },
      "Left Corridor": {
        "Corridor": "left_corridor",
        "Corridor 1": "left_corridor1",
        "Class 1": "left_class1",
        "Class 2": "left_class2"
      },
      "Right Corridor": {
        "Corridor": "right_corridor",
        "Corridor 1": "right_corridor1",
        "Class 1": "right_class1",
        "Class 2": "right_class2"
      },
      "Stairs": {
        "Left Stairs": "stairs_left_gf",
        "Right Stairs": "stairs_right_gf"
      }
    },
    "First Floor": {
      "Main Corridor": "first_corridor_main",
      "Left Corridor": {
        "Corridor": "first_left_corridor",
        "Class 1": "first_class1",
        "Class 2": "first_class2"
      },
      "Right Corridor": {
        "Corridor": "first_right_corridor",
        "Class 1": "first_right_class1",
        "Class 2": "first_right_class2"
      }
    },
    "Second Floor": {
      "Main Corridor": "second_corridor_main",
      "Library": "library",
      "Left Corridor": {
        "Corridor": "second_left_corridor",
        "Class 1": "second_class1",
        "Class 2": "second_class2"
      },
      "Right Corridor": {
        "Corridor": "second_right_corridor",
        "Class 1": "second_right_class1",
        "Class 2": "second_right_class2"
      }
    },
    "Third Floor": {
      "Main Corridor": "third_corridor_main",
      "Auditorium": "auditorium",
      "Left Corridor": {
        "Corridor": "third_left_corridor",
        "Class 1": "third_class1",
        "Class 2": "third_class2"
      },
      "Right Corridor": {
        "Corridor": "third_right_corridor",
        "Class 1": "third_right_class1",
        "Class 2": "third_right_class2"
      }
    }
  };

export default navigationTree;