# Master UI/UX Redesign & Visual Upgrade

This plan details the systematic implementation of the premium UI/UX upgrade for Second Opinion CRL based on the extensive audit of the existing codebase.

## Audit Summary
- **Current state**: The website has a solid component structure (Hero.tsx, SpecialistContent.tsx, WhyUs.tsx, etc.), but relies heavily on generic icons (lucide-react), basic borders, and standard layouts.
- **Weaknesses identified**: 
  - The hero section displays tests below the fold and doesn't explicitly prioritize the "Second Opinion" flow.
  - Too many identical cards (e.g. Cancer specialties just use a Hexagon icon).
  - Lack of a premium, specialist feel.
  - Inconsistent spacing and typography hierarchy across sections.
- **Strengths to preserve**: Mobile responsiveness, Supabase logic, booking routing, and interactive forms are well implemented and will be fully preserved.

## Proposed Changes

### Global Styling & Layout
- **Colors**: Maintain strict adherence to Navy (#12304A), Teal (#0A7C86), and Aqua (#DFF4F5).
- **Typography**: Enforce Montserrat SemiBold for headings and Inter for body text.
- **Spacing**: Apply generous vertical rhythm (py-24 to py-32 for main sections).

### 1. Homepage Flow Redesign (src/routes/index.tsx)
The homepage will be restructured to match the exact visual story requested:
1. <Hero /> (Redesigned)
2. <WhyUs /> (Specialist Review, Independent Assessment, etc.)
3. <CancerSection /> (Premium grid with a single strong section image instead of icon-spam)
4. <WhenToSeekSection /> (Clean 12-item timeline/grid)
5. <DiagnosticApproachSection /> (Premium 5-step process)
6. <QualityStandardsHome /> (Visual list + client image)
7. <WhatWeReview /> (Interactive tabs)
8. <HowItWorks /> (5-step process)
9. <ForDoctorsSection /> (B2B consultation)
10. <ExpertsHome /> (Professional profile cards)
11. <OurCommitment /> (Closing statement)
12. <PackagesHomeSection /> (Hidden details by default)
13. <PopularTests /> (Quick booking cards)
14. <TestSearch /> (Clean utility)

### 2. Component Overhauls

#### [MODIFY] src/components/Hero.tsx
- Replace headline and subheadline with exact client copy.
- Remove routine testing lines.
- Update CTAs to "Request a Second Opinion" and "Refer a Case".
- Implement a premium composition: Large image panel with subtle rounded corners and a small floating diagnostic detail card ("SPECIALIST REVIEW").

#### [MODIFY] src/components/SpecialistContent.tsx
- Redesign CancerSection to feature a beautiful layout with one premium image and a clean typographic grid of the 12 specialties.
- Redesign WhenToSeekSection to a visual timeline/card grid.
- Redesign DiagnosticApproachSection to be a highly polished 5-step timeline (horizontal on desktop, vertical on mobile).

#### [MODIFY] src/components/WhyUs.tsx
- Replace current principles with the exact 5 cards requested (Specialist Review, Independent Assessment, etc.).
- Use clean, line-based iconography.

#### [NEW] src/components/QualityStandardsHome.tsx
- A new section component for the homepage featuring the WHO/CAP standards list paired with the client-supplied Quality image.

#### [NEW] src/components/WhatWeReview.tsx
- Create a tabbed interactive component for Histopathology, IHC, Cytology, Haematopathology, and Ancillary Investigations.

#### [NEW] src/components/ProcessTimeline.tsx
- Reusable 5-step timeline component for "How It Works".

#### [MODIFY] src/components/Footer.tsx
- Restructure into 5 columns (Brand, Services, Second Opinion, For Doctors, Contact).

#### [MODIFY] src/components/PackagesHomeSection.tsx
- Implement "View Details" expandable accordion for packages instead of showing everything upfront.

#### [MODIFY] src/components/TestSearch.tsx
- Improve search UX, UI, and placeholder text ("Search tests, packages or services").

### 3. Sub-pages
- **[MODIFY] src/routes/services.tsx**: Enforce exact order of the 8 services. Apply premium styling.
- **[MODIFY] src/routes/second-opinion.tsx**: Improve visual hierarchy and conversion journey.
- **[MODIFY] src/routes/contact.tsx**: Implement the 3 clear pathways (Patients, Doctors, Tests).
- **[MODIFY] src/routes/doctors.tsx**: B2B specialist pathology consultation UI.
- **[MODIFY] src/components/EntryPopup.tsx**: Keep as-is (already fixed).

## Verification Plan
1. **Automated Tests**: Run 
pm run build to verify no typescript/hydration errors are introduced.
2. **Functionality Check**: Verify Supabase booking flow, Test Directory, and Search logic remain fully functional.
3. **Responsive QA**: Manual visual check at 1440px, 1024px, 390px.

## User Review Required
Please review this implementation plan. Once approved, I will systematically execute these design changes across the codebase while preserving all backend and booking logic.
