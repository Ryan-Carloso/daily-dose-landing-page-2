const features = [
  {
    icon: "💊",
    title: "Smart Supplement Reminders",
    description:
      "Get perfectly timed notifications for all your supplements - whey protein, creatine, vitamins, and medications.",
  },
  {
    icon: "📋",
    title: "Complete Supplement Library",
    description: "Add and track any supplement with custom dosages, frequencies, and notes for optimal organization.",
  },
  {
    icon: "📊",
    title: "Intake Progress Tracking",
    description: "Monitor your supplement consistency with visual progress reports and streak counters.",
  },
  {
    icon: "🤖",
    title: "AI Helper",
    description: "Get AI-powered insights on supplement for your needs",
  },
]

export default function Features() {
  return (
    <section className="section bg-gray-50" id="features">
      <div className="container">
        <div className="text-center mb-16">
          <h2>Everything you need to build lasting habits</h2>
          <p>Powerful features designed to keep you motivated and on track.</p>
        </div>
        <div className="grid grid-4">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div className="feature-icon">
                <span role="img" aria-label={feature.title}>
                  {feature.icon}
                </span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
