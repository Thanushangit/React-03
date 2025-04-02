import React, { useEffect, useState } from 'react'

const Posts = () => {

    const [posts,setPosts]=useState([]);

    useEffect(()=>{
            fetch("http://localhost:3000/posts").
            then((data)=>(data.json())).
            then((data)=>setPosts(data)).
            catch(err=>console.log(err))
    },[])

  return (
    <div className='d-flex justify-content-center'>
        {posts.length>0?(
            <div >
                {
                    posts.map((user)=>(
                        <div key={user.id} className='my-4'> 
                        
                        <div className='d-flex align-items-center gap-3'>
                            <img src={user.user.profile_pic} alt="profile image" className='dp rounded-circle' />
                            <h5>{user.user.username}</h5>
                        </div>

                        <img className='post' src={user.image} alt="" />
                        <div>
                        <i className="bi bi-heart"></i>
                        <i className="bi bi-chat"></i>
                        <i className="bi bi-send"></i>
                        </div>
                        
                        <div>
                            <b>{user.likes} Likes</b>
                        </div>

                        <p>{user.caption}</p>


                        </div>
                    ))
                }
            </div>
        ):
        (
            <div>loading</div>
        )}
    </div>
  )
}

export default Posts