import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import cvgLogo from "../images/logo.png";

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[]} title="Home" />

      <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={cvgLogo}
        />
      </section>
    </Layout>
  );
}

export default IndexPage;
