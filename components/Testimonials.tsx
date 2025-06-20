const testimonials = [
  {
    quote:
      "Finally remember to take my whey protein and creatine every day. The reminders are perfectly timed with my workouts!",
    author: "Marcus Thompson",
    role: "Athlete",
  },
  {
    quote: "I've been recommending DailyDose to all my patients. It helps them tremendously with tracking their supplements!",
    author: "Sarah Martinez",
    role: "Nutritionist",
  },
  {
    quote: "Perfect for tracking my pre and post-workout supplements. The app is simple but incredibly effective.",
    author: "Jake Wilson",
    role: "Fitness Enthusiast",
  },
]

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="text-center mb-16">
          <h2>Loved by thousands of iOS users</h2>
          <p>Join more than 1000+ users on iPhone and iPad users who've transformed their daily routines with DailyDose.</p>
        </div>
        <div className="grid grid-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-author">{testimonial.author}</div>
              <div className="testimonial-role">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
