import * as React from "react";
import "./homepage.scss";
import Banner from "../../sections/acceuil/acceuil-home/banner/banner";
import DescHome from "../../sections/acceuil/acceuil-home/deschome/descHome";
import Services from "../../sections/acceuil/acceuil-home/ourServices/service";
import Footer from "../footer/footer";
import Divers from "../../sections/acceuil/acceuil-home/divers/divers";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <>
      <Banner />
      <DescHome />
      <Services />
      <Divers />
      <Footer />
    </>
  );
};

export default Home;


