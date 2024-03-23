import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard name={"Sohail"} feedback={"Your skills are good"} />
        <TestimonialCard name={"Ameen"} feedback={"Your teaching are good"} />
        <TestimonialCard name={"Atikur"} feedback={"Your skills are good"} />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => {
  return (
    <article>
      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="User"
      />
      <h4>{name}</h4>
      <p>{feedback}</p>
    </article>
  );
};

export default Testimonial;
