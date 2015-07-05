var React = require('react');

var style = require('../style/style.js');

var BirthdayInfo = React.createClass({
  render: function() {
    return (
      <div className="birthdayInfo">
        <p>We are going to have a party!</p>
        <p>I am very cheapskate so I will ask the guests to bring something to the party.</p>
      </div>
      );
  }
});

module.exports = BirthdayInfo;