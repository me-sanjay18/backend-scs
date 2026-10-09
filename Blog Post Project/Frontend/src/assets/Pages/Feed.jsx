import React, { useState, useEffect } from 'react'

import axios from 'axios'

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id: 1,
            image: "https://picsum.photos/200/300",
            caption: "Test Image"
        }
    ])

    useEffect(()=>{
            axios.get('http://localhost:4000/posts')
            .then((res)=>{
                setPosts(res.data.posts)
            })
    },[])

    return (
        <div className='p-4'>
            <h1 className='text-center text-5xl'>Feed</h1>
            <div className='h-full w-full flex gap-5'>
                {posts.map((post) => {
                    return (
                        <div key={post._id} className='h-[50%] w-[15%] bg-[#0F0F0F] p-3 flex flex-col items-center justify-between rounded-2xl border'>
                            <img src={post.image} alt={post.caption} className='h-[90%] rounded-2xl' />
                            <p>{post.caption}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Feed