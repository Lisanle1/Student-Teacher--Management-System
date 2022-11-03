import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams,useNavigate } from 'react-router-dom';
function Tview() {
  const navigate=useNavigate();
  const [data, setData] = useState([]) 
  let params = useParams()
  useEffect(() => {
    getData()
  }, [])
  let getData = async () => {
    let res = await axios.get(`https://628deacca339dfef87a35012.mockapi.io/users/${params.id}`);
    setData(res.data);
  }
  return (
    <div className='col-lg-6'>
      <ul class="list-group">
        <li class="list-group-item active" aria-current="true">Teacher Details</li>
        <li class="list-group-item">{`Name : ${data.teacherName}`}</li>
        <li class="list-group-item">{`Position : ${data.position}`}</li>
        <li class="list-group-item">{`Subject-1 : ${data.subject1}`}</li>
        <li class="list-group-item">{`Subject-2 : ${data.subject2}`}</li>
        <li class="list-group-item">{`Salary : ${data.salary}`}</li>
        <li class="list-group-item">{`Start-Date : ${data.startDate}`}</li>
      </ul><br/>
      <button className="btn-sm btn-primary ml-1 " onClick={()=>navigate(-1)}>Go back</button>
    </div>
  )
}

export default Tview