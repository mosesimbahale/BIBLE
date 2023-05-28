import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const _index = () => {
  return (
    <div>
      <Navbar />

      <section className="hero is-primary is-bold pt-16">
        <p className="font-bold">Home page</p>
      </section>

      <Footer />
    </div>
  );
};

export default _index;
