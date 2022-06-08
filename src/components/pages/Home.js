import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet-async';
import { HashLink } from 'react-router-hash-link';
import ContactForm from '../misc/ContactForm';

export default class Home extends Component {
    render() {
        return (
            <>
            <div>
                <Helmet>
                    <title>Home | Active Power Solutions</title>
                </Helmet>
                <div className="hero-container">
                    <div className="hero-content">
                        <h1 className="no-margin">Keep your life powered</h1>
                        <p className='xl-text'>Electrical Contractors Servicing Temecula Valley, California and surrounding areas.</p>
                        <HashLink to="/#Contact">
                            <button 
                                type="button"
                                className="lg-orange-red-btn">
                                    Contact Us
                            </button>
                        </HashLink>
                    </div>
                </div>
            </div>
            <div className="slant-block bg-orange-red edge--both">
                <div className="wrapper white">
                    <h1 className="white no-margin">What do we offer?</h1>
                    <p>
                        Whether you need a whole house rewire or just a light switch replaced, you can trust Active Power Solutions for great services at honest prices.
                    </p>
                    <Grid fluid>
                        <Row center="xs" className="sm-margin">
                            <Col xs={12} sm={3}>
                                <i className="fas fa-bolt xl-icon yellow md-margin" />
                                <h3>Electrical panel upgrades</h3>
                                <p>Whether you need a panel upgrade or replacing that old electrical panel we have you covered</p>
                            </Col>
                            <Col xs={12} sm={3}>
                                <i className="fas fa-car xl-icon green md-margin" />
                                <h3>Electric car chargers </h3>
                                <p>Need to add an electrical outlet for that new car? Our technicians are familiar with all makes and models of electric vehicles.</p>
                            </Col>
                            <Col xs={12} sm={3}>
                                <i className="fas fa-lightbulb xl-icon yellow md-margin" />
                                <h3>LED lighting</h3>
                                <p>We specialize in both indoor and outdoor LED lighting.</p>
                            </Col>
                            <Col xs={12} sm={3}>
                                <i className="fas fa-plug xl-icon blue md-margin" />
                                <h3>Electrical Troubleshooting</h3>
                                <p>You can trust us to address and fix your electrical problems quickly and safely.</p>
                            </Col>
                        </Row>
                    </Grid>
                    <br/>
                    <h3 style={{textAlign: "center"}}>
                        Call us for a free quote today! You can trust our technicians for quality work.<br/> Licensed and bonded. CSLB: 1081847
                    </h3>
                   
                </div>
            </div>
            <div className="wrapper">
                <h1><a id="Contact" className="anchor" href="/#">Contact</a>Contact</h1>
                <ContactForm />
            </div>
            </>
        )
    }
}
