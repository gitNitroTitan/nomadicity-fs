import React, { useState, useEffect } from 'react';
import { getAllHikes } from '../api/hikesData';
// import { signOut } from '../utils/auth';
// import { useAuth } from '../utils/context/authContext';
import HikeCardLite from '../components/HikeCardLite';

function Home() {
  const [hike, setHikes] = useState([]);
  // const { user } = useAuth();

  const getAllTheHikes = () => {
    getAllHikes().then((hikesArray) => {
      setHikes(hikesArray);
    });
  };

  useEffect(() => {
    getAllTheHikes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mainContainer">
      {/* <h1>Hello {user.fbUser.displayName}! </h1> */}
      {hike.map((hikes) => (
        <HikeCardLite key={hikes.id} hikeObj={hikes} onUpdate={getAllTheHikes} />
      ))}
    </div>
  );
}

export default Home;
