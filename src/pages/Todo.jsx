import React, { Component } from "react";
class Todo extends Component {
  state = {
    tasks: [],
    addtasktext: null,
    taskid: 0,
    update: null,
    updateId: null,
    updatetasktext: ""
  };
  handelAdd = () => {
    let task = [...this.state.tasks];
    task.push([this.state.taskid, this.state.addtasktext]);
    let no = Number(this.state.taskid);
    this.setState({
      tasks: task,
      addtasktext: null,
      taskid: no + 1
    });
    this.inputEntry.value = "";
  };
  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      addtasktext: e.target.value
    });
  };

  handleUpdate = () => {
    let net = this.state.tasks;
    for (let i = 0; i < net.length; i++) {
      if (net[i][0] === this.state.updateId) {
        net[i][1] = this.state.updatetasktext;
      }
    }

    this.setState({
      tasks: net,
      update: null,
      updateId: null,
      updatetasktext: ""
    });
  };
  handleDelete = (n) => {
    console.log(JSON.stringify(n["ep"][0]));
    let task = [...this.state.tasks];
    let new_list = task.filter((el) => {
      return el[0] !== n["ep"][0];
    });
    this.setState({
      tasks: new_list
    });
  };
  handleUpdateTask = (n) => {
    this.setState({
      update: n["ep"][1],
      updateId: n["ep"][0]
    });
  };
  handleUpdateText = (e) => {
    e.preventDefault();
    this.setState({
      updatetasktext: e.target.value
    });
  };
  render() {
    return (
      <div>
        <>
          <input
            type="text"
            name="addtask"
            id="task"
            onKeyUp={this.handleInput}
            ref={(el) => (this.inputEntry = el)}
          />
          <input type="button" value="Add" onClick={this.handelAdd} />
        </>

        {this.state.update === null ? null : (
          <>
            <br />
            <input
              type="text"
              name="addtask"
              id="task"
              onKeyUp={this.handleUpdateText}
              ref={(el) => (this.updateEntry = el)}
              defaultValue={this.state.update}
            />
            <input
              type="button"
              value="Update"
              onClick={() => this.handleUpdate(this.state.update)}
            />
          </>
        )}
        <div>
          <ul style={{ listStyle: "none" }}>
            {this.state.tasks.map((ep) => (
              <li>
                {ep[0]}. &nbsp;&nbsp;&nbsp; {ep[1]} &nbsp;&nbsp;&nbsp;
                <button onClick={() => this.handleDelete({ ep })}>
                  Delete
                </button>
                <button onClick={() => this.handleUpdateTask({ ep })}>
                  Update
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todo;
