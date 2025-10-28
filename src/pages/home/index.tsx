import RiseUsers from "../../components/RiseUsers";
import Header from "../../components/Header";
import Experts from "../../components/Experts";
import Footer from "../../components/Footer";
import React from "react";
import OurNumbers from "../../components/OurNumbers";
import OurOffers from "../../components/OurOffers";
import Transactions from "../../components/Transactions";
import OurExperts from "../../components/OurExperts";
import OurBlog from "../../components/OurBlog";
import OurCommunity from "../../components/OurCommunity";
import Download from "../../components/Download";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

function Main() {
  return (
    <main>
      <RiseUsers />
      <Experts />
      <OurNumbers />
      <OurOffers />
      <Transactions />
      <OurExperts />
      <OurBlog />
      <OurCommunity />
      <Download />
    </main>
  );
}
export default Home;
