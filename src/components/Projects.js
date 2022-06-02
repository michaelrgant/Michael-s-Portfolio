import React, { Component } from "react";
import { connect } from "react-redux";
import { projectsData } from "./seed";
import { fetchPrimary_info } from "../store/affects/affects";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  componentDidMount() {
    this.props.loadData();
  }

  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }
  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.primaryInformation && this.props.basicInformation) {
      this.sectionName =
        this.props.primaryInformation.basic_info &&
        this.props.primaryInformation.basic_info.section_name.projects;
      this.projects = projectsData.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    height="230"
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: "relative",
                    }}
                  />
                  <span className="project-date">{projects.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }
    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{this.sectionName}</span>
            <h1 className="downward_arrow">Click me!</h1>
            &#8595;
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{this.projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
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
    loadData: () => dispatch(fetchPrimary_info()),
  };
};

export default connect(mapState, mapDispatch)(Projects);
