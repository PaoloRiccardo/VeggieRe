import styled from "styled-components"
import {motion} from "framer-motion";

const Title = () => {
  return (
    <Section animate={{
      scale: [1, 2, 2, 1, 1],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}>
        <div className="Hero-img">
            <h1>The Best Vegetarian Recipes</h1>
        </div>
    </Section>
  )
}

const  Section = styled(motion.div)`
margin: 2rem;

h1{
text-align: center;
font-family: "Lobster Two", cursive;
font-size: 5rem;
@media (max-width: 1068px) {
    font-size: 1.48rem;
  }
}


`;





export default Title