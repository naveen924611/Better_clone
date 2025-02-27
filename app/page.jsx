"use client";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Home() {
  const [imageSrc, setImageSrc] = useState("./Arian.png");
  const [curr, setCurr] = useState("Arian");

  // State to track the active button (Our products, Calculators, Guides & FAQs)
  const [activeButton, setActiveButton] = useState("Our products");

  // Data for each button's card content
  const cardData = {
    "Our products": [
      {
        imageSrc: "./first_home.png",
        title: "Buying your first home with Better",
      },
      {
        imageSrc: "./one_day.png",
        title: "One Day Mortgage",
        description:
          "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.",
      },
      {
        imageSrc: "./HELOC.png",
        title: "Better HELOC",
        description:
          "Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit. Access up to 90% of your home equity as cash in as little as 7 days.",
      },
      {
        imageSrc: "./insurance.png",
        title: "Insurance",
      },
    ],
    "Calculators": [
      {
        imageSrc: "./calculator1.png",
        title: "Mortgage Calculator",
        description: "",
      },
      {
        imageSrc: "./TMP.png",
        title: "Affordability calculator",
        description: "Got homeownership dreams? Let's put some numbers behind them. Our affordability calculator estimates the maximum home you can afford.",
      },
      {
        imageSrc: "./HELOC_Cal.png",
        title: "HELOC Calculator",
        description: "Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.",
      },
      {
        imageSrc: "./FRL.png",
        title: "Fixed-rate loan comparison calculator",
        description: "",
      },
    ],
    "Guides & FAQs": [
      {
        imageSrc: "./GD.png",
        title: "What is a good debt-to-income ratio for a home loan?",
        description: "Everything you need to know about buying your first home.",
      },
      {
        imageSrc: "./Buying.png",
        title: "Buying a house without realtor",
        description: "Thinking about buying a house without a real estate agent? Read this first. ",
      },
      {
        imageSrc: "./Timeline.png",
        title: "Timeline for homebuying process",
        description: "Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps.",
      },
      {
        imageSrc: "./loans.png",
        title: "Conventional loan requirements",
        description: "",
      },
    ],
  };

  // Function to handle button clicks
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="home">
      <div className="green-Main">
        <section className="name-mort">
          <div>
            <h1 className="h1">Mortgages</h1>
            <h1 className="h2">
              <span>madesimple</span>
            </h1>
          </div>
        </section>
        <div className="all-three">
          <div className="three">
            <div>
              <button className="approval">Start my approval</button>
              <p>
                <FontAwesomeIcon icon={faStopwatch} size="1x" color="white" /> 3
                min | No credit impact
              </p>
            </div>
          </div>
          <div className="three">
            <img src="./cong.png" alt="Description" width={500} height={300} />
          </div>
          <div className="three">Google</div>
        </div>
      </div>
      <div className="why-better">
        <div className="image">
          <div className="img">
            <img src={imageSrc} alt="Description" />
          </div>
          <div className="btns">
            <button
              className={curr === "Arian" ? "active" : ""}
              onClick={() => {
                setImageSrc("./Arian.png");
                setCurr("Arian");
              }}
            >
              Arian
            </button>
            <button
              className={curr === "Amanda" ? "active" : ""}
              onClick={() => {
                setImageSrc("./Amanda.png");
                setCurr("Amanda");
              }}
            >
              Amanda
            </button>
            <button
              className={curr === "Paul" ? "active" : ""}
              onClick={() => {
                setImageSrc("./Paul.png");
                setCurr("Paul");
              }}
            >
              Paul
            </button>
          </div>
        </div>
        <div className="txt-content">
          <div className="txt">Find out why we're better.</div>
          <div>
            <button>See all stories</button>
          </div>
          <div>Truepolit Excellent 4.4 out of 5</div>
        </div>
      </div>
      <div className="we-got-outside">
        <div className="we-got-answer">
          <div>
            <h1>Got questions?</h1>
            <h1>We've got answers</h1>
          </div>
          <div>
            <button
              className={activeButton === "Our products" ? "active" : ""}
              onClick={() => handleButtonClick("Our products")}
            >
              Our products
            </button>
            <button
              className={activeButton === "Calculators" ? "active" : ""}
              onClick={() => handleButtonClick("Calculators")}
            >
              Calculators
            </button>
            <button
              className={activeButton === "Guides & FAQs" ? "active" : ""}
              onClick={() => handleButtonClick("Guides & FAQs")}
            >
              Guides & FAQs
            </button>
          </div>
        </div>
        <div className="grid-container">
          {/* Render cards based on the active button */}
          {cardData[activeButton].map((card, index) => (
            <div
              key={index}
              className={`card ${index === 1 || index === 2 ? "large c" : ""} ${index == 2 ? "c1" : ""} `}
            >
              <div>
                <h2>{card.title}</h2>
                {card.description && <p>{card.description}</p>}
                <button className="arrow-button">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
              <img src={card.imageSrc} alt={card.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
