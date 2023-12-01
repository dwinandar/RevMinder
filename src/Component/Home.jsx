import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Home = () => {
  const [jumlahData, setJumlahData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/jumlahdata');
        const data = response.data;

        if (response.ok) {
          // Assuming the response is an object with a key 'COUNT(*)'
          setJumlahData(data['COUNT(*)']);
        } else {
          console.error('Server response not okay:', data);
          // Handle the error, e.g., display an error message to the user
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error, e.g., display an error message to the user
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

  return (
    <div>
      {jumlahData !== null ? (
        <p>Jumlah Data: {jumlahData}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home