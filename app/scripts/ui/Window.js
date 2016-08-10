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
    var children;
    var styleObj;
    if (this.props.node.children.length !== 0) {
      children = this.props.node.children.map((node , index) => {
        return (<Window node={node} stateStyle={this.props.stateStyle} />);
      });
    }
    styleObj = JSON.parse(JSON.stringify(this.props.stateStyle));
    styleObj.background = this.props.node.background;
    styleObj.display = 'flex';
    if(this.props.node.orientation === null) {
      // styleObj.flexFlow = 'row wrap';
      console.log('hello woerld');
    }
    styleObj.flexGrow = 1;
    return (
        <div style={styleObj} onClick={this.add} >
        Window <br />
        {children}
        </div>
    );
  },
});

module.exports = Window;
