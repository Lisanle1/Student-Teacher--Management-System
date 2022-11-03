import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

function Tedit() {
  const navigate=useNavigate()
  let params=useParams()
  const formik = useFormik({
      initialValues: {
          teacherName: "",
          position: "",
          subject1: "",
          subject2: "",
          salary: "",
          startDate: ""
      },
      validate:(values) => {
          let errors = {}
          if (!values.teacherName) {
              errors.teacherName = "please enter the name"
          } else if (values.teacherName.length < 5) {
              errors.teacherName = "length should be more than 5 chars "
          }
        
          return errors
      },
      onSubmit: (values) => {
          axios.put(`https://628deacca339dfef87a35012.mockapi.io/users/${params.id}`, values);
          navigate("/portal/teachers")
      }
  })
  useEffect(()=>{
    getData()
  },[])
  let getData=async()=>{
    let res=await axios.get(`https://628deacca339dfef87a35012.mockapi.io/users/${params.id}`);
    formik.setValues(res.data);
  }
  return (
    <div className='container'>
    <form onSubmit={formik.handleSubmit} autoComplete="off">
        <div className='row'>
            <div className='col-lg-8'>
                <label>Name:</label>
                <input type="text" className='form-control' name='teacherName' onChange={formik.handleChange} value={formik.values.teacherName}></input>
                {
                  formik.errors.teacherName ? <span style={{color:'red'}}>{formik.errors.teacherName}</span> : null
                }
            </div>
            <div className='col-lg-8'>
                <label>Position:</label>
                <select className='form-control' name='position' onChange={formik.handleChange} value={formik.values.position}>
                    <option value="Nah">select the position</option>
                    <option value="Temporary staff">Temporary staff</option>
                    <option value="Permanent staff">Permanent staff</option>
                    <option value="HOD">HOD</option>
                </select>
            </div>
            <div className='col-lg-8'>
                <label>Subject-1:</label>
                <select className='form-control' name='subject1' onChange={formik.handleChange} value={formik.values.subject1}>
                    <option value="Nah">select subject-1</option>
                    <option value="English">English</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Maths">Maths</option>
                    <option value="Science">Science</option>
                    <option value="Social">Social</option>
                </select>
            </div>
            <div className='col-lg-8'>
                <label>Subject-2:</label>
                <select className='form-control' name='subject2' onChange={formik.handleChange} value={formik.values.subject2}>
                    <option value="Nah">select subject-2</option>
                    <option value="English">English</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Maths">Maths</option>
                    <option value="Science">Science</option>
                    <option value="Social">Social</option>
                </select>
            </div>
            <div className='col-lg-8'>
                <label>Salary:</label>
                <input type="text" className='form-control' name='salary' onChange={formik.handleChange} value={formik.values.salary}></input>
                {
                  formik.errors.salary ? <span style={{color:'red'}}>{formik.errors.salary}</span> : null
                }
            </div>
            <div className='col-lg-8'>
                <label>Start-Date:</label>
                <input type="date" className='form-control' name='startDate' onChange={formik.handleChange} value={formik.values.startDate}></input>
            </div>
            <div className="col-lg-12">
                <input type="submit" value="Submit" className="btn btn-primary text-center mt-4" disabled={!formik.isValid}></input>
            </div>
        </div>
    </form>
</div>
  )
}

export default Tedit