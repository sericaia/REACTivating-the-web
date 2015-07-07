var React = require('react');

var Guest = require('./Guest.jsx');
var style = require('../style/style.js');


var GuestList = React.createClass({
  getInitialState: function() {
    return {
      guestList: this.props.guestList,
      guestName: '',
      guestBrings: ''
    };
  },
  changeName: function(ev) {
    this.setState({
      guestName: ev.target.value
    });
  },
  changeGuestBrings: function(ev) {
    this.setState({
      guestBrings: ev.target.value
    });
  },
  addGuest: function() {
    this.state.guestList.push({
      name: this.state.guestName,
      brings: this.state.guestBrings
    });

    this.setState({
      guestList: this.state.guestList,
      guestName: '',
      guestBrings: ''
    });
  },
  onDeleteGuest: function(name){
    this.setState({
      guestList:  this.state.guestList.filter(function(el) {
        return el.name != name;
      })
    });
  },
  render: function() {
    var guests = this.state.guestList.map(function(obj) {
      return (
        <Guest name={obj.name} key={obj.name} onDelete={this.onDeleteGuest}>{obj.brings}</Guest>
      );
    }, this);

    return (
      <div className='guestList'>
        <div>
          <div>
            <label htmlFor='name'>Name: </label>
            <input type='text' value={this.state.guestName} onChange={this.changeName} id='name' />
          </div>
          <div>
            <label htmlFor='bring'>Ask guest to bring: </label>
            <input type='text' value={this.state.guestBrings} onChange={this.changeGuestBrings} id='bring' />
          </div>
          <button onClick={this.addGuest}>Add</button>
        </div>
        <br/>
        <table style={style.tableStyle}>
          <thead>
            <tr>
               <th>Select</th>
               <th>Guest Name</th>
               <th>Guest brings</th>
               <th>Delete</th>
            </tr>
         </thead>
            <tbody>{guests}</tbody>
        </table>
      </div>
    );
  }
});

module.exports = GuestList;