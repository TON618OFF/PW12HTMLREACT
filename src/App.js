import React from "react";
import Header from "./components/Header";
import Header2 from "./components/Header2";

const API_KEY = "R0YEDM0-BJR414H-GBEMX3W-V56GAW3"

class App extends React.Component{

  render(){
    return(
      <div>
        <Header/>
        <Header2/>
        <div>
          
          ageRating = {this.state.ageRating}
          url = {this.state.url}
          description = {this.state.description}
          
        </div> 
        
      </div>
    )
  }
}

export default App