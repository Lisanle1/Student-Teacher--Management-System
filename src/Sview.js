import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams,useNavigate } from 'react-router-dom';

function Sview() {
  const navigate=useNavigate();
  const [data, setData] = useState([])
  let params = useParams()
  useEffect(() => {
    getData()
  }, [])
  let getData = async () => {
    let res = await axios.get(`https://63629b4a66f75177ea340461.mockapi.io/students/${params.id}`);
    setData(res.data);
  }
  return (
    <div className='col-lg-6'>
      <ul class="list-group">
        <li class="list-group-item active" aria-current="true">Student Details</li>
        <li class="list-group-item">{`Name : ${data.studentName}`}</li>
        <li class="list-group-item">{`Standard : ${data.standard}`}</li>
        <li class="list-group-item">{`Subject-1 : ${data.subject1}`}</li>
        <li class="list-group-item">{`Subject-2 : ${data.subject2}`}</li>
        <li class="list-group-item">{`Subject-3 : ${data.subject3}`}</li>
        <li class="list-group-item">{`Teacher : ${data.teacher}`}</li>
      </ul><br/>
      <button className="btn-sm btn-primary ml-1 " onClick={()=>navigate(-1)}>Go back</button>
    </div>
  )
}

export default Sview