import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const JobListing = () => {
  const { isSearched, searchFilter } = useContext(AppContext);

  return <div>JobListing</div>;
};

export default JobListing;
