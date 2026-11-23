import ProgramPage from '../components/ProgramPage'

const GroundUpConstructionPage = () => (
  <ProgramPage
    eyebrow="GROUND-UP CONSTRUCTION LOANS"
    title="Financing to build a new investment property."
    intro="For new residential investment properties, whether you plan to sell them or hold them as rentals. We review your project and arrange the loan through our third-party lending partners."
    highlights={[
      { value: 'Up to 90%', desc: 'loan-to-cost (LTC)' },
      { value: 'Up to 75%', desc: 'of as-completed value' },
      { value: '9–24 months', desc: 'loan terms' },
      { value: 'Up to 4 units', desc: 'residential construction projects' },
      { value: 'Interest on disbursed funds', desc: 'charged as funds are drawn, not on the full loan amount' },
      { value: 'First-time builders', desc: 'options available' },
      { value: 'Non-owner occupied', desc: 'investment properties only' },
    ]}
    disclosure="Figures shown are program maximums. All applicable leverage limits apply together, and the most restrictive limit sets the loan amount; not every borrower or project qualifies for maximum leverage. Actual terms depend on the borrower, property, project, and lender approval. Not a commitment to lend. Method Lending, LLC is a mortgage broker that arranges business-purpose financing through third-party lending partners. Method Lending does not fund loans, perform lender valuations, or make underwriting or credit decisions."
    ctaText="Share your project, and we’ll quote construction financing through our lending partners."
  />
)

export default GroundUpConstructionPage
