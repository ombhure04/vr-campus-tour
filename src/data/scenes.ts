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
import stairsLeftGF from "../assets/ground_floor/stairs_left_gf.jpg";
import stairsRightGF from "../assets/ground_floor/stairs_right_gf.jpg";

import ffleftcorridor from "../assets/first_floor/ffleftcorridor.jpg";
import c117 from "../assets/first_floor/c-1-17.jpg";
import c118 from "../assets/first_floor/c-1-18.jpg";
import ffrightcorridor1 from "../assets/first_floor/ffrightcorridor1.jpg";
import ffrightcorridor2 from "../assets/first_floor/ffrightcorridor2.jpg";
import ffleftcorridor1 from "../assets/first_floor/ffleftcorridor1.jpg";
import c108 from "../assets/first_floor/c-1-08.jpg";
import ff_lab_08_inside from "../assets/first_floor/ff_lab_08_inside.jpg";
import hodcabin from "../assets/first_floor/hodcabin.jpg";
import c105 from "../assets/first_floor/c-1-05.jpg";
import ff_lab_05_inside from "../assets/first_floor/ff_lab_05_inside.jpg";
import ffrightcorridor from "../assets/first_floor/ffrightcorridor.jpg";
import ffcorridorright from "../assets/first_floor/ffcorridorright.jpg";
import c119 from "../assets/first_floor/c-1-19.jpg";
import c120 from "../assets/first_floor/c-1-20.jpg";
import stairsLeftFF from "../assets/first_floor/stairs_left_ff.jpg";
import stairsRightFF from "../assets/first_floor/stairs_right_ff.jpg";

import sflcorridor from "../assets/second_floor/sflcorridor.jpg";
import C214 from "../assets/second_floor/c-2-14.jpg";
import C215 from "../assets/second_floor/c-2-15.jpg";
import sflcorridor1 from "../assets/second_floor/sflcorridor1.jpg";
import Lab201 from "../assets/second_floor/lab1entrance.jpg";
import Lab202 from "../assets/second_floor/lab2entrance.jpg";
import Lab203 from "../assets/second_floor/lab3entrance.jpg";
import Lab204 from "../assets/second_floor/lab4entrance.jpg";
import sfrcorridor from "../assets/second_floor/sfrcorridor.jpg";
import C20 from "../assets/second_floor/c-2-20.jpg";
import Lab209 from "../assets/second_floor/lab209.jpg";


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
      { position: "-4 1.5 0", next: "stairs_left_gf", direction: "front" },
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
      { position: "4 1.5 0", next: "stairs_right_gf", direction: "front" },
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
      { position: "0 1.2 3", next: "right_corridor1", direction: "back" },
    ]
  },

  // Stairs to First Floor
  stairs_left_gf: {
    name: "Stairs to First Floor",
    image: stairsLeftGF,
    hotspots: [
      { position: "0 1.5 -4", next: "ff_main_corridor", direction: "front" },
      { position: "0 1.2 3", next: "left_class2", direction: "back" },
    ]
  },

  stairs_right_gf: {
    name: "Stairs to First Floor",
    image: stairsRightGF,
    hotspots: [
      { position: "0 1.5 -4", next: "ff_right_block_main", direction: "front" },
      { position: "0 1.2 3", next: "right_class2", direction: "back" },
    ]
  },

  // FIRST FLOOR 

  ff_main_corridor: {
    name: "First Floor Corridor",
    keywords: ["ff left corridor"],
    image: ffleftcorridor,
    hotspots: [
      { position: "4 1.5 0", next: "stairs_right_ff", direction: "front" },
      { position: "0 1.5 -4", next: "ff_right_corridor_1", direction: "front" },
      { position: "2 1.5 -4", next: "ff_class_17", direction: "right" },
      { position: "-2 1.5 -4", next: "ff_class_18", direction: "left" },
      { position: "-3.5 1.5 -2", next: "ff_left_corridor_1", direction: "left" },
      { position: "0 1.2 3", next: "stairs_left_gf", direction: "back" },
    ]
  },

  ff_class_17: {
    name: "Class C-1-17",
    keywords: ["ff left class 1"],
    image: c117,
    hotspots: [
      { position: "0 1.2 3", next: "ff_main_corridor", direction: "back" },
    ]
  },

  ff_class_18: {
    name: "Class C-1-18",
    keywords: ["ff left class 2"],
    image: c118,
    hotspots: [
      { position: "0 1.2 3", next: "ff_main_corridor", direction: "back" },
    ]
  },

  ff_right_corridor_1: {
    name: "Right Corridor 1",
    keywords: ["ff left side right corridor"],
    image: ffrightcorridor1,
    hotspots: [
      { position: "-1 1.5 -4", next: "ff_right_corridor_2", direction: "front" },
      { position: "0 1.2 3", next: "ff_main_corridor", direction: "back" },
    ]
  },

  ff_right_corridor_2: {
    name: "Right Corridor 2",
    keywords: ["ff left side right corridor2"],
    image: ffrightcorridor2,
    hotspots: [
      { position: "0 1.2 3", next: "ff_right_corridor_1", direction: "back" },
    ]
  },

  ff_left_corridor_1: {
    name: "Left Corridor 1",
    keywords: ["ff left side left corridor1"],
    image: ffleftcorridor1,
    hotspots: [
      { position: "0 1.5 -4", next: "ff_lab_08", direction: "front" },
      { position: "0 1.2 3", next: "ff_main_corridor", direction: "back" },
    ]
  },

  ff_lab_08: {
    name: "Lab C-1-08",
    keywords: ["ff  lab 08"],
    image: c108,
    hotspots: [
      { position: "0 1.5 -4", next: "ff_hod_cabin", direction: "front" },
      { position: "3 1.5 -2", next: "ff_lab_08_inside", direction: "right" },
      { position: "0 1.2 3", next: "ff_left_corridor_1", direction: "back" },
    ]
  },

  ff_lab_08_inside: {
    name: "Lab  lab08 Inside",
    image: ff_lab_08_inside,
    hotspots: [
      // Wapas main lab
      { position: "0 1.2 3", next: "ff_lab_08", direction: "back" },
    ]
  },

  ff_hod_cabin: {
    name: "HOD Cabin",
    keywords: ["ff hodCabin"],
    image: hodcabin,
    hotspots: [
      { position: "0 1.5 -4", next: "ff_lab_21", direction: "front" },
      { position: "0 1.2 3", next: "ff_lab_08", direction: "back" },
    ]
  },

  ff_lab_05: {
    name: "Lab C-1-05",
    keywords: ["ff lab 05"],
    image: c105,
    hotspots: [
      { position: "0 1.2 3", next: "ff_hod_cabin", direction: "back" },
      { position: "3 1.5 -2", next: "ff_lab_05_inside", direction: "right" },
    ]
  },

  ff_lab_05_inside: {
    name: "Lab lab 05 Inside",
    image: ff_lab_05_inside,
    hotspots: [
      // Wapas main lab
      { position: "0 1.2 3", next: "ff_lab_05", direction: "back" },
    ]
  },

  ff_right_corridor_l1: {
    name: "Right Corridor",
    keywords: ["ff right corridor l1"],
    image: ffrightcorridor,
    hotspots: [
      { position: "0 1.2 3", next: "ff_lab_05", direction: "back" },
    ]
  },

  ff_right_block_main: {
    name: "Right Block Corridor",
    keywords: ["right block main"],
    image: ffcorridorright,
    hotspots: [
      { position: "4 1.5 0", next: "stairs_right_ff", direction: "front" },
      { position: "0 1.5 -4", next: "ff_class_19", direction: "front" },
      { position: "2 1.5 -4", next: "ff_class_20", direction: "right" },
      { position: "-2 1.5 -4", next: "ff_left_block_1", direction: "left" },
      { position: "3 1.5 -2", next: "ff_right_corridor_l1", direction: "right" },
      { position: "0 1.2 3", next: "stairs_right_gf", direction: "back" },
    ]
  },

  ff_class_19: {
    name: "Class C-1-19",
    keywords: ["ffC119"],
    image: c119,
    hotspots: [
      { position: "0 1.2 3", next: "ff_right_block_main", direction: "back" },
    ]
  },

  ff_class_20: {
    name: "Class C-1-20",
    keywords: ["ffC120"],
    image: c120,
    hotspots: [
      { position: "0 1.5 -4", next: "stairs_right_ff", direction: "front" },
      { position: "0 1.2 3", next: "ff_right_block_main", direction: "back" },
    ]
  },

  ff_left_block_1: {
    name: "Left Corridor (Right Block)",
    keywords: ["ffleft corridor1"],
    image: ffleftcorridor1,
    hotspots: [
      { position: "0 1.5 -4", next: "ff_left_block_2", direction: "front" },
      { position: "0 1.2 3", next: "ff_class_20", direction: "back" },
    ]
  },

  ff_left_block_2: {
    name: "Left Corridor End",
    keywords: ["ffleft corridor end"],
    image: ffleftcorridor,
    hotspots: [
      { position: "0 1.2 3", next: "ff_left_block_1", direction: "back" },
    ]
  },

  ff_right_corridor_r1: {
    name: "Right Corridor",
    keywords: ["ff right corridor r1"],
    image: ffrightcorridor1,
    hotspots: [
      { position: "0 1.5 -4", next: "ff_lab_21", direction: "front" },
      { position: "0 1.2 3", next: "ff_right_block_main", direction: "back" },
    ]
  },

  ff_lab_21: {
    name: "Lab C-1-21",
    keywords: ["ff lab 21"],
    image: c108,
    hotspots: [
      { position: "0 1.5 -4", next: "ff_hod_cabin_r", direction: "front" },
      { position: "3 1.5 -2", next: "ff_lab_21_inside", direction: "right" },
      { position: "0 1.2 3", next: "ff_right_corridor_r1", direction: "back" }, // FIX
    ]
  },

  ff_hod_cabin_r: {
    name: "HOD Cabin R",
    keywords: ["ff hodCabin R"],
    image: hodcabin,
    hotspots: [
      { position: "0 1.5 -4", next: "ff_lab_22", direction: "front" },
      { position: "0 1.2 3", next: "ff_lab_21", direction: "back" },
    ]
  },

  ff_lab_22: {
    name: "Lab C-1-22",
    keywords: ["ff lab 22"],
    image: c105,
    hotspots: [
      { position: "0 1.5 -4", next: "ff_end_corridor_r", direction: "front" },
      { position: "3 1.5 -2", next: "ff_lab_22_inside", direction: "right" },
      { position: "0 1.2 3", next: "ff_hod_cabin_r", direction: "back" },
    ]
  },

  ff_end_corridor_r: {
    name: "End Corridor",
    keywords: ["end corridor r"],
    image: ffrightcorridor2,
    hotspots: [
      { position: "0 1.2 3", next: "ff_lab_22", direction: "back" },
    ]
  },

  // Stairs to Second Floor
  stairs_left_ff: {
    name: "Stairs to Second Floor",
    image: stairsLeftFF,
    hotspots: [
      { position: "0 1.5 -4", next: "sflcorridor", direction: "front" },
      { position: "0 1.2 3", next: "ff_main_corridor", direction: "back" },
    ]
  },

  stairs_right_ff: {
    name: "Stairs to Second Floor",
    image: stairsRightFF,
    hotspots: [
      { position: "0 1.5 -4", next: "sfrcorridor", direction: "front" },
      { position: "0 1.2 3", next: "ff_right_block_main", direction: "back" },
    ]
  },


  // SECOND FLOOR
  // Left Side
  sflcorridor: {
    name: "Second Floor Left Corridor",
    keywords: ["second floor corridor"],
    image: sflcorridor,
    hotspots: [
      { position: "-2 1.5 -4", next: "c214", direction: "left" },
      { position: "2 1.5 -4", next: "c215", direction: "right" },
      { position: "0 1.5 -4", next: "sflcorridor1", direction: "front" },
      { position: "0 1.2 3", next: "stairs_left_ff", direction: "back" },
    ]
  },

  c214: {
    name: "c214",
    image: C214,
    hotspots: [
      { position: "0 1.2 3", next: "sflcorridor", direction: "back" },
    ]
  },

  c215: {
    name: "c215",
    image: C215,
    hotspots: [
      { position: "0 1.2 3", next: "sflcorridor", direction: "back" },
    ]
  },

  sflcorridor1: {
    name: "SFL Corridor 1",
    image: sflcorridor1,
    hotspots: [
      { position: "0 1.5 -4", next: "lab1", direction: "front" },
      { position: "0 1.2 3", next: "sflcorridor", direction: "back" },
    ]
  },

  lab1: {
    name: "Lab 1",
    image: Lab201,
    hotspots: [
      { position: "0 1.5 -4", next: "lab2", direction: "front" },
      { position: "0 1.2 3", next: "sflcorridor1", direction: "back" },
    ]
  },

  lab2: {
    name: "Lab 2",
    image: Lab202,
    hotspots: [
      { position: "0 1.5 -4", next: "lab3", direction: "front" },
      { position: "0 1.2 3", next: "lab1", direction: "back" },
    ]
  },

  lab3: {
    name: "Lab 3",
    image: Lab203,
    hotspots: [
      { position: "0 1.5 -4", next: "lab4", direction: "front" },
      { position: "0 1.2 3", next: "lab2", direction: "back" },
    ]
  },

  lab4: {
    name: "Lab 4",
    image: Lab204,
    hotspots: [
      { position: "0 1.5 -4", next: "sfrcorridor", direction: "front" },
      { position: "0 1.2 3", next: "lab3", direction: "back" },
    ]
  },

  sfrcorridor: {
    name: "Second Floor Right Corridor",
    image: sfrcorridor,
    hotspots: [
      { position: "-2 1.5 -4", next: "lab209", direction: "left" },
      { position: "2 1.5 -4", next: "class20", direction: "right" },
      { position: "0 1.2 3", next: "lab4", direction: "back" },
    ]
  },

  lab209: {
    name: "Lab 209",
    image: Lab209,
    hotspots: [
      { position: "0 1.2 3", next: "sfrcorridor", direction: "back" },
    ]
  },

  class20: {
    name: "Class 20",
    image: C20,
    hotspots: [
      { position: "0 1.2 3", next: "sfrcorridor", direction: "back" },
    ]
  },

  // Right Side

  sfrightcorridor: {
    name: "Second Floor Right Corridor",
    image: sfrcorridor,
    hotspots: [
      { position: "-2 1.5 -4", next: "lab209", direction: "right" },
      { position: "2 1.5 -4", next: "class20", direction: "left" },
      { position: "0 1.5 -4", next: "lab4", direction: "front" },
      { position: "0 1.2 3", next: "stairs_right_ff", direction: "back" },
    ]
  },

  rlab209: {
    name: "Lab 209",
    image: Lab209,
    hotspots: [
      { position: "0 1.2 3", next: "sfrightcorridor", direction: "back" },
    ]
  },

  rclass20: {
    name: "Class 20",
    image: C20,
    hotspots: [
      { position: "0 1.2 3", next: "sfrightcorridor", direction: "back" },
    ]
  },

  rlab4: {
    name: "Lab 4",
    image: Lab204,
    hotspots: [
      { position: "0 1.5 -4", next: "rlab3", direction: "front" },
      { position: "0 1.2 3", next: "sfrcorridor", direction: "back" },
    ]
  },

  rlab3: {
    name: "Lab 3",
    image: Lab203,
    hotspots: [
      { position: "0 1.5 -4", next: "rlab2", direction: "front" },
      { position: "0 1.2 3", next: "rlab4", direction: "back" },
    ]
  },

  rlab2: {
    name: "Lab 2",
    image: Lab202,
    hotspots: [
      { position: "0 1.5 -4", next: "rlab1", direction: "front" },
      { position: "0 1.2 3", next: "rlab3", direction: "back" },
    ]
  },

  rlab1: {
    name: "Lab 1",
    image: Lab201,
    hotspots: [
      { position: "0 1.5 -4", next: "rsflcorridor1", direction: "front" },
      { position: "0 1.2 3", next: "rlab2", direction: "back" },
    ]
  },

  rsflcorridor1: {
    name: "SFL Corridor 1",
    image: sflcorridor1,
    hotspots: [
      { position: "0 1.5 -4", next: "rsflcorridor", direction: "front" },
      { position: "0 1.2 3", next: "rlab1", direction: "back" },
    ]
  },

  rsflcorridor: {
    name: "Second Floor Left Corridor",
    keywords: ["second floor corridor"],
    image: sflcorridor,
    hotspots: [
      { position: "-2 1.5 -4", next: "c214", direction: "left" },
      { position: "2 1.5 -4", next: "c215", direction: "right" },
      { position: "0 1.2 3", next: "rsflcorridor1", direction: "back" },
    ]
  },
};

export default scenes;