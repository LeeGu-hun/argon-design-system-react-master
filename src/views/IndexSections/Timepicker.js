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
import { useState } from "react";
import TimePicker from "react-time-picker";

class Timepicker extends React.Component {
  state = {};
  divstyle = {
    fontSize: "0.875rem",
    borderRight: "1px solid #cad1d7",
    paddingRight: "0.75rem",
    height: "calc(1.5em + 1.25rem + 2px)",
    padding: "0.625rem 0.75rem",
    fontWeight: "400",
    lineHeight: "1.5",
    color: "#8898aa",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    borderRadius: "0.25rem",
    // transition: "all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    boxShadow: "0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02)",
    border: "0",
    position: "relative",
    display: "block",
    flexWrap: "wrap",
    alignItems: "stretch",
    width: "100%",
  };
  selectstyle = {
    fontSize: "0.875rem",
    lineHeight: "2rem",
    display: "inline-block",
    marginLeft: "3px",
    width: "95%",
    fontWeight: "400",
    color: "#8898aa",
    backgroundColor: "#fff",
    border: "0 solid #fff",
    // transition: "all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  };
  render() {
    //const [value, onChange] = useState("10:00");
    return (
      <Row>
        <Col>
          <div style={this.divstyle}>
            <i className={this.props.icons}></i>

            <TimePicker value="10:00" />
          </div>
        </Col>
      </Row>
    );
  }
}

export default Timepicker;
