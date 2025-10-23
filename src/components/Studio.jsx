import { useState, useEffect } from "react";
import "../assets/styles/_studio.scss";


function Studio() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] =useState(true);


  useEffect(() =>
    //During local dev -> from public folder
    //During deployement -> from Github raw
    const baseUrl =
      import.meta.env.Mode === "development"
      ? "/assets/data/studioServices.json"
      : ""
       
  )
}