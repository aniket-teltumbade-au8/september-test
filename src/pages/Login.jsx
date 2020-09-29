import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import uiConfig from '../functions/firebaseConfig';
import { setCurrentUser } from '../redux/actions/authActions';
import { connect } from 'react-redux';

import { Link, withRouter } from 'react-router-dom';


class Login extends Component {
    state = {
        isSignedIn: false
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                isSignedIn: !!user
            })
            this.props.setCurrentUser(firebase.auth().currentUser)
        })
    }
    render() {
        return this.props.userDetail ?
            (
<Link to="\dashboard">Enter</Link>
            ) :
            (
                <div className="login login-main">
                    <h1>Sign In</h1>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                    <div style={{ textAlign: "center", margin: "auto" }}><Link to="/register" >Register Here!</Link></div>
                </div>
            )
    }
}
const mapStatesToMatch = (storeState) => {
    return { userDetail: storeState.authState.user }
}
export default connect(mapStatesToMatch, { setCurrentUser })(withRouter(Login))
