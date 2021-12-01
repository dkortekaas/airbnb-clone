import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getDistance from 'geolib/es/getDistance';
import { getCenter } from 'geolib';

function Map({ searchResults }) {

    const [selectedLocation, setSelectedLocation] = useState({});

    // Transform the search results object into the { latitude: 12.12345, longitude: 12.12345 } object
    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    const center = getCenter(coordinates);

    const [viewport, setViewPort] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 8
    });

    return <ReactMapGL
                mapStyle = "mapbox://styles/dkortekaas/ckwnvu7cg7ilq14p4w6cv4jx9"
                mapboxApiAccessToken = {process.env.mapbox_key}
                {...viewport}
                onViewportChange = {(nextViewPort) => setViewPort(nextViewPort)}
            >
                {searchResults.map((result) => (
                    <div key={result.long}>
                        <Marker
                            latitude={result.lat}
                            longitude={result.long}
                            offsetLeft={-20}
                            offsetTop={-10}
                        >
                            <p 
                                role="img"
                                onClick={ () => setSelectedLocation(result) }
                                className="cursor-pointer text-2xl animate-bounce"
                                aria-label="push-pin"
                                >
                            📍
                            </p>
                            </Marker>

                            {/* The Popup that shows when you click on a Marker */}
                            {selectedLocation.long === result.long ? (
                                <Popup
                                    onClose={() => setSelectedLocation({})}
                                    closeOnClick={true}
                                    latitude={result.lat}
                                    longitude={result.long}
                                    >
                                    { result.title }
                                </Popup>
                            ):(
                                false
                            )};
                    </div>
                ))}
            </ReactMapGL>
}

export default Map
