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
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

import Datepicker from "../IndexSections/Datepicker.js";
import TimeRangePicker from "../IndexSections/TimeRangePicker.js";
import Selects from "../IndexSections/Selects.js";

// reactstrap components
import {
  // Badge,
  Button,
  Card,
  CardBody,
  // CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
// import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
// import Download from "../IndexSections/Download.js";

class CarRegist extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-0">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 1000"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>

          <section>
            <Container>
              <Row className="justify-content-center">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">차량 예약 신청</h4>
                      <p className="mt-0">
                        사용하실 차량의 예약 정보를 입력하세요.
                      </p>
                      <FormGroup
                        className={classnames("mt-3", {
                          focused: this.state.dateFocused,
                        })}
                      >
                        <Datepicker caption="신청일" />
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.carSelectFocused,
                          width: 300,
                        })}
                      >
                        <Selects
                          icons={"ni ni-bus-front-12"}
                          opts={[
                            { value: "스타렉스", label: "스타렉스" },
                            { value: "스타리아", label: "스타리아" },
                            { value: "카운티", label: "카운티" },
                          ]}
                          onFocus={(e) =>
                            this.setState({ carSelectFocused: true })
                          }
                          onBlur={(e) =>
                            this.setState({ carSelectFocused: false })
                          }
                        />
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.carSelectFocused,
                          width: 50,
                        })}
                      >
                        <TimeRangePicker icons="far fa-clock" />
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.destiFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-bold-right"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="목적지"
                            type="text"
                            onFocus={(e) =>
                              this.setState({ destiFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ destiFocused: false })
                            }
                            name="destination"
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.driverFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              {/* <i className="ni ni-email-83" /> */}
                              <i className="ni ni-bold-right"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="운전자명"
                            type="text"
                            onFocus={(e) =>
                              this.setState({ driverFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ driverFocused: false })
                            }
                            name="drivername"
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.departmentFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              {/* <i className="ni ni-email-83" /> */}
                              <i className="ni ni-bold-right"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="기관명"
                            type="text"
                            onFocus={(e) =>
                              this.setState({ departmentFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ departmentFocused: false })
                            }
                            name="departmentname"
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="▶ 사용 목적"
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          신청하기
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          {/* <Download /> */}
        </main>
        {/* <CardsFooter /> */}
      </>
    );
  }
}

export default CarRegist;
