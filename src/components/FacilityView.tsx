import { useState, useEffect } from "react";
import { Facility } from "../types";
import NavigationControls from "./NavigationControls";

import "aframe";
import "aframe-look-at-component";

import cafe1 from "../assets/facilities/cafe1.jpg";
import cafe2 from "../assets/facilities/cafe2.jpg";
import cafe3 from "../assets/facilities/cafe3.jpg";
import cafe4 from "../assets/facilities/cafe4.jpg";

import library1 from "../assets/facilities/library1.jpg";
import library2 from "../assets/facilities/library2.jpg";
import library3 from "../assets/facilities/library3.jpg";

import lab1 from "../assets/facilities/lab1.jpg";
import lab2 from "../assets/facilities/lab2.jpg";

const cafeImages = [cafe1, cafe2, cafe3, cafe4];
const libraryImages = [library1, library2, library3];
const labImages = [lab1, lab2];

const facilityImagesMap: Record<string, string[]> = {
  cafe: cafeImages,
  cafeteria: cafeImages,
  library: libraryImages,
  lab: labImages,
  computer: labImages,
};

interface FacilityViewProps {
  facility: Facility;
  onBack: () => void;
}

export default function FacilityView({ facility, onBack }: FacilityViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserActive, setIsUserActive] = useState(false);

  const facilityKey = Object.keys(facilityImagesMap).find(key =>
    facility.name.toLowerCase().includes(key)
  );

  const images = facilityKey ? facilityImagesMap[facilityKey] : [];

  // 🔥 IoT DATA
  const [iotData, setIotData] = useState({
    temperature: 30,
    occupancy: "Medium",
    noise: "Low",
  });

  const iotDataMap: Record<string, any> = {
  [cafe1]: { temperature: 32, occupancy: "Low", noise: "Low" },
  [cafe2]: { temperature: 30, occupancy: "Medium", noise: "Low" },
  [cafe3]: { temperature: 35, occupancy: "High", noise: "High" },
  [cafe4]: { temperature: 29, occupancy: "Low", noise: "Low" },

  [library1]: { temperature: 26, occupancy: "Low", noise: "Low" },
  [library2]: { temperature: 27, occupancy: "Medium", noise: "Low" },
  [library3]: { temperature: 25, occupancy: "Low", noise: "Silent" },

  [lab1]: { temperature: 24, occupancy: "Medium", noise: "Low" },
  [lab2]: { temperature: 26, occupancy: "High", noise: "Medium" },
  };

  const getPrediction = () => {
    if (iotData.occupancy === "High") return "Peak Time";
    if (iotData.occupancy === "Medium") return "Getting Busy";
    return "Less Crowded";
  };

  useEffect(() => {
  if (images.length === 0) return;

  const currentImage = images[currentIndex];
  const data = iotDataMap[currentImage];

  if (data) {
    setIotData(data);
  }
}, [currentIndex, images]);

  useEffect(() => {
    if (images.length === 0 || isUserActive) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images, isUserActive]);

  useEffect(() => {
    const handleUser = () => setIsUserActive(true);

    window.addEventListener("mousemove", handleUser);
    window.addEventListener("touchstart", handleUser);

    return () => {
      window.removeEventListener("mousemove", handleUser);
      window.removeEventListener("touchstart", handleUser);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black">

      {/* ✅ TOP NAV WITH 3 DOT MENU */}
      <NavigationControls
        currentLocation={facility.name}
        onBack={onBack}
        onHome={onBack}

        infoContent={
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Live Data</h3>

            <div className="flex justify-between">
              <span>🌡 Temperature</span>
              <span>{iotData.temperature}°C</span>
            </div>

            <div className="flex justify-between">
              <span>👥 Crowd</span>
              <span>{iotData.occupancy}</span>
            </div>

            <div className="flex justify-between">
              <span>🔊 Noise</span>
              <span>{iotData.noise}</span>
            </div>

            <div className="flex justify-between text-cyan-400 font-semibold">
              <span>AI Prediction</span>
              <span>{getPrediction()}</span>
            </div>
          </div>
        }
      />

      <div className="h-screen">
        {images.length > 0 ? (
          <a-scene
            embedded
            cursor="rayOrigin: mouse"
            raycaster="objects: .clickable"
            style={{ height: "100vh", width: "100%" }}
          >

            {/* 🌐 SKY */}
            <a-sky src={images[currentIndex]} rotation="0 -90 0" />

            {/* 🎥 CAMERA */}
            <a-camera position="0 1.6 0">
              <a-cursor fuse="true" fuse-timeout="1000" />
            </a-camera>

            {/* 🎯 IMAGE SELECT (CLEAN DOTS) */}
            {images.map((_, i) => (
              <a-circle
                key={i}
                position={`${i * 0.6 - (images.length - 1 )* 0.3} 1.2 -3`}
                radius="0.1"
                color={i === currentIndex ? "#00ffff" : "#ffffff"}
                class="clickable"
                look-at="[camera]"
                onClick={() => {
                  setIsUserActive(true);
                  setCurrentIndex(i);
                }}
              />
            ))}

            {/* ⏮ PREV
            <a-triangle
              position="-1.5 1.2 -3"
              color="#ffffff"
              class="clickable"
              look-at="[camera]"
              rotation="0 0 180"
              onClick={() => {
                setIsUserActive(true);
                setCurrentIndex(prev =>
                  prev === 0 ? images.length - 1 : prev - 1
                );
              }}
            /> */}

            {/* ⏭ NEXT
            <a-triangle
              position="1.5 1.2 -3"
              color="#ffffff"
              class="clickable"
              look-at="[camera]"
              onClick={() => {
                setIsUserActive(true);
                setCurrentIndex(prev => (prev + 1) % images.length);
              }}
            /> */}

          </a-scene>
        ) : (
          <div className="w-full h-full bg-slate-800 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-2xl font-bold mb-2">{facility.name}</h2>
              <p className="text-slate-400">{facility.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}