# Basava Samithi Brisbane website

Static website prepared from the archived Basava Samithi Brisbane pages and media.

## Website

The files in `public/` are the new website. The site is designed for GitHub Pages and is configured for:

**https://www.basavasamithibrisbane.com.au**

There is no build step or package install. GitHub Actions deploys `public/` whenever a commit reaches `main`. `public/CNAME` sets the requested `www` hostname. VentraIP DNS needs a CNAME record for `www` pointing to `basavasamithibrisbanebsoa.github.io` before the custom domain will resolve to GitHub Pages. HTTPS can then be enabled in the repository’s Pages settings once DNS has propagated.

## Archived source material

`archive/` contains the complete local archive captured for the rebuild: 122 HTML pages and 207 other files downloaded from 340 indexed Wayback URLs, plus screenshots, manifests and notes. Eleven non-HTML assets could not be retrieved. See `archive/README.txt`, `archive/inventory.csv` and `archive/download_log.csv` for details.

The public pages use the latest recovered content where possible. Archived event dates and the 2021–22 committee roster are labelled as historical. The available source did not establish current office holders or an upcoming calendar, so the site directs visitors to contact the branch for current information. Legacy form behavior and server-side PHP were not part of the archive; the new contact page uses an email link.

## Local preview

Open `public/index.html` in a browser for a simple preview, or serve `public/` with any static web server to test the root-relative asset paths and page routes.
