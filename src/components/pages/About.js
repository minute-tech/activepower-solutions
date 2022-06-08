import React, { Component } from 'react'
import { Helmet } from 'react-helmet-async';
import SimpleMap from '../misc/SimpleMap';
export default class About extends Component {

    render() {
        return (
            <>
                <div className="wrapper">
                    <Helmet>
                        <title>About | Active Power Solutions</title>
                    </Helmet>
                    <h1>About</h1>
                    <p>
                        Servicing Temecula Valley, California and surrounding areas.
                    </p>

                    <p>
                        Active power solutions in a full service electrical company that provides great electrical services for residential and commercial. There is no job too small or large that our team can't do. 
                        We make it a priority to stay up to date with the always changing electrical codes. We provide 24/7 emergency service. 
                    </p>
                    
                    <h3 style={{textAlign: "center"}}>
                        Call us for a free quote today! You can trust our technicians for quality work.<br/> Licensed and bonded. CSLB: 1081847
                    </h3>
                </div>
                
                <SimpleMap />
            </>
        )
    }
}
