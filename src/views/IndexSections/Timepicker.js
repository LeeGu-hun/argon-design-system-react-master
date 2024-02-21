/*!

=========================================================
* Timepicker
=========================================================
* Author: lifeisgoodnhappy@gmail.com
* Reference: https://mui.com/x/react-date-pickers/date-picker/
=========================================================

*/

import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

// TimePicker
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

class Timepicker extends React.Component {
  state = {};

  divstyle = {
    fontSize: "0.875rem",
    borderRight: "1px solid #cad1d7",
    paddingRight: "0.75rem",
    height: "calc(3rem + 3rem + 2px)",
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
    return (
      <Row>
        <Col>
          <div style={this.divstyle}>
            <i className={this.props.icons}></i>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimePicker"]}>
                <TimePicker label="시작 시간" />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Timepicker;
