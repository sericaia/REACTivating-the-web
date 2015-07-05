var React = require('react');

var style = require('../style/style.js');

var Guest = React.createClass({
 propTypes: {
  name: React.PropTypes.string.isRequired,
  onDelete: React.PropTypes.func.isRequired
},
getInitialState: function(){
  return {
    checked: false,
    vodooTrStyle: style.notCheckedGuest
  };
},
handleChange: function(){
  this.setState({checked: !this.state.checked});

  if(this.state.checked){
    this.setState({
      vodooTrStyle: style.checkedGuest
    });
  }
  else {
    this.setState({
      vodooTrStyle: style.notCheckedGuest
    });
  }
},
_onDelete: function () {
  this.props.onDelete(this.props.name);
},
render: function() {
  return (
    <tr style={this.state.vodooTrStyle} >
      <td style={style.tableContent}><input type="checkbox" checked={this.state.checked} onChange={this.handleChange} /></td>
      <td style={style.tableContent}>{this.props.name}</td>
      <td style={style.tableContent}>{this.props.children}</td>
      <td style={style.tableContent}><button onClick={this._onDelete}>X</button></td>
    </tr>
    );
}

});

module.exports = Guest;