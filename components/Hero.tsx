import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div>
            <h1>Never miss your supplements again.</h1>
            <h2 className="tagline text-white">
              DailyDose sends smart reminders for your whey protein, creatine, vitamins, and medications so you stay on
              track with your health goals.
            </h2>
            <Link
              href="https://apps.apple.com/pt/app/never-miss-a-scoop-dailydose/id6739007799?l=en-GB"
              className="btn btn-primary"
              aria-label="Download DailyDose supplement tracker for iPhone and iPad"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get DailyDose Free
            </Link>
          </div>
          <div className="hero-image">
            <Image
              src="/icon.png"
              alt="DailyDose iOS app showing supplement tracking interface with whey protein and creatine reminders"
              width={300}
              height={600}
              priority
              className="app-mockup"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
