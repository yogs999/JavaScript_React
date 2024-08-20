import RestaurantCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import mockData from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurent, setListRestaurent] = useState([]);

  // hooks is normal javaScript function react give to use it has its own specific useCase  ex useState and useEffect
  // useEffect is hooks
  // it is called after all component render
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListRestaurent(
      json.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // if data rerender then we need showing progressbar or somthing else

  // if (listOfRestaurent.length === 0) {
  //   return <h1>loading..................</h1>;
  // }

  // this is also known as conditional rendring
  if (listOfRestaurent.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter_btn"
          onClick={() => {
            const filterList = listOfRestaurent.filter(
              (res) => res.info.avgRating > 4
            );
            setListRestaurent(filterList);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurent?.map((info) => (
          <RestaurantCard key={info.info.id} resData={info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
