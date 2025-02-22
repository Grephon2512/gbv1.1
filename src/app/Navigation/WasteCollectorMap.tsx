"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icon issue
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

// Dynamically import React Leaflet components to prevent SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

interface Collector {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export default function WasteCollectorMap() {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );
  const [collectors, setCollectors] = useState<Collector[]>([]);

  useEffect(() => {
    // Dummy data: Replace with an API call to fetch real collectors
    setCollectors([
      { id: 1, name: "Collector A", latitude: 28.6448, longitude: 77.216721 },
      { id: 2, name: "Collector B", latitude: 28.5355, longitude: 77.391 },
    ]);

    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([
            position.coords.latitude,
            position.coords.longitude,
          ]);
        },
        (error) => console.error("Error fetching location:", error)
      );
    }
  }, []);

  return (
    <div className="w-full h-[500px] relative">
      {userLocation && (
        <MapContainer
          center={userLocation}
          zoom={12}
          className="w-full h-full rounded-lg shadow-lg"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* User Location Marker */}
          <Marker position={userLocation}>
            <Popup>Your Location</Popup>
          </Marker>

          {/* Waste Collectors Markers */}
          {collectors.map((collector) => (
            <Marker
              key={collector.id}
              position={[collector.latitude, collector.longitude]}
            >
              <Popup>{collector.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
}
