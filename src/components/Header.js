import React, { Component } from "react";
import { fetchBasic_info } from "../store/affects/affects";
import { connect } from "react-redux";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
 info = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    this.props.loadData();
  }

  onThemeSwitchChange(checked) {
    console.log(checked);
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    let name;
    if (this.props.information) {
     this.info =
        this.props.information.basic_info &&
        this.props.information.basic_info.titles
          .map((x) => [x.toUpperCase(), 1500])
         .flat();
       name =
        this.props.information.basic_info && this.props.information.basic_info.name;
    }


    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return <Typical className="title-styles" steps={this.info} loop={500} />;
      },
      (props, prevProp) => true
    );

    return (
      <header
        id="home"
        style={{ height: window.innerHeight, display: "block" }}
      >
        <div className="row aligner" style={{ height: "100%" }}>
          <div className="col-md-12">
            <div>
              <span
                className="iconify header-icon"
                data-icon="la:laptop-code"
                data-inline="false"
              ></span>
              <br />
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#353535"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="icon-park:moon"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
            </div>
            <button
              className="contact_btn"
              onClick={() => window.location.replace("/#footer")}
            >
              Contact Me
            </button>
            <a href="https://drive.google.com/file/d/1IgqdX24Mx22ZHxV-gcmUOaHGZ4YDK8Dm/view?usp=sharing">
              <button className="contact_btn resume">My Resume</button>
            </a>
          </div>
        </div>
      </header>
    );
  }
}



const mapState = (state) => {
  return {
    information: state.basic_info,
  };
};
const mapDispatch = (dispatch) => {
  return {
    loadData: () => dispatch(fetchBasic_info()),
  };
};

export default connect(mapState, mapDispatch)(Header);
