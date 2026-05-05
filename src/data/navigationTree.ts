
const navigationTree = {
  "Entrance": {
    "Entrance 1": "entrance1",
    "Entrance 2": "entrance2"
  },
  "Ground Floor": {
    "Main Corridor": "corridor_main",
    "Straight Corridor": {
      "Straight": "straight",
      "Left Room": "straightleft1",
      "Right Room": "straightright1"
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
    "Main Corridor": "ff_main_corridor",

    "Left Side": {
      "Corridor": "ff_left_corridor_1",
      "Class C-1-17": "ff_class_17",
      "Class C-1-18": "ff_class_18",
      "Lab C-1-08": "ff_lab_08",
      "HOD Cabin": "ff_hod_cabin",
      "Lab C-1-05": "ff_lab_05"
    },

    "Right Side": {
      "Main Corridor": "ff_right_block_main",
      "Corridor": "ff_right_corridor_1",
      "Class C-1-19": "ff_class_19",
      "Class C-1-20": "ff_class_20",
      "Lab C-1-21": "ff_lab_21",
      "HOD Cabin R": "ff_hod_cabin_r",
      "Lab C-1-22": "ff_lab_22"
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