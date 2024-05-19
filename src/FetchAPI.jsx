import React, { useEffect, useState } from "react";

function FetchAPI() {
  const [data, setData] = useState([]);

  const getUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      <div className="text-[50px] text-center">Get API CAll</div>
      <table className=" border border-gray-800 ms-[25rem] mt-[5rem] ">
        <tr className="border border-gray-800">
          <td className="border border-gray-800 p-2"> id</td>
          <td className="border border-gray-800">name</td>
          <td className="border border-gray-800">username</td>
          <td className="border border-gray-800">email</td>
        </tr>
        {data.map((item) => (
          <tr>
            <td className="border border-gray-800 p-1">{item.id}</td>
            <td className="border border-gray-800">{item.name}</td>
            <td className="border border-gray-800">{item.username}</td>
            <td className="border border-gray-800">{item.email}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default FetchAPI;
