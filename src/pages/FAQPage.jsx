import React, { useState } from 'react';
import './FAQPage.css';


const faqs = [
  {
    question: "Why do I need to use a Design System?",
    answer: "A design system ensures consistency across your project, improves collaboration between designers and developers, and speeds up the development process by providing reusable components and guidelines."
  },
  {
    question: "Is there a preview or a free trial available?",
    answer: "Yes, many design systems offer a preview or free trial. For StoneX Roofing Solutions, you can contact us to schedule a demo or request a sample product for evaluation."
  },
  {
    question: "Where can I purchase AlignUI Design System?",
    answer: "The AlignUI Design System is not directly related to StoneX. However, for StoneX products, you can purchase directly through our website or contact our sales team for bulk orders."
  },
  {
    question: "What are the recent updates and enhancements in AlignUI?",
    answer: "While AlignUI updates are not applicable to StoneX, we regularly enhance our roofing solutions. Recent updates include improved weather resistance and new color options for our panels."
  },
  {
    question: "How do I install AlignUI Design System in Figma?",
    answer: "AlignUI installation in Figma is not relevant to StoneX. However, to install StoneX roofing panels, consult our installation guide or contact our support team for professional assistance."
  },
  {
    question: "Can I use AlignUI Design System for commercial projects?",
    answer: "AlignUI is not a StoneX product. For StoneX roofing solutions, yes, our products are suitable for both residential and commercial projects. Contact us for more details."
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