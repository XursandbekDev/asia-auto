"use client"
import React from 'react'
import { APIProvider, Map, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps'

export default function GoogleMaps() {
    const position = { lat: 53.54, lng: 10 }
    return (

        <APIProvider apiKey="process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY" >
            <div style={{ height: "100vh", width: "100%" }} >


                google maps
            </div>
        </APIProvider>
    )
}