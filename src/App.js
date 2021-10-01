import React from "react";
// import logo from './logo.svg';
//import "./App.css";

var arr = [1, 2, 3, 4]
var payrsIndexes = []
var tempVal = null
var tempKey = null
var obj = null
var timer
var clickCount = 1
var delay = 500
var tempArr = []
let counter = 0;
let time = 0;

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.show = this.show.bind(this);
  }

  async check() {
    console.log('fn check')

    await new Promise((resolve, reject) => {
      setTimeout(() => {
            for (let elem of tempArr) {
              elem.setState((state) => ({ active: false }));
        }
        resolve()
      }, delay)
    })

    tempArr = []
  }

 show() {
    //debugger;
    //console.log('tempArr.length = ' + tempArr.length)

    if (time == 0){
      setInterval(()=>{
        time++
      }, 1000)
    }

    if (this.state.active == true) return;

    if (!tempArr.includes(this) && tempArr.length < 2) {
      this.setState((state) => ({ active: true }))
      tempArr.push(this)
    }
    
    if (tempArr.length == 2) {
      if (tempArr[0].props.val !== tempArr[1].props.val) {
        this.check()
      } else {
        counter++
        if (counter == arr.length) {
          alert('Your time is ' + time)
          document.location.reload()
        } 
        tempArr = []
      }
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

   shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  render() {
    let arr = this.shuffle(this.props.data.concat(this.props.data))

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
