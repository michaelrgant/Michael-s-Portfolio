import React, { Component } from "react";
import { Icon } from "@iconify/react";
import { fetchPrimary_info } from "../store/affects/affects";
import { fetchBasic_info } from "../store/affects/affects";
import { connect } from "react-redux";
import JavaScriptIcon from "@iconify/icons-logos/javascript";
import reactIcon from "@iconify/icons-logos/react";
import nodeJsIcon from "@iconify/icons-logos/nodejs-icon";
import img from "../images/oneHub.jpeg"
class About extends Component {
  image
  componentDidMount() {
    this.props.loadPrimaryData();
    this.props.loadBasicData()
  }
  render() {


    if (this.props.primaryInformation && this.props.basicInformation) {
      this.sectionName =
        this.props.primaryInformation.basic_info &&
        this.props.primaryInformation.basic_info.section_name.about;
      this.hello =
        this.props.primaryInformation.basic_info &&
        this.props.primaryInformation.basic_info.description_header;
      this.about =
        this.props.primaryInformation.basic_info &&
        this.props.primaryInformation.basic_info.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{this.sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img  src={img} alt="Avatar placeholder" />
                  <Icon
                    icon={JavaScriptIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={nodeJsIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{this.hello} :) </span>
                    <br />
                    <br />
                    {this.about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}



const mapState = (state) => {
  return {
    primaryInformation: state.primary_info,
    basicInformation: state.basic_info,
  };
};
const mapDispatch = (dispatch) => {
  return {
    loadPrimaryData: () => dispatch(fetchPrimary_info()),
    loadBasicData: () => dispatch(fetchBasic_info()),
  };
};

export default connect(mapState, mapDispatch)(About);
