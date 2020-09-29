import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listAlbum } from "./../redux/actions/galleryActions";

class Gallery extends Component {
    componentDidMount(){
        
        this.props.listAlbum()
    }
    render() {
        console.log(this.props)
        return this.props.listings?(
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',alignItems:'center'}}>
                {/*JSON.stringify(this.props.listings)*/}
                {this.props.listings.map(ep=><div style={{maxWidth:'150px',padding:'10px'}}><img src={ep['thumbnailUrl']}/><div>{ep['title']}</div></div>)}
            </div>
        ):null
    }
}

const mapStateToProps = (storeState) => {
    
    return {listings:storeState.galState.album}
}


export default connect(mapStateToProps, {listAlbum})(Gallery)
