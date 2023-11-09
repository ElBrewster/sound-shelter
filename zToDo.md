# ToDo List and Project Breakdown

- [Branches](#branches) - [database setup](#branch-featuredatabase-setup) - [record donations](#branch-featurerecord-donations) - [inventory adjustments](#branch-featureadjust-inventory) - [reports](#branch-featurereports) - [styling](#branch-featurestyling) - [data on pageload + cleanup](#branch-featuredata-on-pageload)
- [Wishlist](#wishlist)

1. Routes:
   [x] homepage: /
   (note: for the purposes of this project, the "tool" is at root, and a placeholder "homepage" is at the "/home" route)
   [ ] individual donor: /[donor]

2. Components:

- [x] DonationForm
- [x] DonorList
- [x] Footer
- [x] Header
- [x] InventoryForm
- [x] InventoryTotals
- [x] RecentDistributions
- [x] ToolNav

3. Feature Branches:

- [x] boilerplate, installs and dummy data
- [x] databaset setup with Prisma and SQLite
- [x] Feature: Record Donations
- [x] Feature: Adjust Inventory
- [x] Feature: Reports
- [x] styling
- [ ] testing

4. Wishlist

## Branches:

### Branch: `feature/database-setup`

- [x] installs for SQLite and Prisma ORM
- [x] TypeScript installs
- [x] models for donors and donations
- [x] model for distributions
- [x] seed database with `distributions.json` and `donors.json`

### Branch: `feature/record-donations`

- [x] implement `DonationForm.svelte` by adding component content
- [x] Select type from dropdown in DonorForm
- [x] be able to submit donor name, type, amount, date to data storage:
- [x] this creates a "donation instance" under a donor's name (data does not persist, needs troubleshooting)

#### donor user stories:

- Leonna from an urgent care clinic brought us surplus bandages
- Delite Bakery brought 2-day-old bread and pastries
- Scott from the community left us sleeping bags he collected from vetted sources

### Branch: `feature/adjust-inventory`

- [x] implement `InventoryForm.svelte` by adding component content
- [x] Select category from dropdown in InventoryForm
- [x] be able to add date, amount, and category record to "total donations" data
- [x] this creates an "inventory adjustment record" and changes a donation category's data (POST trouble still with INT type error)
- [x] logic to change total of selected category of donation
- [x] eventually hook up the adjustments input to the Svelte store for the reports branch
- [x] add nav in or below site header for page navigation through the various components ->
- [x] implement component `ToolNav.svelte`

### Branch: `feature/reports`

- [x] add `DonorList.svelte` component implementation to display donation totals and donors
- [x] add logic to change our data for a donation type total based on new submission
- [x] GET inventory (totals)
- [x] display totals on homepage in a dashboard style
- [ ] GET a single donor's record, and `load` it on a dynamic route for that donor `/[donor-name]`: [refer to](https://learn.svelte.dev/tutorial/await-parent)
- [ ] user should be able to navigate to that donor's page
- [x] from a homepage list of donors
- [ ] be able to view all donations from one user on their route,
- [ ] be able to print out their record
- [x] utilize a Svelte store to handle inventory totals display, so the total input can be updated in the Svelte store (immediately viewable in the UI)(this really involves all feature branches for core functionality)

### Branch: `feature/styling`

- [x] sass installs
- [x] sass file and folder setup
- [x] tokens file implementation
- [x] attribution for icons: `<a href="https://www.flaticon.com/free-icons/city" title="city icons">City icons created by Freepik - Flaticon</a>`

### Branch: `feature/data-on-pageload`

- [ ] small cleanup tasks:
- [x] component refactors (new component `RecentDistributions`)
- [x] ensure that InventoryTotals component is updated when first coming to the site with seeded database inventory
- [ ] deploy app if easily done with database (check Vercel?)
<!-- - [ ] additional logic so data persists in UI after page refresh, localstorage maybe? --> (satisfied with database checks)
- [ ] write up README and include app setup instructions,
- [ ] especially database setup terminal commands with prisma,
- [ ] include abstract summarizing purpose of application,
- [ ] and include screenshots showing the site on different device widths
- [ ] refer to this todo list for history of project planning in the README,highlight wishlist
- [ ] fix wonky donators reports, the styling and responsiveness is not on point
- [ ] fix spacing between sections since jumping from one of the links in the toolbar nav navigates to an odd selection of sections, like 90% of the target and 20-30% of the next section, just needs cleanup
- [ ] main `+page.svelte` needs refactoring because the script portion is so long it is not readable. Add a `utils` file somewhere? Ask in the Svelte Discord

## Wishlist:

- [ ] search bar to search donor names
- [ ] add dayjs or similar library to offer current date selection in form
- [ ] prevent future date selections on donation submissions as well as inventory adjustments
- [ ] finish out anonymous donor submissions on the incoming donations form (checkbox works but logic to post do an anonymous donor is not included in the `donationCreate` action function)
- [ ] adding a new donor is an issue for the current data setup since our POST relies on a pre-existing donor in the databse
- [ ] an Admin view would be practical, with the ability to add things like new types of donations to the Select dropdown, or to add/remove employee access however it is out of the scope of this project
- [ ] Login or Oauth, so only shelter employees and volunteers can access the information (outside the scope of this project)
- [ ] the donor name text box auto-completes previous donors
- [ ] dark mode and light mode toggle
