# Copilot Instructions

Follow tese instructions, don't install Vue if not used before.

### Architecture
- Readme.md is complete
- Index.htmlk ses Github API to restitute the Readme.md contenant in index.html
- Don't modify logo or others functions if they are not involved in the user's demand.

### Page Structure
- Each page resides in `src/views`
- Shared components go in `src/components`
- Styles are scoped to components; avoid global styles unless necessary
- Prefer helper classes (provided by Vuetify if used) for styling over CSS rules
- Wrap most pages in DefaultLayout.vue for consistent headers/footers if vue is used
- Use the Hero component for prominent page headings

### Coding Style
- Prefer functional patterns

### Security & Privacy
- Never log PII or anonymise them
- Do not introduce tracking, analytics, or telemetry, it is already coded as I want

### General Rules
- Do not generate placeholder logic
- If something is unknown, leave a TODO comment
- Prefer simple, readable solutions over clever ones

## Terraform or Docker
/terraform
/Docker 

This contains Terraform code for infrastructure management.

## Serverless Functions
/serverless

This contains serverless functions to support the web application.