import React, { useState, useEffect } from "react";

import yelp from "../yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    console.log("Hi there!");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setErrorMessage("");
      setResults(response.data.businesses);
      console.log(response);
    } catch (err) {
      setErrorMessage("Somethings went wrong : " + err);
      setResults([]);
      console.log(err);
    }
  };

  //Call searchApi when componnet
  //is first rendered.
  //searchApi('pasta');
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};
