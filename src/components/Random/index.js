import React, { Fragment, useEffect, useState, useCallback } from "react";
import Meal from "../Meal";

export default ({ getRandomMeal }) => {
  const [meal, setMeal] = useState({});

  const update = useCallback(async () => {
    const data = await getRandomMeal();
    setMeal(data);
  }, [getRandomMeal]);

  useEffect(() => {
    update();
  }, []);

  return (
    <Fragment>
      <Meal meal={meal} random={true} getRandomMeal={update} />
    </Fragment>
  );
};
