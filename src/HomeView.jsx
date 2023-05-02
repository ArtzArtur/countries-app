import { useEffect } from "react";
import { handleData, handleFilter } from "./store/actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CountryItem from "./CountryItem";
import Loader from "./Loader";

function HomeView() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.countryReducer.filteredData);
  const isLoading = useSelector(state=>state.loaderReducer.isLoading)
  useEffect(() => {
    dispatch(handleData());
  }, []);
  return (
    <div className="container-sm">
      <form className="form py-5">
      <h2 className="display-5">Search for your country:</h2>
        <input
          className="form-control-lg border border-1 rounded text-center mx-auto"
          type="text"
          placeholder="Country name"
          onChange={(e) => dispatch(handleFilter(e.target.value))}
        />
      </form>
      <div>{isLoading ? <div>
        <Loader />
      </div> : null}</div>
      <div className="row gap-2 justify-content-center">
          {data && !isLoading
            ? data.map((country, index) => (
                <CountryItem country={country} key={index} />
              ))
            : null}
      </div>
    </div>
  );
}

export default HomeView;
