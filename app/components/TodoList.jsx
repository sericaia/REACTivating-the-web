var React = require('react');

var Todo = require('./Todo.jsx');

var style = require('../style/style.js');

var TodoList = React.createClass({
  getInitialState: function() {
    return {
      data: this.props.data,
      titleValue: "",
      detailValue: ""
    };
  },
  changeTitle: function(e) {
    this.setState({titleValue: e.target.value});
  },
  changeDetail: function(e) {
    this.setState({detailValue: e.target.value});
  },
  addTodo: function() {
    this.state.data.push({
      title: this.state.titleValue,
      detail: this.state.detailValue
    });

    this.setState({data: this.state.data});

    /* reset values */
    this.setState({titleValue: ""});
    this.setState({detailValue: "" });
  },
  render: function() {
    var todo = this.props.data.map(function(obj) { return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>});
    return (
      <div className="todoList">
      <div>
      Title:<input type="text" value={this.state.titleValue} onChange={this.changeTitle} />
      Detail:<input type="text" value={this.state.detailValue} onChange={this.changeDetail} />
      <button onClick={this.addTodo}>Add</button>
      </div>
      <table style={style.tableStyle}>
      <tbody>
      { /* <Todo title="Shopping">Milk</Todo>
    <Todo title="Hair cut">13:00</Todo> */ }
    {todo}
    </tbody>
    </table>
    </div>
    );
  }
});

module.exports = TodoList;