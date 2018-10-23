import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import { Link } from 'react-router-dom';
import '../css/style.css';
import Routing from '../routes'

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import {
  Collapse, Navbar, NavbarToggler, Nav, NavLink, NavbarBrand, Col
} from 'reactstrap';

/*---------------------------------------- FontAwesome ----------------------------------------*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChartLine, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faChartLine, faSignOutAlt)
/*--------------------------------------------------------------------------------------------*/

class App extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.closeNav = this.closeNav.bind(this)
    this.state = {
      isOpen: false,
      sideBarIsOpen: false
    };
    this.mainBody = React.createRef();

  }

  toggleSideBar = () => {
    this.setState({
      sideBarIsOpen: !this.state.sideBarIsOpen
    });
    console.log(this.state.sideBarIsOpen);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  closeNav() {
    if (this.state.isOpen === true) {
      this.setState({
        isOpen: false
      });
    }
  }

  // fake authentication Promise
  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 500))
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if (ele) {
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 500)
      }
    })
  }

  render() {
    return (

      <React.Fragment>
        <Navbar color="light" light expand="md" className="top-nav" style={this.state.sideBarIsOpen === true ? { marginLeft: '240px' } : { marginLeft: '64px' }}>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <div className="sidenav">
          <SideNav
            onSelect={(selected) => {
              const to = '/' + selected;
              console.log(to)
            }}
          >

            <SideNav.Toggle onClick={this.toggleSideBar} />
            <SideNav.Nav defaultSelected="home" >
              <NavItem eventKey="home">
                <NavIcon>
                  <FontAwesomeIcon icon={faHome} style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                  Home
                        </NavText>
              </NavItem>
              <NavItem eventKey="devices">
                <NavIcon>
                  <FontAwesomeIcon icon={faChartLine} style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>Devices</NavText>
              </NavItem>
              <NavItem eventKey="logOut">
                <NavIcon>
                  <FontAwesomeIcon icon={faSignOutAlt} style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>Log out</NavText>
              </NavItem>
            </SideNav.Nav>
          </SideNav>
        </div>
        <div id="body" className="container" style={this.state.sideBarIsOpen === true ? { marginLeft: '240px' } : { marginLeft: '64px' }}>
          <div className="mt-5 ml-2 mb-3 mr-1">
            <Col md={10} lg={12} xs={12} sm={12}>
              <Routing />
            </Col>
            <Col md={2} lg={2}></Col>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
