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