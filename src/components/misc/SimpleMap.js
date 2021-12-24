
  import React, { Component } from 'react'
  import { Map, GoogleApiWrapper, Polygon, Marker  } from 'google-maps-react';
  
  class SimpleMap extends Component {
      constructor(props) {
          super(props)
      
          this.state = {
              mapStyles: {
                  width: '100%',
                  height: '100%'
                }
          }
      }
  
      render() {
            //   Used this tool to print the polygon overlay https://jsfiddle.net/gpkh17ma/3/
          const overlayArea = 
          [
              {lat:33.47594115618914,lng:-117.71314889022361},
              {lat:33.80749427145464,lng:-117.07868844100486},
              {lat:33.830312899006394,lng:-116.86445504256736},
              {lat:33.63387392101067,lng:-116.71888619491111},
              {lat:33.274101288924435,lng:-116.75184517928611},
              {lat:33.02574967357891,lng:-117.28742867537986},
          ]
          
          return (
              <div style={{ position: 'relative', width: '100%', height: '40vh' }}>
                  <Map
                      google={this.props.google}
                      zoom={9}
                      style={this.state.mapStyles}
                      initialCenter={{ lat: 33.487007, lng: -117.143784}}
                      clickableIcons={true}
                      >
                          <Polygon
                              paths={overlayArea}
                              strokeColor="#D3321D"
                              strokeOpacity={0.8}
                              strokeWeight={2}
                              fillColor="#EA9D92"
                              fillOpacity={0.35} />
                               <Marker
                                  onClick={this.onMouseoverMarker}
                                  label={{
                                      text:`HQ`,
                                      fontWeight:'', 
                                      fontSize:'12px', 
                                      color:'#FFFFFF'
                                  }}
                                  title={`Active Power Solutions' Headquarters`}
                                  name={'HQ'}
                                  position={{lat: 33.487007, lng: -117.143784}} />
                  </Map>
              </div>
          )
      }
  }
  
  export default GoogleApiWrapper({
      apiKey: process.env.REACT_APP_FIREBASE_LIVE_API_KEY
    })(SimpleMap);
  