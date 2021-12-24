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
                       Amet tempor deserunt eu aliquip consequat aliquip fugiat exercitation. Ullamco proident quis irure laborum occaecat ad. Do tempor culpa officia occaecat incididunt officia ad ipsum dolore deserunt.
                    </p>
                    <Grid fluid>
                        <Row center="xs">
                            <Col xs={12} sm={3}>
                                <i className="fas fa-bolt xl-icon yellow" />
                                <h3>Yellow Column</h3>
                                <p>More information below</p>
                            </Col>
                            <Col xs={12} sm={3}>
                                <i className="fas fa-car-battery xl-icon orange" />
                                <h3>Orange Column</h3>
                                <p>More information below</p>
                            </Col>
                            <Col xs={12} sm={3}>
                                <i className="fas fa-plug xl-icon blue" />
                                <h3>Red Column</h3>
                                <p>More information below</p>
                            </Col>
                            <Col xs={12} sm={3}>
                                <i className="fas fa-seedling xl-icon green" />
                                <h3>Green Column</h3>
                                <p>More information below</p>
                            </Col>
                        </Row>
                    </Grid>
                    <p>
                        Ut eu ipsum ipsum et occaecat aliqua nostrud ex est minim. 
                        Cupidatat ipsum ex voluptate ea eu aliqua enim eiusmod duis et veniam. Cupidatat nisi adipisicing velit ad 
                        minim adipisicing cillum do excepteur excepteur laborum sit ea. Aliquip amet tempor velit anim voluptate eu. Culpa quis laborum laboris est cupidatat. 
                        In cillum ipsum commodo laboris ex ad aute. Aute elit incididunt excepteur irure esse aliquip nisi amet ex quis.
                        Ut eu ipsum ipsum et occaecat aliqua nostrud ex est minim. 
                        Cupidatat ipsum ex voluptate ea eu aliqua enim eiusmod duis et veniam. Cupidatat nisi adipisicing velit ad 
                        minim adipisicing cillum do excepteur excepteur laborum sit ea.
                    </p>
                    <p>
                        Ut eu ipsum ipsum et occaecat aliqua nostrud ex est minim. 
                        Cupidatat ipsum ex voluptate ea eu aliqua enim eiusmod duis et veniam. Cupidatat nisi adipisicing velit ad 
                        minim adipisicing cillum do excepteur Aute elit incididunt excepteur irure esse aliquip nisi amet ex quis.
                    </p>
                    <p>
                        Ut eu ipsum ipsum et occaecat aliqua nostrud ex est minim. 
                        Cupidatat ipsum ex voluptate ea eu aliqua enim eiusmod duis et veniam. Cupidatat nisi adipisicing velit ad 
                        minim adipisicing cillum do excepteur excepteur laborum sit ea.
                        Ut eu ipsum ipsum et occaecat aliqua nostrud ex est minim. 
                        Cupidatat ipsum Cupidatat ipsum ex voluptate ea eu aliqua enim eiusmod duis et veniam. Cupidatat nisi adipisicing velit ad 
                        minim adipisicing cillum do excepteur excepteur laborum sit ea.
                        Ut eu ipsum ipsum et occaecat aliqua nostrud ex est minim. 
                    </p>
                    <p>
                        Ut eu ipsum ipsum et occaecat aliqua nostrud ex est minim. 
                        Cupidatat ipsum ex voluptate ea eu aliqua enim eiusmod duis et veniam. Cupidatat nisi adipisicing velit ad 
                        minim adipisicing cillum do excepteur excepteur laborum sit ea. Aliquip amet tempor velit anim voluptate eu. Culpa quis laborum laboris est cupidatat. 
                        In cillum ipsum commodo laboris ex ad aute. Aute elit incididunt excepteur irure esse aliquip nisi amet ex quis.
                    </p>
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
