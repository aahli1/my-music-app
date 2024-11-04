// src/app/google-maps/page.tsx

"use client";

import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

const GoogleMapComponent = () => {
  // Load Google Maps script
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  // Set initial center position
  const center = useMemo(
    () => ({ lat: 24.8607, lng: 67.0011 }), // Coordinates
    []
  );

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      center={center}
      zoom={12}
      mapContainerStyle={{ width: "100%", height: "500px" }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default function GoogleMapPage() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <h1>Google Maps Integration</h1>
      <GoogleMapComponent />
    </div>
  );
}
