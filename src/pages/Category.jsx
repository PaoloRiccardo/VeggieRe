import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
function Category() {
  const [category, setCategory] = useState([]);
  let params = useParams();

  const getCategory = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&diet=vegetarian`
    );
    const recipes = await data.json();
    setCategory(recipes.results);
  };

  useEffect(() => {
    getCategory(params.type);
    console.log(params.type);
  }, [params.type]);

  useEffect(() => {
    document.title = "VeggieRe | Category";
  }, []);

  return (
    <Grid>
      {category.map((item) => {
        return (
          <Card whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled(motion.div)`
  img {
    width: min(400px, 100%);
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default Category;
