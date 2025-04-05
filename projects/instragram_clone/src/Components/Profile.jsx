import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [followers,setFollowers]=useState([])
    const [unfollow,setUnfollow]=useState(0);

    useEffect(() => {
        axios.get("http://localhost:3000/profile").
            then((data) => setProfile(data.data))


        axios.get('http://localhost:3000/followers').
        then((data)=>setFollowers(data.data))
    }, [unfollow])

         function  Handeler(e) {
            setProfile(prev=>({
                ...prev,[e.target.name]:e.target.value
            }))
        }

        const HandlerUpdate = async () =>{
                axios.put('http://localhost:3000/profile',profile).
                catch(err => console.log(err));
                
        }

        const HandleDelete = async (id) =>{

            axios.delete(`http://localhost:3000/followers/${id}`).
        then(alert("unfollow successfully")).
        then(setUnfollow(!unfollow))
        }

    return (
        <>
            <div className='m-5'>
            {
                profile ? (
                    <div>
                        <img src={profile.profile_pic} alt="" className='rounded-circle profile' />
                        <h5>{profile.username}</h5>
                        <input type="text" 
                            name='username'
                            value={profile.username}
                            className='form-control my-3'
                            onChange={Handeler}
                            
                        />
                        <input type="text" 
                            name='profile_pic'
                            value={profile.profile_pic}
                            className='form-control my-3'
                            onChange={Handeler}
                        />

                        <button className='btn btn-primary' onClick={HandlerUpdate}>Update</button>
                    </div>
                ) : (
                    <div> Loading the page </div>
                )
            }
            </div>

            <div className="followers">
    {
        followers.length > 0 ? (
            <div className='m-5'>
                {followers.map((follower) => (
                    <div key={follower.id} className='follow'> 
                        <h3>{follower.username}</h3>
                        <a className='ms-auto' onClick={()=>HandleDelete(follower.id)}>Unfollow</a>
                    </div>
                ))}
            </div>
        ) : (
            <div><h1>Loading followers...</h1></div>
        )
    }
</div>

        </>
    )
}

export default Profile