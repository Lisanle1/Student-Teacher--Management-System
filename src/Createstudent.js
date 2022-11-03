import { useFormik } from 'formik'
import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Createstudent() {
    const [data,setData]=useState([])
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            studentName: "",
            standard: "",
            subject1: "",
            subject2: "",
            subject3: "",
            teacher: ""
        },
        validate: (values) => {
            let errors = {}
            if (!values.studentName) {
                errors.studentName = "please enter the name"
            } else if (values.studentName.length < 5) {
                errors.studentName = "length should be more than 5 chars "
            }
            if (!values.teacher) {
                errors.teacher = "please enter the teacher name"
                return errors
            }
        },
        onSubmit: (values) => {
            axios.post("https://63629b4a66f75177ea340461.mockapi.io/students", values);
            navigate("/portal/students")
        }
    })
    useEffect(() => {
        getData()
    }, []);
    let getData = async () => {
        let res = await axios.get("https://628deacca339dfef87a35012.mockapi.io/users");
       
        setData(res.data);
    }
    return (
        <div className='container'>
            <form onSubmit={formik.handleSubmit} autoComplete="off">
                <div className='row'>
                    <div className='col-lg-8'>
                        <label>Name:</label>
                        <input type="text" className='form-control' name='studentName' onChange={formik.handleChange} value={formik.values.studentName}></input>
                        {
                            formik.errors.studentName ? <span style={{color:'red'}}>{formik.errors.studentName}</span> : null
                        }
                    </div>

                    <div className='col-lg-8'>
                        <label>Standard:</label>
                        <select className='form-control' name='standard' onChange={formik.handleChange} value={formik.values.standard}>
                            <option value="Nah">select the standard</option>
                            <option value="Ⅰ">Ⅰ</option>
                            <option value="Ⅱ">Ⅱ</option>
                            <option value="Ⅲ">Ⅲ</option>
                            <option value="Ⅳ">Ⅳ</option>
                            <option value="Ⅴ">Ⅴ</option>
                            <option value="Ⅵ">Ⅵ</option>
                            <option value="Ⅶ">Ⅶ</option>
                            <option value="Ⅷ">Ⅷ</option>
                            <option value="Ⅸ">Ⅸ</option>
                            <option value="Ⅹ">Ⅹ</option>
                            <option value="Ⅺ">Ⅺ</option>
                            <option value="Ⅻ">Ⅻ</option>
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
                        <label>Subject-3:</label>
                        <select className='form-control' name='subject3' onChange={formik.handleChange} value={formik.values.subject3}>
                            <option value="Nah">select subject-3</option>
                            <option value="English">English</option>
                            <option value="Tamil">Tamil</option>
                            <option value="Maths">Maths</option>
                            <option value="Science">Science</option>
                            <option value="Social">Social</option>
                        </select>
                    </div>
                    <div className='col-lg-8'>
                        <label>Teacher:</label>
                        <select className='form-control' name='teacher' onChange={formik.handleChange} value={formik.values.teacher}>
                        <option value="">select teacher</option>
                        {
                            formik.errors.teacher ? <span style={{color:'red'}}>{formik.errors.teacher}</span> : null
                        }
                            {
                                data.map((data) => {
                                    return  <option value={data.teacherName}>{`${data.teacherName}`}</option>
                                    
                                })
                            }
                        </select>
                       
                    </div>
                    <div className="col-lg-12">
                        <input type="submit" value="Submit" className="btn btn-primary text-center mt-4" disabled={!formik.isValid}></input>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Createstudent