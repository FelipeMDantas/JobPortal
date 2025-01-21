import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories } from "../assets/assets";

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter } = useContext(AppContext);

  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      <div className="w-full lg:w-1/4 bg-white px-4">
        {isSearched &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
              <h3 className="font-medium text-lg mb-4">Current Search</h3>
              <div className="mb-4 text-gray-600">
                {searchFilter.title && (
                  <span
                    className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 
                  py-1.5 rounded"
                  >
                    {searchFilter.title}
                    <img
                      onClick={(e) =>
                        setSearchFilter((prev) => ({ ...prev, title: "" }))
                      }
                      className="cursor-pointer"
                      src={assets.cross_icon}
                      alt=""
                    />
                  </span>
                )}
                {searchFilter.location && (
                  <span
                    className="inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 
                  py-1.5 rounded"
                  >
                    {searchFilter.location}
                    <img
                      onClick={(e) =>
                        setSearchFilter((prev) => ({ ...prev, location: "" }))
                      }
                      className="cursor-pointer"
                      src={assets.cross_icon}
                      alt=""
                    />
                  </span>
                )}
              </div>
            </>
          )}

        <div>
          <h4>Search by Categories</h4>
          <ul>
            {JobCategories.map((category, index) => (
              <li key={index}>
                <input type="checkbox" name="" id="" />
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
