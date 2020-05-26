const fetchData = url =>
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(response.error);
      return response.json();
    })
    .then(data => data)
    .catch(err => Promise.reject(err));

export const getRandomMeal = () =>
  fetchData("https://www.themealdb.com/api/json/v1/1/random.php").then(
    data => data.meals[0]
  );

export const getMealsByIngredient = ingredient => {
  fetchData(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient
      .toLowerCase()
      .split(" ")
      .join("_")}`
  );
};
export const getMealsByArea = area =>
  fetchData(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area.toLowerCase()}`
  );

export const getMealsByCategory = category =>
  fetchData(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${category.toLowerCase()}`
  );

export const getIngredients = () =>
  fetchData("https://www.themealdb.com/api/json/v1/1/list.php?i=list").then(
    data => data.meals.map(d => d.strIngredient)
  );

export const getCategories = () =>
  fetchData("https://www.themealdb.com/api/json/v1/1/list.php?c=list").then(
    data => data.meals.map(d => d.strCategory)
  );

export const getAreas = () =>
  fetchData("https://www.themealdb.com/api/json/v1/1/list.php?a=list").then(
    data => data.meals.map(d => d.strArea)
  );
