import React from "react"

const Pizza = ({el, pizzaToEdit}) => {
  // console.log(props)
  return(
    <tr>
      <td>{el.topping}</td>
      <td>{el.size}</td>
      <td>{el.vegetarian ? "Yes" : "No"}</td>
      <td><button type="button" className="btn btn-primary" onClick={()=>pizzaToEdit(el)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza