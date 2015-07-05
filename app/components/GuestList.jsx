var React = require('react');

var Guest = require('./Guest.jsx');

var style = require('../style/style.js');

var GuestList = React.createClass({
  getInitialState: function() {
    return {
      guestList: this.props.guestList,
      guestName: "",
      guestBrings: ""
    };
  },
  changeName: function(e) {
    this.setState({guestName: e.target.value});
  },
  changeGuestBrings: function(e) {
    this.setState({guestBrings: e.target.value});
  },
  addGuest: function() {
    this.state.guestList.push({
      name: this.state.guestName,
      brings: this.state.guestBrings
    });

    this.setState({guestList: this.state.guestList});

    /* reset values */
    this.setState({guestName: ""});
    this.setState({guestBrings: "" });
  },
  onDeleteGuest: function(name){

    var guests = this.state.guestList.filter(function(el) {
      return el.name != name;
    });

    this.setState({guestList: guests});
    //TODO re-render
  },
  render: function() {
    var guest = this.props.guestList.map(function(obj) {
          return (
            <Guest name={obj.name} key={obj.name} onDelete={this.onDeleteGuest} >{obj.brings}</Guest>
          );
    }, this)

    return (
      <div className="guestList">
      <div>
      <p>
        Name:
        <input type="text" value={this.state.guestName} onChange={this.changeName} />
      </p>
      <p>
        Ask guest to bring:
        <input type="text" value={this.state.guestBrings} onChange={this.changeGuestBrings} />
      </p>
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
          <tbody>
            {guest}
          </tbody>
      </table>
    </div>
    );
  }
});

module.exports = GuestList;