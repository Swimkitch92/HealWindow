'use strict';

var React = require('react');



var Panel = React.createClass({

  render: function() {
    console.log(this.props.styles);
    return (
      <div
        id={this.props.styles.background}
        className={this.props.item}
        style= {this.props.styles}
        onClick={this.props.addPanel}
      >
      </div>
    );
  }
});

module.exports = Panel;
