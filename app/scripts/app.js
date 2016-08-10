
var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    Panel = require("./ui/Panel"),
    Window = require("./ui/Window"),
    mountNode = document.getElementById("app");

var colors = [ 'blue', 'red', 'yellow', 'purple'];
var tree = {
  background: 'blue',
  orientation: null,
  height: '1',
  children: [{
    background: 'red',
    orientation: 'column',
    height: '2',
    children: [{
      background: 'purple',
      orientation: 'column',
      height: '4',
      children: [],
    }],
  },
  {
    background: 'yellow',
    orientation: 'column',
    height: '3',
    children: [],
  }],
}

function newNode (background, height) {
  var node = {};
  node.background = background;
  node.orientation = 'column';
  node.height = height;
  node.children = [];
  return node;
}

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      items: [],
      text: '',
      panelStyle: {
        height: 100,
        width: 100,
        display: 'inline-block',
        padding: 10,
        margin: 10,
      },
      style: {
        display: 'flex',
        padding: 10,
        margin: 10,
      },
      addPanel: [],
    };
  },
  // starting panels that can be chosen to be put into the window object
  buildPanels: function() {
    var panelArray = [];
    for( var i = 0; i < colors.length; i++) {
      var style = JSON.parse(JSON.stringify(this.state.panelStyle));
      style.background = colors[i];
      panelArray.push(<Panel styles={style} addPanel={this.addPanel} />);
    }
    return panelArray;
  },
  // this function changes sets state to current panel that will be added to the window
  addPanel: function(e) {
    var addPanel = [];
    addPanel.push(e.target.id);
    this.setState({ addPanel: addPanel });
  },
  // addWindow checks to see if a panel can be added to selected window, if it is it will be set to state
  editWindow: function (e) {
    if (this.state.addPanel.length !== 0) {
      this.addNode(tree, e.target.id, this.state.addPanel[0]);
      this.setState({addPanel: []});
    } else {
      this.removeNode
    }
  },
  // will add node to the nested object in the correct place
  addNode: function(node, height, panel) {
// if node height matches and the children length has room, then add a newNode
    if (node.height === height) {
      if (node.children.length !== 2) {
        var newHeight = Number(height[0]);
        newHeight++;
        node.children.push(newNode(panel, newHeight));
      }
    }
    // keep recursing through tree until there are no more children left
    for (var i = 0; i < node.children.length; i++) {
      this.addNode(node.children[i], height, panel);
    }
  },
  removeNode: function() {
    
  },
  render: function() {
    var panels = this.buildPanels();
    return (
      <div>
        {panels}
        <Window id={tree.height} node={tree} stateStyle={this.state.style} addWindow={this.addWindow} />
      </div>
    );
  }
});


ReactDOM.render(<TodoApp />, mountNode);
