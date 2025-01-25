"use client";
import {  useParams } from "next/navigation";
import React, { useEffect } from "react";

export default function SingleBlog() {

  // Access the 'id' parameter from the URL
  const { id } = useParams();

  useEffect(() => {
    // This will run when the component mounts or when the 'id' changes
    if (id) {
      console.log("Blog ID:", id);
      // You can fetch data or perform other actions based on the ID here
    }
  }, [id]); // Dependency array includes 'id'

  return (
    <div>
      <h1>Blog Post</h1>
      {id ? <p>Blog ID: {id}</p> : <p>Loading...</p>}
    </div>
  );
}
