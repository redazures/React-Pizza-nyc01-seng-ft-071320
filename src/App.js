import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state={
    data:[],
    // current:"",
    id:'',
    topping:'',
    size:'',
    vegetarian:''
  }

  componentDidMount=()=>{
    fetch('http://localhost:3000/pizzas')
    .then(res=>res.json())
    .then(objs=>this.setState(()=>({data:objs})))
  }

  pizzaToEdit=(obj)=>{
    console.log("getting pizza to be updated", obj)
    // this.setState(()=>({current:obj}))
    this.setState(()=>({id:obj.id, topping:obj.topping,size:obj.size,vegetarian:obj.vegetarian}))
  }

  submit=(e)=>{
    e.preventDefault()
    console.log("this is my submission", this.state)
    if (this.state.id){
      const {id, topping, size, vegetarian} = this.state
      fetch(`http://localhost:3000/pizzas/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify({
          topping:topping,
          size:size,
          vegetarian:vegetarian
        })
        }).then(res=>res.json()).then(string=>{
          let newArray=[...this.state.data]
          let newCats = newArray.map(el => (el.id === id ? string : el))
          this.setState(()=>({data:newCats}))
          console.log(this.state.data)
        })
    }
  }

  edit=(e)=>{
    console.log("this is my edit pizza",e.target.name, e.target.value)
    // this.setState({[e.target.name]:e.target.value})
    if (e.target.name==="not-vegetarian"){this.setState({vegetarian:false})}
    else if (e.target.name==="vegetarian"){this.setState({vegetarian:true})}
    else {this.setState({[e.target.name]:e.target.value})}
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm key={this.state.id} topping={this.state.topping} size={this.state.size} vegetarian={this.state.vegetarian} edit={this.edit} submit={this.submit}/>
        <PizzaList pizzas={this.state.data} pizzaToEdit={this.pizzaToEdit}/>
      </Fragment>
    );
  }
}

export default App;