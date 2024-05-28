import React from "react";
import { HashLoader } from "react-spinners";
import "/src/styles/Loader-module.css";
class MyLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div className="loader-container">
        <HashLoader size={60} color={"#E0091D"} loading={this.state.loading} />
        <span className="loader-text">
          Cargando, espere un momento por favor...
        </span>
      </div>
    );
  }
}

export default MyLoader;
