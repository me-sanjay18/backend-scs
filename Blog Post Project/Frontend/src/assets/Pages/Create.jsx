import React from 'react'

import axios from 'axios'

import {useNavigate} from 'react-router-dom'

const CreatePost = () => {

    const navigate=useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        const formData=new FormData(e.target)

        axios.post('http://localhost:4000/create-post', formData)
        .then(res=>{    
            // alert('Post created successfully')
            // e.terget.reset
            // console.log(res)
            navigate('/feed')
        }).catch(err=>{
            consol.log(err)
            alert('Post creating error')
        })
    }

    return (
        <div className='h-full w-full flex justify-center items-center'>
            <div className='h-[70%] w-[30%] flex flex-col items-center justify-around bg-[#0F0F0F] rounded-2xl border-2'>
                <h1 className='text-6xl'>Create Post</h1>

                <form className='h-[80%] flex flex-col items-center justify-around  ' onSubmit={handleSubmit}>
                    <input className='py-2.5 px-3 border-2 border-solid rounded-[25px] h-[15%] w-full' type='file' name='image' accept='image/*' required />
                    <input className='py-2.5 px-3 border-2 border-solid rounded-[25px] h-[15%] w-full px-1 outline-0' type='text' name='caption' placeholder='Enter Caption' required />
                    <button className='py-1  border-2 border-solid rounded-[10px] h-[15%] w-full' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost