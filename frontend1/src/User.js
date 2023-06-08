import React from 'react';
import './User.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, description, linkTo }) => {
const navigate=useNavigate();

  const handleClick = () => {
    navigate(linkTo)
  };

  return (
    <button className="card" onClick={handleClick}>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </button>
  );
};

const CardsContainer = () => {
  const cardsData = [
    {
      title: 'Add Student',
      description: 'You can add new Students and Remove them from here',
      linkTo: '/AddStudent',
    },
    {
      title: 'Add Instructors',
      description: 'You can add new Instructors and Remove them from here',
      linkTo: '/AddInstructor',
    },
    {
      title: 'Add other Faculty Member',
      description: 'You can add new Faculty members and Remove them from here',
      linkTo: '/AddFaculty',
    },
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          linkTo={card.linkTo}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
