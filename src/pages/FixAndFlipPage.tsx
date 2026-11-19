import ProgramPage from '../components/ProgramPage'

const FixAndFlipPage = () => (
  <ProgramPage
    eyebrow="FIX & FLIP LENDING"
    title="Fix & flip financing for real estate investors."
    intro="Short-term financing to purchase and renovate residential investment properties for resale. We review your deal and arrange the loan through our third-party lending partners, so you can focus on the project."
    highlights={[
      { value: 'Up to 93%', desc: 'loan-to-cost (LTC)' },
      { value: 'Up to 90%', desc: 'of purchase price' },
      { value: 'Up to 100%', desc: 'of the approved renovation budget' },
      { value: 'Up to 75%', desc: 'of after-repair value (ARV)' },
      { value: '6–18 months', desc: 'loan terms' },
      { value: '1–4 units', desc: 'single-family and 2–4-unit residential investment properties' },
      { value: 'Non-owner occupied', desc: 'investment properties; vacant-property requirements apply' },
    ]}
    disclosure="Figures shown are program maximums. All applicable leverage limits apply together, and the most restrictive limit sets the loan amount; not every borrower or project qualifies for maximum leverage. Actual terms depend on the borrower, property, project, and lender approval. Not a commitment to lend. Method Lending, LLC is a mortgage broker that arranges business-purpose financing through third-party lending partners. Method Lending does not fund loans, perform lender valuations, or make underwriting or credit decisions."
    ctaText="Share your deal, and we’ll quote financing options through our lending partners."
  />
)

export default FixAndFlipPage
