import React from "react";
// import logo from './logo.svg';
//import "./App.css";

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var temp = null;

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.show = this.show.bind(this);
  }

  show() {
    if (temp == this.props.val) alert();

    temp = this.props.val;

    debugger;
    this.setState(state => ({ active: !state.active }));
  }

  render() {
    return (
      <div
        className={this.state.active ? "active" : "noactive"}
        onClick={this.show}
      >
        {" "}
        {/* используем id в качестве ключа */}
        <span>{this.props.val}</span>
        {/*this.props.data[  Math.round(Math.random() *  this.props.data.length-1)  ]*/}
      </div>
    );
  }
}

class Items extends React.Component {
  render() {
    // var arr  = _.fill(Array(this.props.data.length*2), 1)

    var i = 0,
      arr = [];

    while (i < 2) {
      this.props.data.forEach(item => {
        arr.push(item);
      });
      i++;
    }

    const tpl = arr.map(function(item, i) {
      return <Item style="display:none" val={item} key={i} />;
    });

    return <div className="map">{tpl}</div>;
  }
}

const App = () => {
  return (
    <React.Fragment>
      <Items data={arr} />
    </React.Fragment>
  );
};

export default App;
