import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = ({
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {

  let clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload(false);
  };


  return (
    
    <div className="col-3">
      <div className='text-center fw-bold fs-4 mb-2'>Filters</div>
      
      <div 
        style = {{cursor:'pointer'}}
        onClick={clear}
        className='text-center text-primary text-decoration-underline mb-4'
        > Clear filters</div>
        
      <div className="accordion" id="accordionExample">
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
        />
        <Gender
          updatePageNumber={updatePageNumber}
          updateGender={updateGender}
        />
      </div>
    </div>
  )
}

export default Filters