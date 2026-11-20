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

## Adding and editing website content

The repository includes a Pages CMS configuration in `.pages.yml`. After the repository owner installs the official Pages CMS GitHub App for this repository, authorised editors can use the hosted editor to upload activity photos and newsletter PDFs and edit event, gallery, newsletter, story, sponsor, and office-bearer records. The site reads records from `public/data/` and GitHub Pages deploys each saved commit automatically. Setup instructions are published at `/content-management/`.

Pages CMS is an external hosted service. The repository owner must sign in there and grant the GitHub App access to this repository; this project does not grant that access by itself. Content and media stored in this public repository is publicly visible. Do not store member records, private contact lists, bank details, or payment credentials here.

For membership or event payments, first confirm membership categories, prices, renewal period, refund terms, and an Australian payment provider. Use the provider's hosted checkout. The site has no backend to process payments or safely collect membership data.
## Search discovery

Every public section has a descriptive page title, summary description, canonical URL and social preview metadata. `public/sitemap.xml` lists the live sections, and `public/robots.txt` permits search crawlers, including OpenAI's search crawler. The homepage includes structured organization and website details. Search engines still determine whether and where pages appear; prominent placement is not guaranteed.

After the domain is verified, add `https://www.basavasamithibrisbane.com.au/` to Google Search Console and Bing Webmaster Tools, verify ownership using the method those services provide, and submit `https://www.basavasamithibrisbane.com.au/sitemap.xml`. Verification codes must come from the account owner and should not be guessed or committed to the public repository. Keep useful page content current and share the domain through the Samithi's official social profiles and partner/community links.
