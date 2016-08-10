
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
    height: '2-1',
    children: [{
      background: 'purple',
      orientation: 'column',
      height: '3-1',
      children: [],
    }],
  },
  {
    background: 'yellow',
    orientation: 'column',
    height: '2-2',
    children: [],
  }],
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
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
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
  addPanel: function(e) {
    var addPanel = [];
    addPanel.push(e.target.id);
    this.setState({ addPanel: addPanel });
  },
  addWindow: function (e) {
    if (this.state.addPanel.length !== 0) {
      console.log(e.target.id);
    }
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
