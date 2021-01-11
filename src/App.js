import React from "react";
// import logo from './logo.svg';
//import "./App.css";

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var payrsIndexes = [];

var tempVal = null;
var tempKey = null;
var obj = null;

var clickCount = 1;

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.show = this.show.bind(this);
  }

  show() {
    if (payrsIndexes.indexOf(this.props.number) !== -1) return;
    this.setState((state) => ({ active: !state.active }));

    if (clickCount === 2) {
      if (this.props.val === obj.props.val) {
        // console.log("suc", this.props.val, tempVal, tempKey);
        payrsIndexes.push(obj.props.number);
        payrsIndexes.push(this.props.number);
        this.setState((state) => ({ active: true }));

        if (payrsIndexes.length / 2 == arr.length) {
          alert("Ура!");
          window.location.reload();
        }
      } else {
        // console.log("err", this.props.number, this.props.val, tempVal, tempKey);
        setTimeout(
          function () {
            obj.setState((state) => ({ active: false }));
            this.setState((state) => ({ active: false }));
          }.bind(this),
          1000
        );
      }
      clickCount = 1;
      //this.setState((state) => ({ active: !state.active }));
    } else {
      obj = this;
      clickCount++;
      // this.setState((state) => ({ active: !state.active }));
    }
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
      this.props.data.forEach((item) => {
        arr.push(item);
      });
      i++;
    }

    const tpl = arr.map(function (item, i) {
      return <Item val={item} key={i} number={i} />;
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
