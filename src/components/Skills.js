import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBasic_info, fetchPrimary_info } from "../store/affects/affects";

class Skills extends Component {
  componentDidMount() {
    this.props.loadPrimaryData();
    this.props.loadBasicData();
  }

  render() {
    if (this.props.primaryInformation && this.props.basicInformation) {
      this.sectionName =
        this.props.primaryInformation.basic_info &&
        this.props.primaryInformation.basic_info.section_name.skills;
      this.skills =
        this.props.basicInformation.skills &&
        this.props.basicInformation.skills.icons.map(function (skills, i) {
          return (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                <div className="text-center skills-tile">
                  <i className={skills.class} style={{ fontSize: "220%" }}>
                    <p
                      className="text-center"
                      style={{ fontSize: "30%", marginTop: "4px" }}
                    >
                      {skills.name}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          );
        });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{this.sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{this.skills}</ul>
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

export default connect(mapState, mapDispatch)(Skills);
