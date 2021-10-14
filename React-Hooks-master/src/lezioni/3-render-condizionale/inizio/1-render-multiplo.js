import React, { useState, useEffect } from "react";
import Axios from "axios";

const url = "https://api.github.com/users/QuincyLarson";

const ConditionalCompining = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  const getData = async () => {

    setIsError(false);

    setIsLoading(true);

    try {
      const response = await Axios.get(url);
      setUser(response.data);

    } catch (error) {
      console.log(error);
      setIsError(true);
    }

    setIsLoading(false);


  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <LoadingComponent />
  };

  if (isError) {
    return <ErrorComponent />
  };

  return (
    <article className='card d-flex align-items-center p-5 shadow mt-5'>
      <img
        src={user.avatar_url}
        alt={user.name}
        style={{width: '80px', height: '80px', border: 'solid 2px black'}}
        className='rounded-circle my-4 shadow'
      />
      <h3>{user.login}</h3>
    </article>
  );
};

const LoadingComponent = () => {
  return (
    <div className='shadow py-4 bg-lime'>
      <h2>Loading...</h2>
    </div>
  )
};

const ErrorComponent = () => {
  return (
    <div className='shadow py-4 bg-warning'>
      <h2>Error!</h2>
    </div>
  )
};

export default ConditionalCompining;
