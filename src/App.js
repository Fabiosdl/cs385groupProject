import React, { Component } from "react";
import { locationsArray } from "./locations.js";
class App extends Component {
  // our App constructor - with some state variables.
  constructor(props) {
    super(props);
    this.state = {
      globalArray: locationsArray,
      myChoice: null,
      counties: [
        { id: "car", county: "Carlow" },
        { id: "cav", county: "Cavan" },
        { id: "clr", county: "Clare" },
        { id: "crk", county: "Cork" },
        { id: "don", county: "Donegal" },
        { id: "dub", county: "Dublin" },
        { id: "gal", county: "Galway" },
        { id: "ker", county: "Kerry" },
        { id: "kil", county: "Kildare" },
        { id: "kkn", county: "Kilkenny" },
        { id: "lao", county: "Laois" },
        { id: "ltr", county: "Leitrim" },
        { id: "lmk", county: "Limerick" },
        { id: "lgf", county: "Longford" },
        { id: "lth", county: "Louth" },
        { id: "mao", county: "Mayo" },
        { id: "mth", county: "Meath" },
        { id: "mgn", county: "Monagan" },
        { id: "off", county: "Offaly" },
        { id: "ros", county: "Roscomon" },
        { id: "slg", county: "Sligo" },
        { id: "tip", county: "Tipperary" },
        { id: "wtf", county: "Waterford" },
        { id: "wmt", county: "Westmeath" },
        { id: "wfd", county: "Wexford" },
        { id: "wlw", county: "Wicklow" }
      ]
    };
    this.handleListChange = this.handleListChange.bind(this);
  }
  // Event handler for the drop-down-list
  handleListChange(event) {
    // We assign the value of the event
    // The event is what is 'selected' from the list. This action
    // is an event.
    this.setState({ myChoice: event.target.value });
  }

  filterChoice(input) {
    return function (arrayObject) {
      return input == arrayObject.county;
    };
  }
  // we'll use a callback to sort the deserts in our array
  // we have used sort number of times now.
  // Use upper case for case-insensitive sorting
  sortDeserts(dx, dy) {
    let DX = dx.county.toUpperCase();
    let DY = dy.county.toUpperCase();
    if (DX > DY) return 1;
    else if (DX < DY) return -1;
    else return 0;
  }
  render() {
    return (
      <div className="App">
        <h1>Baobab Group</h1>
        <p />
        {/* <p>{this.globalArray[0].ID}</p> */}
        <h2>
          <b>Electric Vehicle Charging Venues</b>
        </h2>
        <form>
          Choose Desired County:
          <br />
          <p />
          <select onChange={this.handleListChange}>
            {this.state.counties.sort(this.sortCounties).map((sweet, key) => (
              <option key={key} value={sweet.county}>
                {sweet.county}
              </option>
            ))}
          </select>
        </form>
        <b>
          {this.state.myChoice && <p>Your choice: {this.state.myChoice}</p>}
        </b>
        {this.state.globalArray
          .filter(this.filterChoice(this.state.myChoice))
          .map((s) => (
            <div>
              <p>
                {s.county} &nbsp; {s.placename}
              </p>
            </div>
          ))}
      </div>
    );
  }
}
export default App;
