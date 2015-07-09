var React = require('react');
var BirthdayContentPage = require('../app/components/BirthdayContentPage.jsx');

var guestList = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
React.render(<BirthdayContentPage guestList={guestList} />, document.getElementById("app"));