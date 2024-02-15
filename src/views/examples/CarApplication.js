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
                          className="w-max"
                          icons={"ni ni-watch-time"}
                          opts={[
                            { value: "01", label: "01" },
                            { value: "02", label: "02" },
                            { value: "03", label: "03" },
                            { value: "04", label: "04" },
                            { value: "05", label: "05" },
                            { value: "06", label: "06" },
                            { value: "07", label: "07" },
                            { value: "08", label: "08" },
                            { value: "09", label: "09" },
                            { value: "10", label: "10" },
                            { value: "11", label: "11" },
                            { value: "12", label: "12" },
                            { value: "13", label: "13" },
                            { value: "14", label: "14" },
                            { value: "16", label: "16" },
                            { value: "17", label: "17" },
                            { value: "18", label: "18" },
                            { value: "19", label: "19" },
                            { value: "20", label: "20" },
                            { value: "21", label: "21" },
                            { value: "22", label: "22" },
                            { value: "23", label: "23" },
                            { value: "24", label: "24" },
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
                          width: 300,
                        })}
                      >
                        <Selects
                          className="w-max"
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
                          focused: this.state.emailFocused,
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
                            placeholder="차량 모델(입력: 현대 스타리아)"
                            type="text"
                            onFocus={(e) =>
                              this.setState({ emailFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ emailFocused: false })
                            }
                            name="carmodel"
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
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
                          등록하기
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
