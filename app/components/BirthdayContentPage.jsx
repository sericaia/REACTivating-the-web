var React = require('react');

var GuestList = require('./GuestList.jsx');
var BirthdayInfo = require('./BirthdayInfo.jsx');

var style = require('../style/style.js');

var BirthdayContentPage = React.createClass({
  render: function() {
    return (
      <div className="birthdayContent">
	      <h1>Birthday Party</h1>
	      <BirthdayInfo/>
	      <GuestList guestList={this.props.guestList} />
      </div>
      );
  }
});

module.exports = BirthdayContentPage;
