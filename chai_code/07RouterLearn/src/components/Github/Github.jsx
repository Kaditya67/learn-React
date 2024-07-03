// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data=useLoaderData()

//   const [data, setData] = useState(null);
//   useEffect(() => {
//     fetch('https://api.github.com/users/Kaditya67')
//       .then(res => res.json())
//       .then(data => setData(data));
//   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers: {data ? data.followers : 'Loading...'}
      <img src={data.avatar_url} alt="Github Profile Picture" className="w-[300px]"/>
    </div>
  );
}

export default Github;
