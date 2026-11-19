import { Link } from 'react-router-dom'

export type ProgramHighlight = { value: string; desc: string }

type ProgramPageProps = {
  eyebrow: string
  title: string
  intro: string
  highlights: ProgramHighlight[]
  disclosure: string
  ctaText: string
}

const ProgramPage = ({ eyebrow, title, intro, highlights, disclosure, ctaText }: ProgramPageProps) => (
  <main className="ml-page">
    <section className="ml-hero" id="overview">
      <div className="ml-container">
        <p className="ml-eyebrow">{eyebrow}</p>
        <h1 className="ml-hero__title">{title}</h1>
        <p className="ml-hero__intro">{intro}</p>
      </div>
    </section>

    <section className="ml-highlights" id="highlights" aria-labelledby="ml-highlights-title">
      <div className="ml-container">
        <h2 className="ml-highlights__title" id="ml-highlights-title">
          Program Highlights
        </h2>
        <ul className="ml-highlights__grid">
          {highlights.map((highlight) => (
            <li key={highlight.value} className="ml-highlight">
              <span className="ml-highlight__value">{highlight.value}</span>
              <span className="ml-highlight__desc">{highlight.desc}</span>
            </li>
          ))}
        </ul>
        <p className="ml-disclosure">{disclosure}</p>
      </div>
    </section>

    <section className="ml-cta" id="quote">
      <div className="ml-container">
        <p className="ml-cta__text">{ctaText}</p>
        <Link className="ml-btn ml-btn--light" to="/request-quote">
          Request a Quote
        </Link>
      </div>
    </section>
  </main>
)

export default ProgramPage
