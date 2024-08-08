"use client"
import React, { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

export default function GoogleMap() {
    const position = { lat: 41.24293169377301, lng: 69.21427879984365 };
    const [open, setOpen] = useState(false);

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
    const mapId = process.env.NEXT_PUBLIC_MAP_ID || '';

    if (!apiKey || !mapId) {
        console.error('Google Maps API kaliti yoki xarita ID si mavjud emas!');
        return <div>Xato: Google Maps API kaliti yoki xarita ID si kiritilmagan.</div>;
    }

    return (
        <APIProvider apiKey={apiKey}>
            <div className='absolute top-0' style={{ height: "100vh", width: "100%" }}>
                <Map zoom={12} center={position} mapId={mapId}>
                    <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                        <Pin
                            background={"gray"}
                            borderColor={"green"}
                            glyphColor={"purple"}
                        />
                    </AdvancedMarker>
                </Map>
            </div>
        </APIProvider>
    );
}

