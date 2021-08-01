import React, { Component } from "react";
import MovieItem from "./MovieItem";
import axios from "axios";
import Loader from "../../Loader";

import {
  actListMovieRequest,
  actListMovieSuccess,
  actListMovieFailed,
} from "./modules/actions";
import { connect } from "react-redux";

class ListMoviePage extends Component {
  componentDidMount() {
    this.setState({
      loading: true,
    });
    this.props.request();
    //Call api
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    })
      .then((result) => {
        //success
        console.log(result.data);
        this.props.success(result.data);
      })
      .catch((err) => {
        //failed
        console.log(err);
        this.props.failed(err);
      });
  }
  renderListMovie = () => {
    const { data, loading } = this.props;
    console.log(this.props);
    if (loading) {
      return <Loader />;
    }
    return data?.map((movie, index) => {
      return <MovieItem key={movie.maPhim} movie={movie} />;
    });
  };
  render() {
    return (
      <div className="container">
        <h3>ListMoviePage</h3>
        <div className="row">{this.renderListMovie()}</div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    request: () => {
      dispatch(actListMovieRequest());
    },
    success: (data) => {
      dispatch(actListMovieSuccess(data));
    },
    failed: (data) => {
      dispatch(actListMovieFailed(data));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
