import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"John eric"}
          feedback={"Wow what a portfolio.I started my software development career as an intern. "}
        />

<TestimonialCard
          name={"Bessie Simmons"}
          feedback={"We would like to express our satisfaction on the cooperation regarding the development of our web application."}
        />

      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"



      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
