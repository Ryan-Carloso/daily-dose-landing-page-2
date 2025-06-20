import Image from "next/image"

export default function ProblemSolution() {
  return (
    <section className="section" id="solution">
      <div className="container">
        <div className="grid grid-2 items-center">
          <div>
            <h2>Stop missing your supplement doses</h2>
            <p>
              Whether you're taking whey protein for muscle growth, creatine for performance, or essential vitamins for
              health, it's easy to forget your daily doses. DailyDose solves this with personalized reminders that
              ensure you never miss a scoop, pill, or dose again. Stay consistent with your supplement routine and
              maximize your results.
            </p>
          </div>
          <div>
            <Image
              src="/icon.png?height=400&width=500"
              alt="Person successfully taking daily supplements with DailyDose iPhone app reminders for whey protein and vitamins"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
