import axios from 'axios'
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
function Students() {
   let navigate=useNavigate();
    const [data,setData]=useState([])
    useEffect(() => {
      getData()
     }, [])
     let getData=async()=>{
        let res=await axios.get("https://63629b4a66f75177ea340461.mockapi.io/students")
        setData(res.data)
     }
     const deletestudent = async (id) => {
          const res=await axios.delete(`https://63629b4a66f75177ea340461.mockapi.io/students/${id}`)
            const user=data.filter((e)=>e.id !== res.data.id)
            setData(user)      
      }
  return (
    <div class="card shadow mb-4">
                        <div class="card-header py-3  d-flex justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary  p-2 bd-highlight">Students details</h6>
                            <Link to={"/portal/students/createstudent"} className="btn btn-primary ms-auto p-2 bd-highlight">Create Student</Link>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            
                                            <th>Name</th>
                                            <th>Standard</th>
                                            <th>Subject-1</th>
                                            <th>Subject-2</th>
                                            <th>Subject-3</th>
                                            <th>Teacher</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        {
                                            
                                            data.map((e)=>
                                            <tr>
                                            
                                            <td>{e.studentName}</td>
                                            <td>{e.standard}</td>
                                            <td>{e.subject1}</td>
                                            <td>{e.subject2}</td>
                                            <td>{e.subject3}</td>
                                            <td>{e.teacher}</td>
                                            <td>
                                            <button className="btn-sm btn-success mr-2 " onClick={()=>{navigate(`/portal/students/view/${e.id}`)}}>View</button>
                                                <button className="btn-sm btn-warning mr-2 " onClick={()=>{navigate(`/portal/students/edit/${e.id}`)}}>Edit</button>
                                                <button className='btn-sm btn-danger'  onClick={()=>deletestudent(e.id)}>Delete</button>
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

export default Students