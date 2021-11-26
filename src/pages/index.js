import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import styled from "styled-components";

const Wrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Img = styled(GatsbyImage)`
  width: 100%;
  max-width: 150px;
`;

const BridgeTest = () => {
  const { placeholderImage, avatar } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bg.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        avatar: file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 150
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    `
  );
  const pluginImage = getImage(placeholderImage);
  const test = getImage(avatar);
  console.log("test", test);

  return (
    <BgImage image={pluginImage} style={{ minWidth: 200, minHeight: "800px" }}>
      <Wrap>
        <div>Hello from BgImage!</div>
        <Img image={test} />
      </Wrap>
    </BgImage>
  );
};

export default BridgeTest;
