# ToDo List and Project Breakdown

1. Routes:
   [ ] homepage: /
   [ ] individual donor: /[donor]

2. Components:

- [ ] DonationForm
- [ ] InventoryForm
- [ ] Card (for mapping data)
- [ ] Header
- [ ] Footer

3. Feature Branches:

- [x] boilerplate, installs and dummy data
- [x] databaset setup with Prisma and SQLite
- [x] Feature: Record Donations
- [ ] Feature: Adjust Inventory
- [ ] Feature: Reports
- [ ] styling
- [ ] testing
<!-- - [ ] database (wishlist item) -->

## Branch: `feature/database-setup`

- [x] installs for SQLite and Prisma ORM
- [x] TypeScript installs
- [x] models for donors and donations
- [x] model for distributions
- [x] seed database with `distributions.json` and `donors.json`

## Branch: `feature/record-donations`

- [x] implement `DonationForm.svelte` by adding component content
- [x] Select type from dropdown in DonorForm
- [x] be able to submit donor name, type, amount, date to data storage:
- [x] this creates a "donation instance" under a donor's name (data does not persist, needs troubleshooting)

### donor user stories:

- Leonna from an urgent care clinic brought us surplus bandages
- Delite Bakery brought 2-day-old bread and pastries
- Scott from the community left us sleeping bags he collected from vetted sources

## Branch: `feature/adjust-inventory`

- [ ] implement `InventoryForm.svelte` by adding component content
- [ ] Select type from dropdown in InventoryForm
- [ ] be able to add date, amount, and type record to "total donations" data
- [ ] this creates an "inventory adjustment record" and changes a donation type's data
- [ ] logic to change total of selected type of donation
- [ ] eventually hook up the adjustments input to the Svelte store for the reports branch

## Branch: `feature/reports`

- [ ] add logic to change our data for a donation type total based on new submission
- [ ] eventually hook up the amount input to the Svelte store for the reports branch to display updates based on new input
- [ ] GET inventory (totals)
- [ ] display totals on homepage in a dashboard style
- [ ] GET a single donor's record, and `load` it on a dynamic route for that donor `/[donor-name]`
- [ ] user should be able to navigate to that donor's page
- [ ] from a homepage list of donors (wishlist: search bar to search donor names)
- [ ] be able to view all donations from one user on their route,
- [ ] be able to print out their record
- [ ] utilize a Svelte store to handle inventory totals display, so the total input can be updated in the Svelte store (immediately viewable in the UI)(this really involves all feature branches for core functionality)

Wishlist:
add dayjs or similar library to offer current date selection in form
Admin view, ability to add things like new types of donations to the Select dropdown
Login or Oauth, so only shelter employees and volunteers can access the information
(Admin would be able to add and remove people's access)

- [ ] the donor name text box auto-completes previous donors
- [ ] start with the `DonorForm.svelte` visible on the main page, and add conditional logic later if it makes sense (like click button to "record a donation" and then it populates a form in that location)
