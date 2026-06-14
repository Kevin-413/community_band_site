# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Homepage funding logos and grant acknowledgment for Mass Cultural Council and Amherst Cultural Council
- Pull request template to manage contributions
- Community Music Links page with approved regional music links including Adult Music and Kids Music sections
- Kids Music in Western Mass content (music education opportunities for children) integrated into Community Music Links

### Changed
- Increased Donate page intro paragraph text size for readability
- Restyled the Donate on Zeffy button to green with larger, bolder label text
- Moved the Contact popup PRIVATE POLICY link to the modal body line, made the Close button light grey, and applied a 3D button style across site buttons
- Added a Privacy Policy page and linked it in the footer and Contact popup
- Marked all Contact popup form fields as required (name, email, and message)
- Updated the Contact popup button label to SEND and increased its visual size
- Styled the Contact popup Send button with a light grass-green appearance
- Temporarily disabled contact form sending and applied a strikethrough style to the Send Message button
- Corrected the global type scale so .title.is-3 uses the h3 size tier (reducing oversized heading jumps across pages)
- Added auto-updating year to the footer copyright line
- Removed the "All concert times are listed in Eastern Time." line from the Performances page
- Tightened vertical spacing between concert groups on the Performances page
- Balanced Performances page typography by bringing date and location text sizes closer together within the site style system
- Corrected the McGuirk Stadium concert ZIP code in the schedule address
- Increased spacing between the Performances page video and its Download 2026 Concert Schedule button
- Added a Download 2026 Concert Schedule button below the video on the Performances page
- Increased homepage guest-conductor block font sizing for better readability
- Set Season Signup Form buttons to yellow and concert schedule Download buttons to pink across the site
- Reduced the homepage grant acknowledgment text size so the funding note reads modestly beneath the logos
- Kept the grant logos on a single row with constrained sizing so they stay small and side-by-side when zoomed
- Prevented top nav text crowding by reserving right-side space for the CONTACT button and aligning the button flush-right on tablet/desktop widths
- Kept full nav text visible on desktop/tablet with hamburger menu limited to mobile, and updated the burger icon to white for contrast on the red header
- Positioned the top-right CONTACT nav button flush to the right and updated its label styling to all-caps bold
- Made the top-right Contact button larger, rounder, and more 3D-looking for clearer prominence
- Restyled the season signup and concert schedule buttons to use the light button treatment with black text
- Renamed the footer contact link to Webmaster
- Added a shared top-right Contact button and reusable Formspree contact modal so every page can open the same contact popup
- Wired the contact form to Formspree with POST submission and named fields for ready-to-use contact handling
- Implemented a cautious SEO/social metadata pass with improved page titles/descriptions, production-domain canonical URLs, Open Graph/Twitter card tags, default share image selection, and apple-touch-icon support
- Updated Organization and MusicEvent JSON-LD metadata and confirmed robots.txt/sitemap outputs and key internal footer link targets under the project-path build
- Applied an accessibility-focused button sizing pass: increased button tap targets, padding, and font sizes for CTA/readability while preserving site colors and layout
- Replaced break-based spacing with a reusable CTA button group gap on Home and Join pages for cleaner stacking and touch spacing on mobile
- Verified footer content, project-path link behavior, and mobile stacking for the shared footer update across site pages
- Replaced the shared site footer with compact community-focused content, including functional links for Home, About, Schedule, Join, Donate, Contact, Directions, and Community Music sections
- Added responsive footer styling so the footer content remains modest and stacks cleanly on mobile while keeping existing site fonts/colors
- Community Music Links page now includes table of contents with anchor links to Adult and Kids Music sections
- Kids Music section features music schools, private studios, youth ensembles, and summer programs organized by county
- Reconciled changelog records between the repo and docs workflow copy
- Added Community Music Links item to site navigation
- Expanded Community Music Links page to include Adult Music in Western Mass sections and county titles for community choruses
- Updated Community Music Links entry from Greenfield Military Band to Greenfield Community Band with the new website link and historical note
- Completed assessment-first universal style audit across Home, About, Community Music Links, and Kids pages
- Refined universal typography and spacing tokens in custom CSS with smaller laptop nav text, normalized content list rhythm, and reduced Kids-only overrides
- Aligned the universal style layer to the live amherstband.org Inter-based typography and white button treatment, with a contrast fix for primary CTA text

### Fixed
- Updated homepage button link from the old schedule page to the Performances page

## [1.2.0] - 5/20/2026
### Added
- Two new Nunjucks templates for easier management of the different page styles
- Announcement about Summer 2026 season started
- Button links to Google forms for 2026 sign up
- Custom CSS classes for rounded corners that doesn't conflict with Bulma CSS classes

### Changed
- Updated times for 2026 concerts
- Navbar background color now matches the logo with navigation headers in bold, white text
- Updated list of board members
- Made images responsive for mobile and used appropriate image shortcodes in Nunjucks per https://www.11ty.dev/docs/plugins/image-shortcodes/

### Removed
- Summer concert series image due to mismatched times

## [1.1.1] - 4/18/2026
### Added
- Updated NPM packages

### Removed
- Announcement about seeking conductor


## [1.1.0] - 3/10/2026
### Added
- Dates for 2026 concerts and rehearsals
- Announcement about seeking conductor
- Shadow styling to rounded shapes and images

### Changed
- Removed some photos


## [1.0.0] - 11/26/2025
### Added
- Entire site