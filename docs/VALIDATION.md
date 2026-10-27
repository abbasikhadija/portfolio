# Validation — 27 October 2026

- Production build and TypeScript: passed. Prerender generated homepage and all four case-study HTML pages.
- Gzip budgets: JavaScript 92,689 bytes (budget 110,000); CSS 6,383 bytes (budget 12,000). Screenshots total 143,839 bytes and load lazily. No Lighthouse score is claimed.
- Homepage and each of four case studies checked through the browser at 320, 375, 768, 1024 and 1440px: no horizontal overflow. Technical disclosures were open during case-study reflow checks.
- Four project explanations and approach/concept selectors: exercised in browser; expected state changes confirmed. Simulation data is synthetic and deterministic.
- Production route navigation, browser Back/Forward, main-landmark focus and Enter-key disclosure: passed. Final clean production browser console: no errors or warnings during these flows. Earlier hydration mismatch was repaired by explicit client mounting over prerendered HTML.
- Real mailto/GitHub/LinkedIn targets inspected; no contact form or simulated delivery. Repository document paths are linked from the content model. Public FieldNest URL returned HTTP 200; no connected-workspace functionality is claimed verified.
- Native details, visible focus styling, semantic landmarks, image alternatives and reduced-motion CSS reviewed. Full screen-reader testing, physical touch-device testing, reduced-motion OS emulation and a complete WCAG audit have not been performed.
- Static HTML preserves essential narratives with JavaScript unavailable. Interactive simulations require JavaScript. Missing project media retains a source-document link in its caption.
- Public availability and expected graduation remain content maintenance responsibilities; graduation is explicitly unconfirmed.
