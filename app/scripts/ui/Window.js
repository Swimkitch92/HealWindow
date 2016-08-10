'use strict';

var React = require('react');
var Panel = require('./Panel');


var Window = React.createClass({

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
    styleObj.flexGrow = 1;
    return (
        <div id={this.props.node.height} style={styleObj} onClick={this.props.editWindow} >
        Window <br />
        {children}
        </div>
    );
  },
});

module.exports = Window;
