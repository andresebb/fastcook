import React, { useEffect, useState } from "react";
import {
  Wrapper,
  Img,
  Title,
  Container,
  SubContainer,
  Spam,
  List,
  ListText,
  Titleh3,
  Preparation,
} from "../styles/FoodDetail";

export const FoodDetail = (props) => {
  const id = props.match.params.Detailid;
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getFood(id);
  }, []);

  const getFood = async (id) => {
    setLoading(true);
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    setFood(data.meals[0]);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <p>Cargando... </p>
      ) : (
        <>
          <div>
            <Img width="210px" src={food.strMealThumb} alt="" />
          </div>
          <Wrapper>
            <Container>
              <Title>{food.strMeal}</Title>
              <SubContainer>
                <Spam>{food.strArea}</Spam>
                <Spam>{food.strCategory}</Spam>
              </SubContainer>
            </Container>
            <Titleh3>Ingredients</Titleh3>
            <List>
              <ListText>{food.strIngredient1}</ListText>
              <ListText>{food.strIngredient2}</ListText>
              <ListText>{food.strIngredient3}</ListText>
              <ListText>{food.strIngredient4}</ListText>
              <ListText>{food.strIngredient5}</ListText>
              <ListText>{food.strIngredient6}</ListText>
              <ListText>{food.strIngredient7}</ListText>
              <ListText>{food.strIngredient8}</ListText>
              <ListText>{food.strIngredient9}</ListText>
              <ListText>{food.strIngredient10}</ListText>
              <ListText>{food.strIngredient12}</ListText>
              <ListText>{food.strIngredient13}</ListText>
              <ListText>{food.strIngredient14}</ListText>
              <ListText>{food.strIngredient15}</ListText>
              <ListText>{food.strIngredient16}</ListText>
              <ListText>{food.strIngredient17}</ListText>
              <ListText>{food.strIngredient18}</ListText>
              <ListText>{food.strIngredient19}</ListText>
              <ListText>{food.strIngredient20}</ListText>
            </List>

            <Titleh3>Measure</Titleh3>
            <List>
              <ListText>{food.strMeasure1}</ListText>
              <ListText>{food.strMeasure2}</ListText>
              <ListText>{food.strMeasure3}</ListText>
              <ListText>{food.strMeasure4}</ListText>
              <ListText>{food.strMeasure5}</ListText>
              <ListText>{food.strMeasure6}</ListText>
              <ListText>{food.strMeasure7}</ListText>
              <ListText>{food.strMeasure8}</ListText>
              <ListText>{food.strMeasure9}</ListText>
              <ListText>{food.strMeasure10}</ListText>
              <ListText>{food.strMeasure12}</ListText>
              <ListText>{food.strMeasure13}</ListText>
              <ListText>{food.strMeasure14}</ListText>
              <ListText>{food.strMeasure15}</ListText>
              <ListText>{food.strMeasure16}</ListText>
              <ListText>{food.strMeasure17}</ListText>
              <ListText>{food.strMeasure18}</ListText>
              <ListText>{food.strMeasure19}</ListText>
              <ListText>{food.strMeasure20}</ListText>
            </List>
            <Titleh3>Preparation</Titleh3>
            <Preparation>{food.strInstructions}</Preparation>
          </Wrapper>{" "}
        </>
      )}
    </div>
  );
};
