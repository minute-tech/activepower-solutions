import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import logo from "../../assets/images/logos/logo512.png"
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
                        Mollit ipsum ex mollit incididunt esse ad magna deserunt est aliquip et commodo sint magna. Voluptate do est eiusmod nulla esse exercitation in voluptate dolore elit. 
                        Consectetur magna velit tempor adipisicing cupidatat laborum Lorem veniam duis excepteur ut sint id.
                    </p>
                    <p>
                        Lorem incididunt ipsum eiusmod elit in consequat commodo minim reprehenderit nulla occaecat. 
                        Aliqua commodo enim deserunt elit eu. Sint ipsum aute dolor aliqua proident irure sint dolor adipisicing commodo pariatur amet. 
                        Excepteur nisi laboris sit pariatur aliqua non laborum magna. Sint velit officia ipsum enim id irure cillum. Laborum culpa ad veniam non incididunt. 
                        Laborum esse laboris nulla ea est officia quis sit dolore aliqua ipsum sint exercitation.
                        
                    </p>
                </div>
                
                <SimpleMap />
            </>
        )
    }
}
