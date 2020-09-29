import React, { Component } from 'react'
import { connect } from 'react-redux'

class Todo extends Component {
    componentDidMount(){
        this.props.displayTask()

    }
    render() {
        return (
            <div>
                {JSON.parse(this.props.tasklist)}
            </div>
        )
    }
}

const mapStateToProps = (storeState) => {
 return   {tasklist:storeState.taskState.tasks}
}


export default connect(mapStateToProps, {displayTask})(Todo)
