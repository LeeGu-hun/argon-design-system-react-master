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
    // this.refs.main.scrollTop = 0;
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
                      <h4 className="mb-1">차량 등록</h4>
                      <p className="mt-0">
                        사용하실 차량의 기본 정보를 입력하세요.
                      </p>
                      <FormGroup
                        className={classnames("mt-3", {
                          focused: this.state.carNumFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              {/* <i className="ni ni-user-run" /> */}
                              <i className="ni ni-bold-right"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="차량 번호(입력: 02가 1111)"
                            type="text"
                            onFocus={(e) =>
                              this.setState({ carNumFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ carNumFocused: false })
                            }
                            name="carnum"
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.carModelFocused,
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
                              this.setState({ carModelFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ carModelFocused: false })
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
