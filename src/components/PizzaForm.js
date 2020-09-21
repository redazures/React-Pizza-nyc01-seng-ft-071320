import React from "react"

const PizzaForm = ({topping,size,vegetarian,edit,submit}) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" name="topping" placeholder="Pizza Topping" value={
                topping
              } onChange={(e)=>edit(e)}/>
        </div>
        <div className="col">
          <select value={size} onChange={(e)=>edit(e)} name="size" className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" name="vegetarian" checked={!!vegetarian} onChange={(e)=>edit(e)}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" name="not-vegetarian" checked={vegetarian===false} onChange={(e)=>edit(e)}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(e)=>submit(e)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm