import React from 'react'

export const Add_reqiure_page = () => {
  return (
<div>
    <div>
    <h1>Add Requirment Page</h1>
    <p>so that other user can contact you </p>
    </div>
    <div>
    <div>
        <label htmlFor="">Add your location</label>
        <input type="text" />
    </div>

    <div>
        <label htmlFor="">Approx Rent <br />
        <input type="text" name="" id="" />
        </label>
    </div>
    </div>

    <div>
    <div>
    <fieldset className='border w-40'>
    <legend>Looking For</legend>
      <button value= "Male">  Male</button>
      <button value= "FeMale">  Female</button>
      <button value= "Any">  Any</button>
 </fieldset>
    </div>

    <div>
        <fieldset className='border w-40'>
          <legend>Occupancy</legend>
        <div>
        <button value='Single'>Single</button>
        <button value='Shared'>Shared</button>
        <button value= 'Any'>Any</button>
        </div>
        </fieldset>
    </div>
    </div>
    
    <div>
        <p>Choose Highlight for your property</p>
    </div>
</div>
  )
}
