import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = { 
          year: new Date().getFullYear(),
          deviceWidth: 0,
          deviceHeight: 0
        };
    }
      
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions = () => {
        this.setState({ deviceWidth: window.innerWidth, deviceHeight: window.innerHeight });
    }

    render() {
        return (
            <footer>
                <div className={this.state.deviceWidth >= 900 ? "f-container" : "hide"}>
                    <div className="left">
                        &nbsp;&nbsp;<Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-conditions">Terms &amp; Conditions</Link> | <Link to="/credits">Credits</Link>&nbsp;&nbsp;
                    </div>

                    <div className="center">
                        &copy;
                        {' '}
                        {this.state.year}
                        {' '}
                        Active Power Solutions
                    </div>

                    <div className="right">
                        <a href="https://www.douglasrcjames.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-tools"/> by douglasrcjames</a> 
                        &nbsp;&nbsp;
                    </div>
                </div>
                <div className={this.state.deviceWidth < 900 ? "f-container" : "hide"}>
                    <div>
                        &copy;
                        {' '}
                        {this.state.year}
                        {' '}
                        Active Power Solutions
                    </div>
                    <div>
                        <a href="https://www.douglasrcjames.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-tools"/> by douglasrcjames</a> 
                    </div>
                    <div className="sm-padding-b">
                        <Link to="/about">About</Link> | <Link to="/terms-conditions">Terms &amp; Conditions</Link> | <Link to="/credits">Credits</Link> 
                    </div>
                </div>
            </footer>
        )
    }
}
