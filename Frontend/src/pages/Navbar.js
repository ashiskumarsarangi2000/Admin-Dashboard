import {React,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS if not using CDN

const Navbar =()=> {
   
  
  return (
    <>
      <nav className="navbar navbar-light bg-light mt-5 ">
    
    
      <div className='d-flex justify-content-between' style={{ backgroundColor: '#800080', width: '98vw', height: '50px', padding: '0px 0px' }}>
        <div className='d-flex align-items-center'>
          <img src="./logo.png" width="30" height="30" className="d-inline-block align-top" alt="Logo"/>
          <h4 style={{ color: 'white', marginLeft: '10px' }}>TableSprint</h4>
        </div>
       
        <a className="navbar-brand" href="/" data-bs-toggle="modal" data-bs-target="#exampleModal">
          {/* <img src="./assets/person-circle.svg" width="30" height="30" className="d-inline-block align-top" alt="Logo" style={{ filter: 'invert(100%)' }}/> */}
          <i className="bi bi-person-circle"></i>
        </a>
      </div>
      
      </nav>


   

{/* <!-- Modal --> */}
<div class="modal " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Log Out</h5>
      
      </div>
      <div class="modal-body">
        Are you sure you want to log out ?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-light rounded-4 border-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" className="btn rounded-4" style={{background:'#800080',color:'white'}} >Confirm</button>
        </div>
    </div>
  </div>
</div>
    </>
  );
}

export default Navbar;