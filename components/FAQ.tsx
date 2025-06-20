"use client"

import { useState } from "react"

const faqs = [
  {
    question: "Can I track different types of supplements?",
    answer:
      "Yes! DailyDose supports all types of supplements including whey protein, creatine, vitamins, minerals, medications, and any custom supplements you want to add.",
  },
  {
    question: "How do I set up reminders for pre and post-workout supplements?",
    answer:
      "You can set multiple reminders per supplement with custom timing. Perfect for pre-workout creatine and post-workout whey protein schedules that align with your training routine.",
  },
  {
    question: "Does DailyDose have a free plan?",
    answer:
      "Absolutely! we have a free plan that includes all the features you need to start tracking your supplements.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section bg-gray-50" id="faq">
      <div className="container">
        <div className="text-center mb-16">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)} aria-expanded={openIndex === index}>
                {faq.question}
                <span className={`faq-toggle ${openIndex === index ? "active" : ""}`}>▼</span>
              </button>
              <div className={`faq-answer ${openIndex === index ? "active" : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
