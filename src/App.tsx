import { useEffect } from 'react'
import { Link } from "react-router-dom";
import './styles/styles.scss'
import { eventEmitter } from "utils/eventEmitter.util";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Routes from 'routes';

function App() {
  const dispatch = useDispatch();


  //axios middleware to check does we got 502 in response , if yes then need to clear the redux state and uesr need to login again
  axios.interceptors.response.use(
    function (response) {
      // If the response was successful, just return it
      return response;
    },
    function (error) {
      // If the response had a status of 502, emit the 'tokenExpired' event
      if (error.response && error.response.status === 502) {
        eventEmitter.emit('tokenExpired');
      }
      return Promise.reject(error);
    }
  );


  useEffect(() => {
    eventEmitter.on('tokenExpired', () => {
      localStorage.removeItem('token'); // Remove the token from local storage
    });

    // Clean up the event listener when the component unmounts
    return () => {
      eventEmitter.off('tokenExpired', (args) => { console.log(args) });
    };
  }, [dispatch]);

  return (
    <>
      <div className="header">
        <Link to=''>Home</Link>
        <Link to='/example'>Example</Link>
        <Link to='/testing'>Testing</Link>
      </div>
      <Routes />
    </>)
}

export default App