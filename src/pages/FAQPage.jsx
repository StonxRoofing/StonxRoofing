import React, { useState } from 'react';
import './FAQPage.css';


const faqs = [
  {
    question: "What is stone-coated steel roofing?",
    answer: "Stone-coated steel roofing combines the durability of metal with the aesthetic appeal of traditional roofing materials."
  },
  {
    question: "How long does a stone-coated steel roof last?",
    answer: "These roofs are renowned for their longevity, typically lasting between 40 to 70 years with proper maintenance."
  },
  {
    question: "Is stone-coated steel roofing suitable for Tropical climate?",
    answer: "Absolutely. Tropical climate, characterized by heavy monsoons and high humidity, demands robust roofing solutions. Stone-coated steel roofs are designed to withstand extreme weather conditions, including heavy rainfall and strong winds, making them ideal for the region."
  },
  {
    question: "Are stone-coated steel roofs noisy during rain?",
    answer: "Contrary to common misconceptions, stone-coated steel roofs are not noisy. The stone coating, combined with the roofing system's design, dampens sound, making them quieter than traditional metal roofs during rainfall."
  },
  {
    question: "Does installing a stone-coated steel roof require removing the existing roof?",
    answer: "Not necessarily. In many cases, stone-coated steel roofing can be installed directly over existing roofing materials, saving time and reducing installation costs. Roofing Force"
  }
];

const FAQPage = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleFAQ = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <>
      <main className="faq-main">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">
          Find questions and answers related to StoneX roofing solutions, installation, and support.
        </p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-toggle">{expanded === index ? '−' : '+'}</span>
              </div>
              {expanded === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </main>
    </>
  );
};

export default FAQPage;
