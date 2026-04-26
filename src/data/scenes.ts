import type { Scene } from "../types/scene";

export type Hotspot = {
  position: string;
  next: Scene;
  direction: "front" | "left" | "right" | "back";
};

import entrance1 from "../assets/entrance1.jpg";
import entrance2 from "../assets/entrance2.jpg";

import corridorMain from "../assets/ground_floor/main.jpg";
import straight from "../assets/ground_floor/straight.jpg";
import straightLeft from "../assets/ground_floor/straightleft.jpg";
import straightRight from "../assets/ground_floor/straightright.jpg";

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

import stairsLeftFF from "../assets/first_floor/stairs_left_ff.jpg";
import stairsRightFF from "../assets/first_floor/stairs_right_ff.jpg";

import stairsLeftSF from "../assets/second_floor/stairs_left_sf.jpg";
import stairsRightSF from "../assets/second_floor/stairs_right_sf.jpg";

import libraryImg from "../assets/common/library1.jpg";
import libraryImg2 from "../assets/common/library2.jpg";
import libraryImg3 from "../assets/common/library3.jpg";

// import auditoriumImg from "../assets/common/auditorium.jpg";
  
  
  const scenes: Partial<Record<Scene, { image: string; hotspots: Hotspot[] }>> = {
    // ENTRANCE
    entrance1: {
      image: entrance1,
      hotspots: [
        { position: "0 1.5 -4", next: "entrance2", direction: "front" },
      ]
    },

    entrance2: {
      image: entrance2,
      hotspots: [
        { position: "0 1.5 -4", next: "corridor_main", direction: "front" },
        { position: "0 1.2 3", next: "entrance1", direction: "back" },
      ]
    },

    // GROUND FLOOR - Main Corridor with straight, left, right
    corridor_main: {
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
      image: straight,
      hotspots: [
        { position: "-1 1.5 -4", next: "straight_left", direction: "left" },
        { position: "1 1.5 -4", next: "straight_right", direction: "right" },
        { position: "0 1.2 3", next: "corridor_main", direction: "back" },
      ]
    },

    straight_left: {
      image: straightLeft,
      hotspots: [
        { position: "0 1.2 3", next: "straight", direction: "back" },
      ]
    },

    straight_right: {
      image: straightRight,
      hotspots: [
        { position: "0 1.2 3", next: "straight", direction: "back" },
      ]
    },

    // Left corridor path
    left_corridor: {
      image: leftCorridor,
      hotspots: [
        { position: "0 1.5 -4", next: "left_corridor1", direction: "front" },
        { position: "0 1.2 3", next: "corridor_main", direction: "back" },
      ]
    },

    left_corridor1: {
      image: leftCorridor1,
      hotspots: [
        { position: "-1 1.5 -4", next: "left_class1", direction: "left" },
        { position: "1 1.5 -4", next: "left_class2", direction: "right" },
        { position: "0 1.2 3", next: "left_corridor", direction: "back" },
      ]
    },

    left_class1: {
      image: leftClass1,
      hotspots: [
        { position: "0 1.2 3", next: "left_corridor1", direction: "back" },
      ]
    },

    left_class2: {
      image: leftClass2,
      hotspots: [
        { position: "0 1.5 -4", next: "stairs_left_gf", direction: "front" },
        { position: "0 1.2 3", next: "left_corridor1", direction: "back" },
      ]
    },

    // Right corridor path
    right_corridor: {
      image: rightCorridor,
      hotspots: [
        { position: "0 1.5 -4", next: "right_corridor1", direction: "front" },
        { position: "0 1.2 3", next: "corridor_main", direction: "back" },
      ]
    },

    right_corridor1: {
      image: rightCorridor1,
      hotspots: [
        { position: "-1 1.5 -4", next: "right_class1", direction: "left" },
        { position: "1 1.5 -4", next: "right_class2", direction: "right" },
        { position: "0 1.2 3", next: "right_corridor", direction: "back" },
      ]
    },

    right_class1: {
      image: rightClass1,
      hotspots: [
        { position: "0 1.2 3", next: "right_corridor1", direction: "back" },
      ]
    },

    right_class2: {
      image: rightClass2,
      hotspots: [
        { position: "0 1.5 -4", next: "stairs_right_gf", direction: "front" },
        { position: "0 1.2 3", next: "right_corridor1", direction: "back" },
      ]
    },

    // Stairs to First Floor
    stairs_left_gf: {
      image: stairsLeftGF,
      hotspots: [
        { position: "0 1.5 -4", next: "first_corridor_main", direction: "front" },
        { position: "0 1.2 3", next: "left_class2", direction: "back" },
      ]
    },

    stairs_right_gf: {
      image: stairsRightGF,
      hotspots: [
        { position: "0 1.5 -4", next: "first_corridor_main", direction: "front" },
        { position: "0 1.2 3", next: "right_class2", direction: "back" },
      ]
    },

    // FIRST FLOOR - No straight, only left and right corridors
    first_corridor_main: {
      image: corridorMain,
      hotspots: [
        { position: "-2 1.5 -4", next: "first_left_corridor", direction: "left" },
        { position: "2 1.5 -4", next: "first_right_corridor", direction: "right" },
        { position: "0 1.2 3", next: "stairs_left_gf", direction: "back" },
      ]
    },

    first_left_corridor: {
      image: leftCorridor,
      hotspots: [
        { position: "0 1.5 -4", next: "first_left_corridor1", direction: "front" },
        { position: "0 1.2 3", next: "first_corridor_main", direction: "back" },
      ]
    },

    first_left_corridor1: {
      image: leftCorridor1,
      hotspots: [
        { position: "-1 1.5 -4", next: "first_class1", direction: "left" },
        { position: "1 1.5 -4", next: "first_class2", direction: "right" },
        { position: "0 1.2 3", next: "first_left_corridor", direction: "back" },
      ]
    },

    first_class1: {
      image: leftClass1,
      hotspots: [
        { position: "0 1.2 3", next: "first_left_corridor1", direction: "back" },
      ]
    },

    first_class2: {
      image: leftClass2,
      hotspots: [
        { position: "0 1.5 -4", next: "stairs_left_ff", direction: "front" },
        { position: "0 1.2 3", next: "first_left_corridor1", direction: "back" },
      ]
    },

    first_right_corridor: {
      image: rightCorridor,
      hotspots: [
        { position: "0 1.5 -4", next: "first_right_corridor1", direction: "front" },
        { position: "0 1.2 3", next: "first_corridor_main", direction: "back" },
      ]
    },

    first_right_corridor1: {
      image: rightCorridor1,
      hotspots: [
        { position: "-1 1.5 -4", next: "first_right_class1", direction: "left" },
        { position: "1 1.5 -4", next: "first_right_class2", direction: "right" },
        { position: "0 1.2 3", next: "first_right_corridor", direction: "back" },
      ]
    },

    first_right_class1: {
      image: rightClass1,
      hotspots: [
        { position: "0 1.2 3", next: "first_right_corridor1", direction: "back" },
      ]
    },

    first_right_class2: {
      image: rightClass2,
      hotspots: [
        { position: "0 1.5 -4", next: "stairs_right_ff", direction: "front" },
        { position: "0 1.2 3", next: "first_right_corridor1", direction: "back" },
      ]
    },

    // Stairs to Second Floor
    stairs_left_ff: {
      image: stairsLeftFF,
      hotspots: [
        { position: "0 1.5 -4", next: "second_corridor_main", direction: "front" },
        { position: "0 1.2 3", next: "first_class2", direction: "back" },
      ]
    },

    stairs_right_ff: {
      image: stairsRightFF,
      hotspots: [
        { position: "0 1.5 -4", next: "second_corridor_main", direction: "front" },
        { position: "0 1.2 3", next: "first_right_class2", direction: "back" },
      ]
    },

    // SECOND FLOOR - Library instead of straight
    second_corridor_main: {
      image: corridorMain,
      hotspots: [
        { position: "0 1.5 -4", next: "library", direction: "front" },
        { position: "-2 1.5 -4", next: "second_left_corridor", direction: "left" },
        { position: "2 1.5 -4", next: "second_right_corridor", direction: "right" },
        { position: "0 1.2 3", next: "stairs_left_ff", direction: "back" },
      ]
    },

    library: {
      image: libraryImg,
      hotspots: [
        { position: "-1 1.5 -4", next: "library2", direction: "left" },
        { position: "1 1.5 -4", next: "library3", direction: "right" },
        { position: "0 1.2 3", next: "second_corridor_main", direction: "back" },
      ]
    },

    library2: {
      image: libraryImg2,
      hotspots: [
        { position: "0 1.2 3", next: "library", direction: "back" },
      ]
    },

    library3: {
      image: libraryImg3,
      hotspots: [
        { position: "0 1.2 3", next: "library", direction: "back" },
      ]
    },

    second_left_corridor: {
      image: leftCorridor,
      hotspots: [
        { position: "0 1.5 -4", next: "second_left_corridor1", direction: "front" },
        { position: "0 1.2 3", next: "second_corridor_main", direction: "back" },
      ]
    },

    second_left_corridor1: {
      image: leftCorridor1,
      hotspots: [
        { position: "-1 1.5 -4", next: "second_class1", direction: "left" },
        { position: "1 1.5 -4", next: "second_class2", direction: "right" },
        { position: "0 1.2 3", next: "second_left_corridor", direction: "back" },
      ]
    },

    second_class1: {
      image: leftClass1,
      hotspots: [
        { position: "0 1.2 3", next: "second_left_corridor1", direction: "back" },
      ]
    },

    second_class2: {
      image: leftClass2,
      hotspots: [
        { position: "0 1.5 -4", next: "stairs_left_sf", direction: "front" },
        { position: "0 1.2 3", next: "second_left_corridor1", direction: "back" },
      ]
    },

    second_right_corridor: {
      image: rightCorridor,
      hotspots: [
        { position: "0 1.5 -4", next: "second_right_corridor1", direction: "front" },
        { position: "0 1.2 3", next: "second_corridor_main", direction: "back" },
      ]
    },

    second_right_corridor1: {
      image: rightCorridor1,
      hotspots: [
        { position: "-1 1.5 -4", next: "second_right_class1", direction: "left" },
        { position: "1 1.5 -4", next: "second_right_class2", direction: "right" },
        { position: "0 1.2 3", next: "second_right_corridor", direction: "back" },
      ]
    },

    second_right_class1: {
      image: rightClass1,
      hotspots: [
        { position: "0 1.2 3", next: "second_right_corridor1", direction: "back" },
      ]
    },

    second_right_class2: {
      image: rightClass2,
      hotspots: [
        { position: "0 1.5 -4", next: "stairs_right_sf", direction: "front" },
        { position: "0 1.2 3", next: "second_right_corridor1", direction: "back" },
      ]
    },

    // Stairs to Third Floor
    stairs_left_sf: {
      image: stairsLeftSF,
      hotspots: [
        { position: "0 1.5 -4", next: "third_corridor_main", direction: "front" },
        { position: "0 1.2 3", next: "second_class2", direction: "back" },
      ]
    },

    stairs_right_sf: {
      image: stairsRightSF,
      hotspots: [
        { position: "0 1.5 -4", next: "third_corridor_main", direction: "front" },
        { position: "0 1.2 3", next: "second_right_class2", direction: "back" },
      ]
    },

    // THIRD FLOOR - Auditorium instead of straight
    third_corridor_main: {
      image: corridorMain,
      hotspots: [
        { position: "0 1.5 -4", next: "auditorium", direction: "front" },
        { position: "-2 1.5 -4", next: "third_left_corridor", direction: "left" },
        { position: "2 1.5 -4", next: "third_right_corridor", direction: "right" },
        { position: "0 1.2 3", next: "stairs_left_sf", direction: "back" },
      ]
    },

    auditorium: {
      image: corridorMain,
      hotspots: [
        { position: "0 1.2 3", next: "third_corridor_main", direction: "back" },
      ]
    },

    third_left_corridor: {
      image: leftCorridor,
      hotspots: [
        { position: "0 1.5 -4", next: "third_left_corridor1", direction: "front" },
        { position: "0 1.2 3", next: "third_corridor_main", direction: "back" },
      ]
    },

    third_left_corridor1: {
      image: leftCorridor1,
      hotspots: [
        { position: "-1 1.5 -4", next: "third_class1", direction: "left" },
        { position: "1 1.5 -4", next: "third_class2", direction: "right" },
        { position: "0 1.2 3", next: "third_left_corridor", direction: "back" },
      ]
    },

    third_class1: {
      image: leftClass1,
      hotspots: [
        { position: "0 1.2 3", next: "third_left_corridor1", direction: "back" },
      ]
    },

    third_class2: {
      image: leftClass2,
      hotspots: [
        { position: "0 1.2 3", next: "third_left_corridor1", direction: "back" },
      ]
    },

    third_right_corridor: {
      image: rightCorridor,
      hotspots: [
        { position: "0 1.5 -4", next: "third_right_corridor1", direction: "front" },
        { position: "0 1.2 3", next: "third_corridor_main", direction: "back" },
      ]
    },

    third_right_corridor1: {
      image: rightCorridor1,
      hotspots: [
        { position: "-1 1.5 -4", next: "third_right_class1", direction: "left" },
        { position: "1 1.5 -4", next: "third_right_class2", direction: "right" },
        { position: "0 1.2 3", next: "third_right_corridor", direction: "back" },
      ]
    },

    third_right_class1: {
      image: rightClass1,
      hotspots: [
        { position: "0 1.2 3", next: "third_right_corridor1", direction: "back" },
      ]
    },

    third_right_class2: {
      image: rightClass2,
      hotspots: [
        { position: "0 1.2 3", next: "third_right_corridor1", direction: "back" },
      ]
    },
  };

export default scenes;