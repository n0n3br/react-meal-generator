import React, { Fragment } from "react";
import { Title, Tag, Subtitle, Image, Row, IngredientList } from "./styled";

export default ({ meal, random, getRandomMeal }) => {
  const Ingredients = Object.keys(meal)
    .filter(key => key.includes("strIngredient") && meal[key])
    .map(key => {
      let ingredient = meal[key];
      const measure = meal[key.replace("Ingredient", "Measure")];
      if (isNaN(measure.slice(0, 1))) {
        ingredient += " " + measure;
      } else {
        ingredient = measure + " " + ingredient;
      }
      return <li key={key}>{ingredient}</li>;
    });

  const videoUrl = () =>
    meal.strYoutube.replace("watch", "embed").replace("?v=", "/");

  return (
    (meal.idMeal && (
      <Fragment>
        <Title>
          <span class="text">{meal.strMeal}</span>
          <span class="icons">
            {random && (
              <i
                class="fas fa-sync"
                title="Get another meal"
                onClick={getRandomMeal}
              />
            )}
            <i
              class="far fa-heart"
              title={meal.favorite ? "Unfavorite" : "Favorite"}
            />
            <i class="fas fa-print" title="Print" />
          </span>{" "}
        </Title>
        {meal.strTags &&
          meal.strTags.split(",").map(tag => <Tag key={tag}>#&nbsp;{tag}</Tag>)}
        <Tag>#&nbsp;{meal.strCategory}</Tag>
        <Tag>#&nbsp;{meal.strArea}</Tag>
        <Row>
          <div>
            {meal.strMealThumb && (
              <Image src={meal.strMealThumb} alt="preview" />
            )}
          </div>
          <div>
            <IngredientList>
              <li>
                <Subtitle>Ingredients</Subtitle>
              </li>
              {Ingredients}
            </IngredientList>
          </div>
        </Row>
        <Row>
          <div>{meal.strInstructions}</div>
        </Row>
        {meal.strYoutube && (
          <Row>
            <iframe
              src={videoUrl()}
              width="1019"
              height="573"
              frameBorder="0"
              allowFullScreen
              title="video guide"
            />
          </Row>
        )}
        <pre>{JSON.stringify(meal, null, 2)}</pre>
      </Fragment>
    )) ||
    null
  );
};
