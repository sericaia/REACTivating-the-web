var React = require('react');

var style = require('../style/style.js');

var Todo = React.createClass({
 propTypes: {
  title: React.PropTypes.number.isRequired,
  onDelete: React.PropTypes.func.isRequired
},
getInitialState: function(){
  return {
    checked: false,
    vodooTrStyle: style.notCheckedTodo
  };
},
handleChange: function(){
  this.setState({checked: !checked});

  if(checked){
    this.setState({
      vodooTrStyle: style.checkedTodo
    });
  }
  else {
    this.setState({
      vodooTrStyle: style.notCheckedTodo
    });
  }
},
_onDelete: function () {
  this.props.onDelete(this.props.title);
},
render: function() {
  return (
    <tr style={this.state.vodooTrStyle} >
    <td style={style.tableContent}><button onClick={this._onDelete}>X</button></td>
    <td style={style.tableContent}><input type="checkbox" checked={this.state.checked} onChange={this.handleChange} /></td>
    <td style={style.tableContent}>{this.props.title}</td>
    <td style={style.tableContent}>{this.props.children}</td>
    </tr>
    );
}

});

module.exports = Todo;