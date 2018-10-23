import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../css/style.css';
import Routing from '../routes'
import { TopNavBar } from '../components'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

/*---------------------------------------- FontAwesome ----------------------------------------*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faChartLine, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faTachometerAlt, faChartLine, faSignOutAlt, faUserCircle);
/*--------------------------------------------------------------------------------------------*/

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sideBarIsOpen: false,
      navMargine: '64px'
    };
  }

  toggleSideBar = () => {
    this.setState({
      sideBarIsOpen: !this.state.sideBarIsOpen
    },
      () => {
        if (this.state.sideBarIsOpen === true) {
          this.setState({
            navMargine: '240px'
          })
        } else {
          this.setState({
            navMargine: '64px'
          })
        }
      });
    // console.log(this.state.sideBarIsOpen);
  }

  closeSideBar = () => {
    if (this.state.sideBarIsOpen === true) {
      this.setState({
        sideBarIsOpen: false
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
    // const navMargine = this.state.navMargine;
    return (
      <div className="">
        <div className="side-nav">
          <SideNav
            onSelect={(selected) => {
              const to = '/' + selected;
              console.log(to)
            }}
          // expanded={this.state.sideBarIsOpen}
          >

            <SideNav.Toggle onClick={this.toggleSideBar} />
            <SideNav.Nav defaultSelected="home">
              <NavItem eventKey="home">
                <NavIcon>
                  <FontAwesomeIcon icon={faTachometerAlt} style={{ fontSize: '1.75em' }} />
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
        <header>
          <TopNavBar navMargine={this.state.navMargine} />
        </header>
        <main id="body" style={this.state.sideBarIsOpen === true ? { marginLeft: '240px' } : { marginLeft: '64px' }}>
          <div id="content">
            <Routing />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
