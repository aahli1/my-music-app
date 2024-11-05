// src/app/google-maps/page.tsx

"use client";
import { useState, useRef, useEffect } from "react";
import { GoogleMap, LoadScript, Autocomplete, Marker, InfoWindow } from "@react-google-maps/api";

const libraries = ["places"];

export default function GoogleMapsPage() {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [center, setCenter] = useState({ lat: 37.7749, lng: -122.4194 }); // Default center location
  const [zoom, setZoom] = useState(12);
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [evStations, setEvStations] = useState<google.maps.places.PlaceResult[]>([]);
  const [selectedStation, setSelectedStation] = useState<google.maps.places.PlaceResult | null>(null);

  const handleLoad = (map: google.maps.Map) => {
    mapRef.current = map;
    fetchEvStations(center); // Load EV stations when map loads
  };

  const fetchEvStations = (location: { lat: number; lng: number }) => {
    if (mapRef.current) {
      const service = new google.maps.places.PlacesService(mapRef.current);
      const request = {
        location: new google.maps.LatLng(location.lat, location.lng),
        radius: 5000, // Search within a 5 km radius
        type: "charging_station", // Places API type for EV charging stations
      };

      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          setEvStations(results);
        }
      });
    }
  };

  const onLoadAutocomplete = (autoCompleteInstance: google.maps.places.Autocomplete) => {
    setAutocomplete(autoCompleteInstance);
  };

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        const newLocation = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        setCenter(newLocation);
        setZoom(14); // Zoom in on selected place
        fetchEvStations(newLocation); // Fetch EV stations for new location
      }
    }
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAD6iSlcIV2pRo528kwU-fKMG6OjwuV9Uc" libraries={libraries}>
      <div style={{ display: "flex", height: "80vh", width: "100%" }}>
        {/* Map Container */}
        <div style={{ height: "100%", width: "70%" }}>
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

            {/* Markers for EV Stations */}
            {evStations.map((station, index) => (
              station.geometry && station.geometry.location && (
                <Marker
                  key={index}
                  position={{
                    lat: station.geometry.location.lat(),
                    lng: station.geometry.location.lng(),
                  }}
                  title={station.name}
                  icon={{
                    url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png", // Custom icon for EV stations
                    scaledSize: new google.maps.Size(40, 40),
                  }}
                  onClick={() => setSelectedStation(station)} // Set selected station on click
                />
              )
            ))}

            {/* InfoWindow for selected EV Station */}
            {selectedStation && selectedStation.geometry && selectedStation.geometry.location && (
              <InfoWindow
                position={{
                  lat: selectedStation.geometry.location.lat(),
                  lng: selectedStation.geometry.location.lng(),
                }}
                onCloseClick={() => setSelectedStation(null)}
              >
                <div>
                  <h4>{selectedStation.name}</h4>
                  <p>{selectedStation.vicinity}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>

        {/* Coordinates and EV Station List Display */}
        <div
          style={{
            width: "30%",
            padding: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
          }}
        >
          <h3>Coordinates</h3>
          <p>Latitude: {center.lat.toFixed(4)}</p>
          <p>Longitude: {center.lng.toFixed(4)}</p>
          
          <h3>Nearby EV Charging Stations</h3>
          <ul>
            {evStations.map((station, index) => (
              <li key={index}>{station.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </LoadScript>
  );
}
