import React, { Component } from "react";

export default class MovieItem extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3">
        <div className="card">
          <img
            className="card-img-top"
            src={movie.hinhAnh}
            alt={movie.hinhAnh}
          />
          <div className="card-body">
            <h4 className="card-title">{movie.tenPhim}</h4>
          </div>
        </div>
      </div>
    );
  }
}
