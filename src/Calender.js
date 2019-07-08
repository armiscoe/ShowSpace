import React, { Component } from "react"
import showList from "./showList"
import ShowDetail from "./Show"

class Calender extends Component {
    constructor() {
        super()
        this.state = {
        shows: showList
      }
    }

    render() { 
        const gigList = this.state.shows.map(show => <ShowDetail key={show.id} show={show} />)
        return ( 
            <div className="show-list">
                {gigList}
            </div>
         );
    }
}
 
export default Calender;