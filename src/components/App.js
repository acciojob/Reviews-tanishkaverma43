import React, { useState } from "react";
import "./App.css"; // Add some basic styling if needed

const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up.",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan.",
  },
];

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];

  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const randomReview = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * reviews.length);
    } while (newIndex === index);
    setIndex(newIndex);
  };

  return (
    <div className="review">
      <img src={image} alt={name} className="person-img" />
      <h2 id={`author-${id}`} className="author">{name}</h2>
      <h4 className="job">{job}</h4>
      <p className="info">{text}</p>
      <div>
        <button className="prev-btn" onClick={prevReview}>&lt; Prev</button>
        <button className="next-btn" onClick={nextReview}>Next &gt;</button>
      </div>
      <button className="random-btn" onClick={randomReview}>Surprise Me</button>
    </div>
  );
};

const App = () => {
  return (
    <main>
      <section className="container">
        <h1 id="review-heading">Our Reviews</h1>
        <Review />
      </section>
    </main>
  );
};

export default App;
