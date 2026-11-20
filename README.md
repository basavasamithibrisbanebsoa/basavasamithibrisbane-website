# Basava Samithi Brisbane website

Static website prepared from the archived Basava Samithi Brisbane pages and media.

## Website

The files in `public/` are the new website. The site is designed for GitHub Pages and is configured for:

**https://www.basavasamithibrisbane.com.au**

There is no build step or package install. GitHub Actions deploys `public/` whenever a commit reaches `main`. `public/CNAME` sets the requested `www` hostname. VentraIP DNS needs a CNAME record for `www` pointing to `basavasamithibrisbanebsoa.github.io` before the custom domain will resolve to GitHub Pages. HTTPS can then be enabled in the repository’s Pages settings once DNS has propagated.

## Archived source material

`archive/` contains the complete local archive captured for the rebuild: 122 HTML pages and 207 other files downloaded from 340 indexed Wayback URLs, plus screenshots, manifests and notes. Eleven non-HTML assets could not be retrieved. See `archive/README.txt`, `archive/inventory.csv` and `archive/download_log.csv` for details.

The site combines recovered historical material with the current office-bearer details supplied by the branch. Past event dates and the 2021–22 committee roster are labelled as historical. No future events or newsletters were present in the archive, so those areas are ready for new approved material. Legacy form behavior and server-side PHP were not part of the archive; the public site currently uses email links rather than collecting member data.

## Local preview

Open `public/index.html` in a browser for a simple preview, or serve `public/` with any static web server to test the root-relative asset paths and page routes.

## Adding committee photos and new material

This is a static GitHub Pages website. It does not accept uploads or store member applications on the public site. An administrator can add approved content to the repository and push an update.

- Committee portraits: put approved JPG or WebP files in `public/assets/images/people/`, then replace the initial placeholders in `public/index.html` and `public/committee/index.html` with the image paths and alt text.
- Monthly newsletters: add accessible PDF files under `public/newsletters/files/` using a date in each filename, then add a dated download card to `public/newsletters/index.html`.
- Activity photos: add selected, approved images under `public/assets/images/activities/` and update `public/activities/index.html` with captions and dates.
- Blog articles: create a dated article under `public/blog/` and add a summary card to `public/blog/index.html`.
- Sponsor advertising: add a sponsor logo only with permission, then include an approved description, link, and agreed placement in `public/sponsors/index.html`.

For online membership or event payments, first confirm membership categories, prices, renewal period, refund terms and an Australian payment provider. Use the provider’s hosted checkout. Do not place bank account details or payment credentials in public website files. The site has no backend to process payments or safely collect membership data.
