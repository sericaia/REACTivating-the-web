var React = require('react');

var TodoList = require('./TodoList.jsx');
var TodoForm = require('./TodoForm.jsx');

var style = require('../style/style.js');

var TodoBox = React.createClass({
  render: function() {
    return (
      <div className="todoBox">
      <h1>Todos</h1>
      <TodoList data={this.props.data} />
      <TodoForm/>
      </div>
      );
  }
});

module.exports = TodoBox;
