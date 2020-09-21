import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {


  makePizza= ()=>{
    const {pizzas, pizzaToEdit} = this.props
    return pizzas.map(el=><Pizza key={el.id} el={el} pizzaToEdit={pizzaToEdit}/>)
  }

  render() {
    // console.log(this.state)
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.makePizza()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;