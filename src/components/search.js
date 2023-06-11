import { useEffect, useState } from "react";
import axios from "axios";
import Apikey from './apiKey';

const Search = ({ setValue }) => {
  const [City, Setcity] = useState("");

  const inputCity = (e) => {
    Setcity(e.target.value);
  };

  const Sendata = () => {
    setValue(City);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6 col-lg-4">
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              onChange={inputCity}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter City"
            />
            <button
              className="btn btn-primary"
              type="submit"
              onClick={Sendata}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
