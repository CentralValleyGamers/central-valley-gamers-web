import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import cvgLogo from "../images/logo.png";
import DiscordLogo from "../images/discord.svg";
import InstagramLogo from "../images/instagram.svg";
import TwitchLogo from "../images/twitch.svg";
import TwitterLogo from "../images/twitter.svg";
import YoutubeLogo from "../images/youtube.svg";

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
        <div className="flex flex-row justify-between">
          <a href="https://discord.gg/3G8Yj6X" title="Discord">
            <DiscordLogo width={50} className="fill-current text-white" />
          </a>
          <a
            href="https://www.instagram.com/centralvalleygamers/"
            title="Instagram"
          >
            <InstagramLogo width={50} className="fill-current text-white" />
          </a>
          <a href="https://www.twitch.tv/centralvalleygamers" title="Twitch">
            <TwitchLogo width={50} className="fill-current text-white" />
          </a>
          <a href="https://twitter.com/CenValleyGamers" title="Twitter">
            <TwitterLogo width={50} className="fill-current text-white" />
          </a>
          <a
            href="https://www.youtube.com/user/CentralValleyGamers"
            title="YouTube"
          >
            <YoutubeLogo width={50} className="fill-current text-white" />
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
