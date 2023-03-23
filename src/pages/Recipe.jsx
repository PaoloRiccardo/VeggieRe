import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function Recipe() {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  },[])

  const fetchDetails = async () => {
    
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  useEffect(() => {
    document.title = "VeggieRe | Recipe";
  }, []);

  return (
    loading?
    <ClimbingBoxLoader

      color={"black"}
      loading={loading}
      size={20}
      cssOverride={override}
      aria-label="Loading Spinner"
      data-testid="loader"

    />
    :
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <motion.button
          style={{
            padding: "1rem 2rem",
            color: "#313131",
            background: "#fff",
            border: "2px solid #000",
            marginRight: "2rem",
            fontWeight: "600",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >

          Instructions
        </motion.button>
        <motion.button
          style={{
            padding: "1rem 2rem",
            color: "#313131",
            background: "#fff",
            border: "2px solid #000",
            marginRight: "2rem",
            fontWeight: "600",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={activeTab === "igredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </motion.button>
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map(({ id, original }) => (
              <li key={id}>{original}</li>
            ))}
          </ul>
        )}

        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin: 10rem inherit 5rem;
  display: flex;
  @media (max-width: 1068px) {
    flex-direction: column;
  }
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
  h2 {
    margin-bottom: 2rem;
  }
  ul {
    margin-top: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  p {
    margin: 1rem 0;
    font-size: 1.1rem;
    line-height: 1.8rem;
    &:first-child {
      margin-top: 2rem;
    }
  }
  img {
    object-fit: cover;
    border-radius: 2rem;
    @media (max-width: 1068px) {
      width: 75%;
    }
  }
`;

const Info = styled.div`
  margin-left: 5rem;
  @media (max-width: 1068px) {
    margin-top: 3rem;
    margin-left: 1rem;
  }
`;

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default Recipe;
