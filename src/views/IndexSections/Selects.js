/*!

=========================================================
* Selects
=========================================================
* Author: lifeisgoodnhappy@gmail.com
=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

class Selects extends React.Component {
  state = {};
  render() {
    const carmodels = this.props.opts;
    return (
      <>
        <Row>
          <Col md="4">
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    {/* 
                      icons menu : "ni ni-bullet-list-67"
                      icons cars : "ni ni-bus-front-12" 
                    */}
                    <i className={this.props.icons}></i>
                  </InputGroupText>
                </InputGroupAddon>
                <div className="md-3">
                  <select className="form-control-alternative">
                    {carmodels.map((item, index) => (
                      <option
                        className="form-control-alternative"
                        key={index}
                        value={item.value}
                      >
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
      </>
    );
  }
}

export default Selects;
