# Noor Community Web

Static site assets for Noor Community. The `assets/js/main.js` file is the editable source for site interactions. A minified build is used on pages for faster load times.

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```

## Build tasks
- **Minify JavaScript**
  ```bash
  npm run build:js
  ```
  Generates `assets/js/main.min.js` from `assets/js/main.js`.

- **Minify CSS**
  ```bash
  npm run build:css
  ```

- **Run all builds**
  ```bash
  npm run build
  ```

Regenerate the minified assets after updating the source files to keep deployed pages in sync.
