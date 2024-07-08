import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function DeletCatagory() {
    const [data,setData] = useState([]);
    const {id} = useParams();
    const Navigate = useNavigate();

    useEffect(()=>{
        axios.delete(`http://localhost:8000/addcategory/${id}`).then((response)=>{
            setData(response.data);

            Swal.fire({
                title: "Wow",
                text: "Category successfully deleted",
                icon: "error"
              });
              Navigate('/adminlayout/managecatagory');
        })
    },[])
  return (
    <div>
      
    </div>
  )
}
