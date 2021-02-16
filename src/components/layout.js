import PropTypes from "prop-types";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "background-desktop.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <BackgroundImage Tag="div" fluid={imageData} backgroundColor={`#000`}>
      <div className="grid min-h-screen font-sans text-gray-900 place-items-center">
        <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
          {children}
        </main>
      </div>
    </BackgroundImage>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
