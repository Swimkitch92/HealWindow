'use strict';

var React = require('react');
var Panel = require('./Panel');


var Window = React.createClass({
  getInitialState: function () {
    return {
      orientation: 'column',
      children: [],
    };
  },
  // if a window is full, ie 2 children, then return true
  isFull: function () {
    if (this.state.children.length < 2) {
      return false;
    }
    else {
      return true;
    }
  },
  
  addChildren: function () {
    if (this.props.isFull) {
      if (this.state.children.length < 2) {
        var windowArray = this.state.children.slice();
        windowArray.push(<Window />);
        this.setState({ children: windowArray });
      }
    }
  },
  render: function() {
    return (
      <div>
        Window <br />
        <Window isFull={this.isFull} />
      </div>
    )
  },
});

module.exports = Window;
