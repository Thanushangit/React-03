import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';


const Viewstory = () => {
    const { id,tot } = useParams();
    const [story, setStory] = useState(null);

    const navigate=useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/story/${id}`)
            .then((response) => response.json())
            .then((data) => setStory(data))
            .catch((err) => console.log(err));
    }, [id]);

    if(id>tot || id<=0){
      navigate('/')
    }

    return (
      <div>
          {story !== null ? (
              <div className="d-flex justify-content-center vh-100 single-story">
                  <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i className="bi bi-arrow-left-circle-fill"></i></Link>
                  <img src={story.image} alt="Story" className="story-image" />
                  <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i className="bi bi-arrow-right-circle-fill"></i></Link>
              </div>
          ) : (
              <div>Loading...</div>
          )}
      </div>
  );
  
}

export default Viewstory;
