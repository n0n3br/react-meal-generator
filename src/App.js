import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Random from "./components/Random";
import Find from "./components/Find";
import Nav from "./components/Nav";
import * as service from "./services";

export default function App() {
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const getFilterData = async () => {
      const ingredients = await service.getIngredients();
      const areas = await service.getAreas();
      const categories = await service.getCategories();
      setFilterData({ ingredients, areas, categories });
    };
    getFilterData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Switch>
            <Route path="/random">
              <Random getRandomMeal={service.getRandomMeal} />
            </Route>
            <Route path="/find">
              <Find filterData={filterData} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
