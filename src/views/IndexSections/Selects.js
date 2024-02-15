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
import { Row, Col } from "reactstrap";

class Selects extends React.Component {
  state = {};
  divstyle = {
    fontSize: "0.875rem",
    transition: "all 0.15s ease",
    borderRight: "1px solid #cad1d7",
    paddingRight: "0.75rem",
    display: "block",
    width: "100%",
    height: "calc(1.5em + 1.25rem + 2px)",
    padding: "0.625rem 0.75rem",
    fontWeight: "400",
    lineHeight: "1.5",
    color: "#8898aa",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    borderRadius: "0.25rem",
    boxShadow: "none",
    transition: "all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    boxShadow: "0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02)",
    border: "0",
    transition: "box-shadow 0.15s ease",
  };
  selectstyle = {
    fontSize: "0.875rem",
    transition: "all 0.15s ease",
    display: "inline-block",
    marginLeft: "3px",
    width: "95%",
    fontWeight: "400",
    color: "#8898aa",
    backgroundColor: "#fff",
    border: "0 solid #fff",
    transition: "all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  };
  render() {
    const carmodels = this.props.opts;
    return (
      <Row>
        <Col md="4">
          <div style={this.divstyle}>
            <i className={this.props.icons}></i>

            <select style={this.selectstyle}>
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
        </Col>
      </Row>
    );
  }
}

export default Selects;
