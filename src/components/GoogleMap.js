import React from 'react';
import { GoogleMapLoader, GoogleMap  } from 'react-google-maps';

export default props =>{
    return(
        <div>
        <GoogleMapLoader
           googleMapElement={
            <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat, lng: props.lon }} />
           }
         />
         </div>
    );
}