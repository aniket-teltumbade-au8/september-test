import React, { Component } from "react";
import { connect } from "react-redux";
import { listAlbum } from "./../redux/actions/galleryActions";

class Gallery extends Component {
  componentDidMount() {
    this.props.listAlbum();
  }
  render() {
    console.log(this.props);
    return this.props.listings ? (
      <table>
        {/*JSON.stringify(this.props.listings)*/}
        {this.props.listings.map((ep) => (
          <tr>
            <td>{ep["postid"]}</td>
            <td>
              < img alt="" src={ep["thumbnailUrl"]} />
            </td>
            <td>{ep["title"]}</td>
          </tr>
        ))}
      </table>
    ) : null;
  }
}

const mapStateToProps = (storeState) => {
  return { listings: storeState.galState.album };
};

export default connect(mapStateToProps, { listAlbum })(Gallery);
