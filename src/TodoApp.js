import React from "react";
import todo from "./components/TodoData";
import Todo from "./components/Todo";
import AddItem from "./components/AddItem";
import Header from "./components/Header";

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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onDelete(itemID) {
    console.log(itemID);
    const items = this.state.list.filter((item) => item !== itemID);
    this.setState({ list: items });
  }

  onAdd = (e) => {
    e.preventDefault();
    this.setState({
      value: this.textInput.current.value,
    });
    console.log(this.state.value);
  };

  handleSubmit(e) {
    e.preventDefault();
    const v = this.state.list;
    v.push(this.state.value);
    this.setState({ list: v });
  }

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
    const todocomponent = this.state.list.map((todo, index) => (
      <Todo
        key={index}
        todo={todo}
        handleChange={this.handleChange}
        handleDelete={this.onDelete}
      />
    ));

    return (
      <div>
        <Header></Header>
        <h3>{todocomponent}</h3>
        <AddItem
          val={this.state.value}
          refe={this.textInput}
          handleSubmit={this.handleSubmit}
          handleItem={this.onAdd}
        />
      </div>
    );
  }
}

export default TodoApp;
