import React from "react";
import "./Footer.css";
import { useState, useEffect } from "react";
import { FooterGetPosts } from "../../../api/api";
const Footer = () => {
  const [dataFooter, setDataFooter] = useState([]);
  const fetchData = async () => {
    try {
      const data = await FooterGetPosts();
      setDataFooter(data);
    } catch (error) {
      console.error("Error fetching data : ", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="bg-[#FAFAFA] w-full grid grid-cols-1 md:grid-cols-3">
        {dataFooter.length > 0 ? (
          dataFooter.map((data) => (
            <div key={data.id} className="text-black">
              <h1>{data.title}</h1>
              {data.data.map((item) => (
                <div key={item.id}>
                  <a href="">{item.destination}</a>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>the Data server is down</p>
        )}
      </div>
    </>
  );
};

export default Footer;
