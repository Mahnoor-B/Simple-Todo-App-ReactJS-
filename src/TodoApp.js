import React from "react";
import todo from "./components/TodoData";
import Todo from "./components/Todo";
import AddItem from "./components/AddItem";

class TodoApp extends React.Component {
  constructor() {
    super();
    this.textInput = React.createRef();
    this.state = {
      list: todo,
      value: "",
    };
    this.onDelete = this.onDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  clicked() {
    console.log("You have clicked me!");
  }
  onDelete(itemID) {
    console.log(itemID);
    const items = this.state.list.filter((item) => item.id !== itemID);
    this.setState({ list: items });
  }

  // onAdd(e) {
  //   e.preventDefault();
  //   // var newItem = this.state.list;
  //   // newItem.push(item);
  //   // this.setState({ list: newItem });
  //   this.setState({ textInput: e.target.value });
  //   console.log("Hello");
  // }

  onAdd = (e) => {
    e.preventDefault();
    this.setState({
      value: this.textInput.current.value,
    });
    console.log(this.state.value);
  };

  handleChange(id) {
    this.setState((prevState) => {
      const updateList = prevState.list.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          // console.log("checked");
        }
        return todo;
      });
      return {
        list: updateList,
      };
    });
  }

  render() {
    const todocomponent = this.state.list.map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        handleChange={this.handleChange}
        handleDelete={this.onDelete}
      />
    ));

    return (
      <div>
        <h1>Welcome to your daily chores!</h1>
        <h3>{todocomponent}</h3>
        <AddItem
          val={this.state.value}
          refe={this.textInput}
          handleItem={this.onAdd}
        />
      </div>
    );
  }
}

export default TodoApp;
