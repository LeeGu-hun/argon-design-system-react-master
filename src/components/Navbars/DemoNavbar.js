/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'
import {Link} from 'react-router-dom'
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from 'headroom.js'
// reactstrap components
import {
  //Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  //Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from 'reactstrap'

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById('navbar-main'))
    // initialise
    headroom.init()
  }
  state = {
    collapseClasses: '',
    collapseOpen: false
  }

  onExiting = () => {
    this.setState({
      collapseClasses: 'collapsing-out'
    })
  }

  onExited = () => {
    this.setState({
      collapseClasses: ''
    })
  }

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main">
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img alt="..." src={require('assets/img/brand/bssm.png')} />
                부산소망교회
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}>
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        {/* <img
                          alt="..."
                          src={require("assets/img/brand/argon-react.png")}
                        /> */}
                        <img alt="..." src={require('assets/img/brand/bssm.png')} />{' '}
                        부산소망교회
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="material-icons dp48">perm_identity</i>
                      <span className="ml-1 nav-link-inner--text">교인 관리</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      {/* <DropdownItem to="/landing-page" tag={Link}>
                        Landing
                      </DropdownItem>
                      <DropdownItem to="/profile-page" tag={Link}>
                        앱정보
                      </DropdownItem> */}
                      <DropdownItem to="/mem-inquiry-page" tag={Link}>
                        교인 조회
                      </DropdownItem>
                      <DropdownItem to="/mem-regist-page" tag={Link}>
                        교인 등록
                      </DropdownItem>
                      <DropdownItem to="/depart-regist-page" tag={Link}>
                        부서/목장 등록
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="material-icons dp48">directions_bus</i>
                      <span className="ml-1 nav-link-inner--text">차량 예약 관리</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/car-application-page" tag={Link}>
                        차량 신청
                      </DropdownItem>
                      <DropdownItem to="/car-inquiry-page" tag={Link}>
                        차량 신청 결과 조회
                      </DropdownItem>
                      <DropdownItem to="/car-regist-page" tag={Link}>
                        차량 등록
                      </DropdownItem>
                    </DropdownMenu>
                    {/* <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media
                          className="d-flex align-items-center"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-navbar"
                          target="_blank"
                        >
                          <div className="text-white icon icon-shape bg-gradient-primary rounded-circle">
                            <i className="ni ni-spaceship" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Getting started
                            </h6>
                            <p className="mb-0 description d-none d-md-inline-block">
                              Learn how to use Argon compiling Scss, change
                              brand colors and more.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/colors?ref=adsr-navbar"
                          target="_blank"
                        >
                          <div className="text-white icon icon-shape bg-gradient-success rounded-circle">
                            <i className="ni ni-palette" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Foundation
                            </h6>
                            <p className="mb-0 description d-none d-md-inline-block">
                              Learn more about colors, typography, icons and the
                              grid system we used for Argon.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alert?ref=adsr-navbar"
                          target="_blank"
                        >
                          <div className="text-white icon icon-shape bg-gradient-warning rounded-circle">
                            <i className="ni ni-ui-04" />
                          </div>
                          <Media body className="ml-3">
                            <h5 className="heading text-warning mb-md-1">
                              Components
                            </h5>
                            <p className="mb-0 description d-none d-md-inline-block">
                              Browse our 50 beautiful handcrafted components
                              offered in the Free version.
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu> */}
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/creativetim"
                      id="tooltip333589074"
                      target="_blank">
                      <span className="material-icons">logout</span>
                      {/* https://fontawesomeicons.com/materialdesign/icons/logout */}
                      <span className="ml-1 nav-link-inner--text">로그아웃</span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Logout
                    </UncontrolledTooltip>
                  </NavItem>
                  {/* <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.instagram.com/creativetimofficial"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="ml-2 nav-link-inner--text d-lg-none">
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Follow us on Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://twitter.com/creativetim"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-twitter-square" />
                      <span className="ml-2 nav-link-inner--text d-lg-none">
                        Twitter
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Follow us on Twitter
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://github.com/creativetimofficial/argon-design-system-react"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="ml-2 nav-link-inner--text d-lg-none">
                        Github
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      Star us on Github
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="mr-2 fa fa-cloud-download" />
                      </span>
                      <span className="ml-1 nav-link-inner--text">
                        Download
                      </span>
                    </Button>
                    </NavItem> */}
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    )
  }
}

export default DemoNavbar
