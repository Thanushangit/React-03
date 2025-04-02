import React, { useEffect, useState } from 'react'

const Suggestion = () => {

  const [profile, setProfile] = useState(null);
  const [Suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/profile").
      then((data) => data.json()).
      then(data => setProfile(data)).
      catch(err => console.log(err))
  }, [])


  useEffect(() => {
    fetch("http://localhost:3000/suggestion").
      then((data) => data.json()).
      then(data => setSuggestion(data)).
      catch(err => console.log(err))
  }, [])

  return (
    <div>
      <div className='suggestion w-75 m-4'>
        {
          profile ?

            <div className='d-flex align-items-center gap-3'>
              <img src={profile.profile_pic} alt="profile image" className='dp rounded-circle' />
              <h5>{profile.username}</h5>
              <small className='text-primary ms-auto'>Switch</small>
            </div>
            : <p>
              Loading
            </p>
        }

        <div className='d-flex my-4'>
          <p>Suggested for you</p>
          <b className='ms-auto'>See All</b>
        </div>


        {Suggestion.length > 0 ? (
          <div >
            {
              Suggestion.map((user) => (
                <div key={user.id}>

                  <div className='d-flex align-items-center gap-3'>
                    <img src={user.profile_pic} alt="profile image" className='dp rounded-circle' />
                    <h5>{user.username}</h5>
                    <b className='text-primary mb-2 ms-auto'>Follow</b>
                  </div>

                  <img className='post' src={user.image} alt="" />



                </div>
              ))
            }
          </div>
        ) :
          (
            <div>loading</div>
          )}



      </div>

    </div>
  )
}

export default Suggestion