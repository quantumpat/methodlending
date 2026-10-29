import ProgramPage from '../components/ProgramPage'

const FixFlipPage = () => (
  <ProgramPage
    idPrefix="fix-flip"
    eyebrow="Fix & Flip Lending"
    title="Fix & flip financing for real estate investors."
    intro="Short-term financing to purchase and renovate residential investment properties for resale. We review your deal and arrange the loan through our third-party lending partners, so you can focus on the project."
    highlights={[
      { title: 'Up to 93%', detail: 'loan-to-cost (LTC)' },
      { title: 'Up to 90%', detail: 'of purchase price' },
      { title: 'Up to 100%', detail: 'of the approved renovation budget' },
      { title: 'Up to 75%', detail: 'of after-repair value (ARV)' },
      { title: '6–18 months', detail: 'loan terms' },
      { title: '1–4 units', detail: 'single-family and 2–4-unit residential investment properties' },
      { title: 'Non-owner occupied', detail: 'investment properties; vacant-property requirements apply' },
    ]}
    disclaimer="Figures shown are program maximums. All applicable leverage limits apply together, and the most restrictive limit sets the loan amount; not every borrower or project qualifies for maximum leverage. Actual terms depend on the borrower, property, project, and lender approval. Not a commitment to lend. Method Lending, LLC is a mortgage broker that arranges business-purpose financing through third-party lending partners. Method Lending does not fund loans, perform lender valuations, or make underwriting or credit decisions."
    ctaText="Share your deal, and we’ll quote financing options through our lending partners."
  />
)

export default FixFlipPage
