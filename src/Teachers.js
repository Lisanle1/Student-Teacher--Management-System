
import axios from 'axios'
import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
function Teachers() {
    let navigate=useNavigate();
    const [data,setData]=useState([])
    useEffect(() => {
      getdata()
     }, [])
     let getdata=async()=>{
        let res=await axios.get("https://628deacca339dfef87a35012.mockapi.io/users")
        setData(res.data)
     }
     const deleteteacher = async (id) => {
          let res=await axios.delete(`https://628deacca339dfef87a35012.mockapi.io/users/${id}`)
        const user=data.filter((e)=>e.id !== res.data.id)
        setData(user)
         
      }
  return (
    <div class="card shadow mb-4">
                        <div class="card-header py-3 d-flex justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary p-2 bd-highlight">Teachers details</h6>
                            <Link to={"/portal/teachers/createteacher"} className="btn btn-primary ms-auto p-2 bd-highlight">Create Teacher</Link>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Subject1</th>
                                            <th>Subject2</th>
                                            <th>Salary</th>
                                            <th>Start-Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        {
                                            data.map((e)=>
                                            <tr>
                                            <td>{e.teacherName}</td>
                                            <td>{e.position}</td>
                                            <td>{e.subject1}</td>
                                            <td>{e.subject2}</td>
                                            <td>{e.salary}</td>
                                            <td>{e.startDate}</td> 
                                            <td>
                                                <button className="btn-sm btn-success mr-2 " onClick={()=>{navigate(`/portal/teachers/view/${e.id}`)}}>View</button>
                                                <button className="btn-sm btn-warning mr-2 " onClick={()=>{navigate(`/portal/teachers/edit/${e.id}`)}}>Edit</button>
                                                <button className='btn-sm btn-danger'  onClick={()=>deleteteacher(e.id)}>Delete</button>
                                            </td>
                                        </tr>)
                                        }
                                      
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
  )
}

export default Teachers