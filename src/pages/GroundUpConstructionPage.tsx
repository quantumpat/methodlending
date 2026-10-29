import ProgramPage from '../components/ProgramPage'

const GroundUpConstructionPage = () => (
  <ProgramPage
    idPrefix="ground-up"
    eyebrow="Ground-Up Construction Lending"
    title="Ground-up construction financing for investors."
    intro="Short-term financing to build new residential investment properties, whether you plan to sell the finished homes or hold them as rentals. We review your project and arrange the loan through our third-party lending partners."
    highlights={[
      { title: 'Up to 90%', detail: 'loan-to-cost (LTC)' },
      { title: 'Up to 75%', detail: 'of as-completed value' },
      { title: '9–24 months', detail: 'loan terms' },
      { title: 'Up to 4 units', detail: 'residential construction projects' },
      {
        title: 'Interest on disbursed funds',
        detail: 'charged as funds are drawn, not on the full loan amount',
      },
      { title: 'First-time builders', detail: 'options available' },
      { title: 'Non-owner occupied', detail: 'investment properties only' },
    ]}
    disclaimer="Figures shown are program maximums. All applicable leverage limits apply together, and the most restrictive limit sets the loan amount; not every borrower or project qualifies for maximum leverage. Actual terms depend on the borrower, property, project, and lender approval. Not a commitment to lend. Method Lending, LLC is a mortgage broker that arranges business-purpose financing through third-party lending partners. Method Lending does not fund loans, perform lender valuations, or make underwriting or credit decisions."
    ctaText="Share your project, and we’ll quote construction financing through our lending partners."
  />
)

export default GroundUpConstructionPage
