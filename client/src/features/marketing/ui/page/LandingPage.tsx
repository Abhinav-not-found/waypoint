import { useEffect, useState } from "react";
import axios from "axios";

const LandingPage = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const gettingBackend = async () => {
      try {
        const res = await axios.get('/api/test')
        console.log(res.data)
        setData(res.data.message)
      } catch (error) {
        console.log('Error', error)
      }
    }
    gettingBackend()

  }, []);
  return (
    <div>
      LandingPage
      <p>{data}</p>
    </div>
  )
}

export default LandingPage