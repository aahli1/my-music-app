// src/app/google-maps/page.tsx

"use client";
import { useState, useRef } from "react";
import { GoogleMap, LoadScript, Autocomplete } from "@react-google-maps/api";

const libraries = ["places"];

export default function GoogleMapsPage() {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [center, setCenter] = useState({ lat: 24.873202, lng: 67.020590 }); // Default center location 
  const [zoom, setZoom] = useState(12);
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

  const handleLoad = (map: google.maps.Map) => {
    mapRef.current = map;
  };

  const onLoadAutocomplete = (autoCompleteInstance: google.maps.places.Autocomplete) => {
    setAutocomplete(autoCompleteInstance);
  };

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        setCenter({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
        setZoom(14); // Zoom in on selected place
      }
    }
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAD6iSlcIV2pRo528kwU-fKMG6OjwuV9Uc" libraries={libraries}>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMap
          mapContainerStyle={{ height: "100%", width: "100%" }}
          center={center}
          zoom={zoom}
          onLoad={handleLoad}
        >
          <Autocomplete onLoad={onLoadAutocomplete} onPlaceChanged={onPlaceChanged}>
            <input
              type="text"
              placeholder="Search a location"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "50%",
                marginLeft: "-120px",
                top: "10px",
              }}
            />
          </Autocomplete>
        </GoogleMap>
      </div>
    </LoadScript>
  );
}
