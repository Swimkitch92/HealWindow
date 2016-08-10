
var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    Panel = require("./ui/Panel"),
    Window = require("./ui/Window"),
    mountNode = document.getElementById("app");

var colors = [ 'blue', 'red', 'yellow', 'purple'];

/*
  panelsRepository:{
    panels.push(new Panel(props))'
    panels.push(new Panel{props})'
  }
  }
  panels:[]

  addPanel(panel){

  panels.push(panel);

  render:function(){

    {}
  }
}
}
*/

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      items: [],
      text: '',
      style: {
        height: 100,
        width: 100,
        display: 'inline-block',
        padding: 10,
        margin: 10,
      },
      possiblePanel: [],
      window: {
        orientation: 'column',
        children:[],
        background: 'black',
      },
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
      var style = {};
      style.height = this.state.style.height;
      style.width = this.state.style.width;
      style.display = this.state.style.display;
      style.padding = this.state.style.padding;
      style.margin = this.state.style.margin;
      style.background = colors[i];
      panelArray.push(<Panel styles={style} />);
    }
    return panelArray;
  },
  //
  render: function() {
    var panels = this.buildPanels();
    return (
      <div>
        {panels}
        <Window />
      </div>
    );
  }
});


ReactDOM.render(<TodoApp />, mountNode);
