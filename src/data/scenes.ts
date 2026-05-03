import type { Scene, SceneData } from "../types/scene";


import entrance1 from "../assets/entrance1.jpg";
import entrance2 from "../assets/entrance2.jpg";

import corridorMain from "../assets/ground_floor/main.jpg";
import straight from "../assets/ground_floor/straight.jpg";
import straightLeft1 from "../assets/ground_floor/straightleft1.jpg";
import straightLeft2 from "../assets/ground_floor/straightleft2.jpg";
import straightRight1 from "../assets/ground_floor/straightright1.jpg";
import straightRight2 from "../assets/ground_floor/straightright2.jpg";

import leftCorridor from "../assets/ground_floor/leftcorridor.jpg";
import leftCorridor1 from "../assets/ground_floor/leftcorridor1.jpg";
import leftClass1 from "../assets/ground_floor/leftclass1.jpg";
import leftClass2 from "../assets/ground_floor/leftclass2.jpg";

import rightCorridor from "../assets/ground_floor/rightcorridor.jpg";
import rightCorridor1 from "../assets/ground_floor/rightcorridor1.jpg";
import rightClass1 from "../assets/ground_floor/rightclass1.jpg";
import rightClass2 from "../assets/ground_floor/rightclass2.jpg";

import ffleftcorridor from "../assets/first_floor/ffleftcorridor.jpg";
import c117 from "../assets/first_floor/c-1-17.jpg";
import c118 from "../assets/first_floor/c-1-18.jpg";
import ffrightcorridor1 from "../assets/first_floor/ffrightcorridor1.jpg";
import ffrightcorridor2 from "../assets/first_floor/ffrightcorridor2.jpg";
import ffleftcorridor1 from "../assets/first_floor/ffleftcorridor1.jpg";
import c108 from "../assets/first_floor/c-1-08.jpg";
import hodcabin from "../assets/first_floor/hodcabin.jpg";
import c105 from "../assets/first_floor/c-1-05.jpg";
import ffrightcorridor from "../assets/first_floor/ffrightcorridor.jpg";
import ffcorridorright from "../assets/first_floor/ffcorridorRight.jpg";
import c119 from "../assets/first_floor/c-1-19.jpg";
import c120 from "../assets/first_floor/c-1-20.jpg";


import stairsLeftGF from "../assets/ground_floor/stairs_left_gf.jpg";
import stairsRightGF from "../assets/ground_floor/stairs_right_gf.jpg";

import stairsLeftFF from "../assets/first_floor/stairs_left_ff.jpg";
import stairsRightFF from "../assets/first_floor/stairs_right_ff.jpg";

import stairsLeftSF from "../assets/second_floor/stairs_left_sf.jpg";
import stairsRightSF from "../assets/second_floor/stairs_right_sf.jpg";

import libraryImg from "../assets/common/library1.jpg";
import libraryImg2 from "../assets/common/library2.jpg";
import libraryImg3 from "../assets/common/library3.jpg";

// import auditoriumImg from "../assets/common/auditorium.jpg";


const scenes: Partial<Record<Scene, SceneData>> = {
  // ENTRANCE
  entrance1: {
    name: "Entrance 1",
    image: entrance1,
    hotspots: [
      { position: "0 1.5 -4", next: "entrance2", direction: "front" },
    ]
  },

  entrance2: {
    name: "Entrance 2",
    image: entrance2,
    hotspots: [
      { position: "0 1.5 -4", next: "corridor_main", direction: "front" },
      { position: "0 1.2 3", next: "entrance1", direction: "back" },
    ]
  },

  // GROUND FLOOR - Main Corridor with straight, left, right
  corridor_main: {
    name: "Main Corridor",
    image: corridorMain,
    hotspots: [
      { position: "0 1.5 -4", next: "straight", direction: "front" },
      { position: "-2 1.5 -4", next: "left_corridor", direction: "left" },
      { position: "2 1.5 -4", next: "right_corridor", direction: "right" },
      { position: "0 1.2 3", next: "entrance2", direction: "back" },
    ]
  },

  // Straight corridor with left and right hotspots
  straight: {
    name: "Straight Corridor",
    image: straight,
    hotspots: [
      { position: "-1 1.5 -4", next: "straightleft1", direction: "left" },
      { position: "1 1.5 -4", next: "straightright1", direction: "right" },
      { position: "0 1.2 3", next: "corridor_main", direction: "back" },
    ]
  },

  straightleft1: {
    name: "Straight Left 1",
    image: straightLeft1,
    hotspots: [
      { position: "-1 1.5 -4", next: "straightleft2", direction: "front" },
      { position: "0 1.2 3", next: "straight", direction: "back" },
    ]
  },

  straightleft2: {
    name: "Straight Left 2",
    image: straightLeft2,
    hotspots: [
      { position: "0 1.2 3", next: "straightleft1", direction: "back" },
    ]
  },

  straightright1: {
    name: "Straight Right 1",
    image: straightRight1,
    hotspots: [
      { position: "0 1.2 3", next: "straight", direction: "back" },
      { position: "1 1.5 -4", next: "straightright2", direction: "front" },
    ]
  },

  straightright2: {
    name: "Straight Right 2",
    image: straightRight2,
    hotspots: [
      { position: "0 1.2 3", next: "straightright1", direction: "back" },
    ]
  },
  // Left corridor path
  left_corridor: {
    name: "Left Corridor",
    image: leftCorridor,
    hotspots: [
      { position: "0 1.5 -4", next: "left_corridor1", direction: "front" },
      { position: "0 1.2 3", next: "corridor_main", direction: "back" },
    ]
  },

  left_corridor1: {
    name: "Left Corridor 1",
    image: leftCorridor1,
    hotspots: [
      { position: "-1 1.5 -4", next: "left_class1", direction: "left" },
      { position: "1 1.5 -4", next: "left_class2", direction: "right" },
      { position: "0 1.2 3", next: "left_corridor", direction: "back" },
    ]
  },

  left_class1: {
    name: "Left Class 1",
    image: leftClass1,
    hotspots: [
      { position: "0 1.2 3", next: "left_corridor1", direction: "back" },
    ]
  },

  left_class2: {
    name: "Left Class 2",
    image: leftClass2,
    hotspots: [
      { position: "0 1.5 -4", next: "stairs_left_gf", direction: "front" },
      { position: "0 1.2 3", next: "left_corridor1", direction: "back" },
    ]
  },

  // Right corridor path
  right_corridor: {
    name: "Right Corridor",
    image: rightCorridor,
    hotspots: [
      { position: "0 1.5 -4", next: "right_corridor1", direction: "front" },
      { position: "0 1.2 3", next: "corridor_main", direction: "back" },
    ]
  },

  right_corridor1: {
    name: "Right Corridor 1",
    image: rightCorridor1,
    hotspots: [
      { position: "-1 1.5 -4", next: "right_class1", direction: "left" },
      { position: "1 1.5 -4", next: "right_class2", direction: "right" },
      { position: "0 1.2 3", next: "right_corridor", direction: "back" },
    ]
  },

  right_class1: {
    name: "Right Class 1",
    image: rightClass1,
    hotspots: [
      { position: "0 1.2 3", next: "right_corridor1", direction: "back" },
    ]
  },

  right_class2: {
    name: "Right Class 2",
    image: rightClass2,
    hotspots: [
      { position: "0 1.5 -4", next: "stairs_right_gf", direction: "front" },
      { position: "0 1.2 3", next: "right_corridor1", direction: "back" },
    ]
  },

  // Stairs to First Floor
  stairs_left_gf: {
    name: "Stairs to First Floor",
    image: stairsLeftGF,
    hotspots: [
      { position: "0 1.5 -4", next: "first_corridor", direction: "front" },
      { position: "0 1.2 3", next: "left_class2", direction: "back" },
    ]
  },

  stairs_right_gf: {
    name: "Stairs to First Floor",
    image: stairsRightGF,
    hotspots: [
      { position: "0 1.5 -4", next: "first_corridor_right", direction: "front" },
      { position: "0 1.2 3", next: "right_class2", direction: "back" },
    ]
  },

  // FIRST FLOOR 
  first_corridor: {
    name: "FF left Corridor",
    image: ffleftcorridor,
    hotspots: [
      { position: "0 1.5 -4", next: "first_right_corridor1", direction: "front" },
      { position: "2 1.5 -4", next: "first_class1", direction: "right" },
      { position: "-2 1.5 -4", next: "first_class2", direction: "left" },
      { position: "-3.5 1.5 -2", next: "first_left_corridor1", direction: "left" },
      { position: "0 1.2 3", next: "stairs_left_gf", direction: "back" },
    ]
  },

  first_class1: {
    name: "Class C-1-17",
    image: c117,
    hotspots: [
      { position: "0 1.2 3", next: "first_corridor", direction: "back" },
    ]
  },

  first_class2: {
    name: "Class C-1-18",
    image: c118,
    hotspots: [
      { position: "0 1.2 3", next: "first_corridor", direction: "back" },
    ]
  },

  first_right_corridor1: {
    name: "Right Corridor 1",
    image: ffrightcorridor1,
    hotspots: [
      { position: "-1 1.5 -4", next: "first_right_corridor2", direction: "front" },
      { position: "0 1.2 3", next: "first_corridor", direction: "back" },
    ]
  },

  first_right_corridor2: {
    name: "Right Corridor 2",
    image: ffrightcorridor2,
    hotspots: [
      { position: "0 1.2 3", next: "first_right_corridor1", direction: "back" },
    ]
  },

  first_left_corridor1: {
    name: "Left Corridor 1",
    image: ffleftcorridor1,
    hotspots: [
      { position: "0 1.5 -4", next: "first_lab_1", direction: "front" },
      { position: "0 1.2 3", next: "first_corridor", direction: "back" },
    ]
  },

  first_lab_1: {
    name: "Lab C-1-08",
    image: c108,
    hotspots: [
      { position: "0 1.5 -4", next: "first_HODCabin", direction: "front" },
      { position: "0 1.2 3", next: "first_left_corridor1", direction: "back" },
    ]
  },

  first_HODCabin: {
    name: "HOD Cabin",
    image: hodcabin,
    hotspots: [
      { position: "0 1.5 -4", next: "first_lab2", direction: "front" },
      { position: "0 1.2 3", next: "first_lab_1", direction: "back" },
    ]
  },

  first_lab2: {
    name: "Lab C-1-05",
    image: c105,
    hotspots: [
      { position: "0 1.2 3", next: "first_HODCabin", direction: "back" },
    ]
  },

  first_right_corridor: {
    name: "Right Corridor",
    image: ffrightcorridor,
    hotspots: [
      { position: "0 1.2 3", next: "first_lab2", direction: "back" },
    ]
  },

  first_corridor_right: {
    name: "FF Right Main Corridor",
    image: ffcorridorright,
    hotspots: [
      { position: "0 1.5 -4", next: "first_left_corridorR1", direction: "front" },
      { position: "2 1.5 -4", next: "first_classR1", direction: "right" },
      { position: "-2 1.5 -4", next: "first_classR2", direction: "left" },
      { position: "3 1.5 -2", next: "first_right_corridorR1", direction: "right" },
      { position: "0 1.2 3", next: "stairs_right_gf", direction: "back" },
    ]
  },

  first_classR1: {
    name: "Class C-1-19",
    image: c119,
    hotspots: [
      { position: "0 1.2 3", next: "first_corridor_right", direction: "back" },
    ]
  },

  first_classR2: {
    name: "Class C-1-20",
    image: c120,
    hotspots: [
      { position: "0 1.2 3", next: "first_corridor_right", direction: "back" },
    ]
  },

  first_left_corridorR1: {
    name: "Left Corridor R1",
    image: ffleftcorridor1,
    hotspots: [
      { position: "0 1.5 -4", next: "first_left_corridorR2", direction: "front" },
      { position: "0 1.2 3", next: "first_corridor_right", direction: "back" },
    ]
  },

  first_left_corridorR2: {
    name: "Left Corridor R2",
    image: ffleftcorridor,
    hotspots: [
      { position: "0 1.2 3", next: "first_left_corridorR1", direction: "back" },
    ]
  },

  first_right_corridorR1: {
    name: "Right Corridor R1",
    image: ffrightcorridor1,
    hotspots: [
      { position: "0 1.5 -4", next: "first_labR1", direction: "front" },
      { position: "0 1.2 3", next: "first_corridor_right", direction: "back" },
    ]
  },

  first_labR1: {
    name: "Lab C-1-21",
    image: c108,
    hotspots: [
      { position: "0 1.5 -4", next: "first_HODCabinR", direction: "front" },
      { position: "0 1.2 3", next: "first_right_corridorR1", direction: "back" },
    ]
  },

  first_HODCabinR: {
    name: "HOD Cabin R",
    image: hodcabin,
    hotspots: [
      { position: "0 1.5 -4", next: "first_labR2", direction: "front" },
      { position: "0 1.2 3", next: "first_labR1", direction: "back" },
    ]
  },

  first_labR2: {
    name: "Lab C-1-22",
    image: c105,
    hotspots: [
      { position: "0 1.5 -4", next: "first_end_corridorR", direction: "front" },
      { position: "0 1.2 3", next: "first_HODCabinR", direction: "back" },
    ]
  },

  first_end_corridorR: {
    name: "End Corridor R",
    image: ffrightcorridor2,
    hotspots: [
      { position: "0 1.2 3", next: "first_labR2", direction: "back" },
    ]
  },



  // Stairs to Second Floor
  stairs_left_ff: {
    name: "Stairs to Second Floor",
    image: stairsLeftFF,
    hotspots: [
      { position: "0 1.5 -4", next: "second_corridor_main", direction: "front" },
      { position: "0 1.2 3", next: "first_class2", direction: "back" },
    ]
  },

  stairs_right_ff: {
    name: "Stairs to Second Floor",
    image: stairsRightFF,
    hotspots: [
      { position: "0 1.5 -4", next: "second_corridor_main", direction: "front" },
      { position: "0 1.2 3", next: "first_class2", direction: "back" },
    ]
  },

  // SECOND FLOOR - Library instead of straight
  second_corridor_main: {
    name: "Main Corridor",
    image: corridorMain,
    hotspots: [
      { position: "0 1.5 -4", next: "library", direction: "front" },
      { position: "-2 1.5 -4", next: "second_left_corridor", direction: "left" },
      { position: "2 1.5 -4", next: "second_right_corridor", direction: "right" },
      { position: "0 1.2 3", next: "stairs_left_ff", direction: "back" },
    ]
  },

  library: {
    name: "Library",
    image: libraryImg,
    hotspots: [
      { position: "-1 1.5 -4", next: "library2", direction: "left" },
      { position: "1 1.5 -4", next: "library3", direction: "right" },
      { position: "0 1.2 3", next: "second_corridor_main", direction: "back" },
    ]
  },

  library2: {
    name: "Library 2",
    image: libraryImg2,
    hotspots: [
      { position: "0 1.2 3", next: "library", direction: "back" },
    ]
  },

  library3: {
    name: "Library 3",
    image: libraryImg3,
    hotspots: [
      { position: "0 1.2 3", next: "library", direction: "back" },
    ]
  },

  second_left_corridor: {
    name: "Left Corridor",
    image: leftCorridor,
    hotspots: [
      { position: "0 1.5 -4", next: "second_left_corridor1", direction: "front" },
      { position: "0 1.2 3", next: "second_corridor_main", direction: "back" },
    ]
  },

  second_left_corridor1: {
    name: "Left Corridor 1",
    image: leftCorridor1,
    hotspots: [
      { position: "-1 1.5 -4", next: "second_class1", direction: "left" },
      { position: "1 1.5 -4", next: "second_class2", direction: "right" },
      { position: "0 1.2 3", next: "second_left_corridor", direction: "back" },
    ]
  },

  second_class1: {
    name: "Second Class 1",
    image: leftClass1,
    hotspots: [
      { position: "0 1.2 3", next: "second_left_corridor1", direction: "back" },
    ]
  },

  second_class2: {
    name: "Second Class 2",
    image: leftClass2,
    hotspots: [
      { position: "0 1.5 -4", next: "stairs_left_sf", direction: "front" },
      { position: "0 1.2 3", next: "second_left_corridor1", direction: "back" },
    ]
  },

  second_right_corridor: {
    name: "Right Corridor",
    image: rightCorridor,
    hotspots: [
      { position: "0 1.5 -4", next: "second_right_corridor1", direction: "front" },
      { position: "0 1.2 3", next: "second_corridor_main", direction: "back" },
    ]
  },

  second_right_corridor1: {
    name: "Right Corridor 1",
    image: rightCorridor1,
    hotspots: [
      { position: "-1 1.5 -4", next: "second_right_class1", direction: "left" },
      { position: "1 1.5 -4", next: "second_right_class2", direction: "right" },
      { position: "0 1.2 3", next: "second_right_corridor", direction: "back" },
    ]
  },

  second_right_class1: {
    name: "Right Class 1",
    image: rightClass1,
    hotspots: [
      { position: "0 1.2 3", next: "second_right_corridor1", direction: "back" },
    ]
  },

  second_right_class2: {
    name: "Right Class 2",
    image: rightClass2,
    hotspots: [
      { position: "0 1.5 -4", next: "stairs_right_sf", direction: "front" },
      { position: "0 1.2 3", next: "second_right_corridor1", direction: "back" },
    ]
  },

  // Stairs to Third Floor
  stairs_left_sf: {
    name: "Stairs to Third Floor",
    image: stairsLeftSF,
    hotspots: [
      { position: "0 1.5 -4", next: "third_corridor_main", direction: "front" },
      { position: "0 1.2 3", next: "second_class2", direction: "back" },
    ]
  },

  stairs_right_sf: {
    name: "Stairs to Third Floor",
    image: stairsRightSF,
    hotspots: [
      { position: "0 1.5 -4", next: "third_corridor_main", direction: "front" },
      { position: "0 1.2 3", next: "second_right_class2", direction: "back" },
    ]
  },

  // THIRD FLOOR - Auditorium instead of straight
  third_corridor_main: {
    name: "Main Corridor",
    image: corridorMain,
    hotspots: [
      { position: "0 1.5 -4", next: "auditorium", direction: "front" },
      { position: "-2 1.5 -4", next: "third_left_corridor", direction: "left" },
      { position: "2 1.5 -4", next: "third_right_corridor", direction: "right" },
      { position: "0 1.2 3", next: "stairs_left_sf", direction: "back" },
    ]
  },

  auditorium: {
    name: "Auditorium",
    image: corridorMain,
    hotspots: [
      { position: "0 1.2 3", next: "third_corridor_main", direction: "back" },
    ]
  },

  third_left_corridor: {
    name: "Left Corridor",
    image: leftCorridor,
    hotspots: [
      { position: "0 1.5 -4", next: "third_left_corridor1", direction: "front" },
      { position: "0 1.2 3", next: "third_corridor_main", direction: "back" },
    ]
  },

  third_left_corridor1: {
    name: "Left Corridor 1",
    image: leftCorridor1,
    hotspots: [
      { position: "-1 1.5 -4", next: "third_class1", direction: "left" },
      { position: "1 1.5 -4", next: "third_class2", direction: "right" },
      { position: "0 1.2 3", next: "third_left_corridor", direction: "back" },
    ]
  },

  third_class1: {
    name: "Third Class 1",
    image: leftClass1,
    hotspots: [
      { position: "0 1.2 3", next: "third_left_corridor1", direction: "back" },
    ]
  },

  third_class2: {
    name: "Third Class 2",
    image: leftClass2,
    hotspots: [
      { position: "0 1.2 3", next: "third_left_corridor1", direction: "back" },
    ]
  },

  third_right_corridor: {
    name: "Right Corridor",
    image: rightCorridor,
    hotspots: [
      { position: "0 1.5 -4", next: "third_right_corridor1", direction: "front" },
      { position: "0 1.2 3", next: "third_corridor_main", direction: "back" },
    ]
  },

  third_right_corridor1: {
    name: "Right Corridor 1",
    image: rightCorridor1,
    hotspots: [
      { position: "-1 1.5 -4", next: "third_right_class1", direction: "left" },
      { position: "1 1.5 -4", next: "third_right_class2", direction: "right" },
      { position: "0 1.2 3", next: "third_right_corridor", direction: "back" },
    ]
  },

  third_right_class1: {
    name: "Right Class 1",
    image: rightClass1,
    hotspots: [
      { position: "0 1.2 3", next: "third_right_corridor1", direction: "back" },
    ]
  },

  third_right_class2: {
    name: "Right Class 2",
    image: rightClass2,
    hotspots: [
      { position: "0 1.2 3", next: "third_right_corridor1", direction: "back" },
    ]
  },
};

export default scenes;