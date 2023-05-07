import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"John Simmmons"}
          feedback={"Wow what a portfolio, doesn't expected this to be on youtube!"}
        />

<TestimonialCard
          name={"Bessie Simmmons"}
          feedback={"Your Teaching skills are so good."}
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
