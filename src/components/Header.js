import React from "react";
import "../App.css";

class Header extends React.Component {
  render(){
    return(
      <div>

        <header>
          
          <form onSubmit={this.props.films}>

            <input className="inputik" placeholder="Введите Запрос" type="text" name="query"></input>
            <button className="btn-search" type="button">Найти</button>

          </form>

        </header>

      </div>
    )
  }
}

export default Header