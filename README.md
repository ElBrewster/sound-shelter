# the Sound Shelter's donations management tool

## Setup

### Prisma Setup

Install: `npm install typescript ts-node @types/node --save-dev`
(added later: `npm i tslib`)
Initialize TypeScript: `npx tsc --init`
Install Prisma CLI: `npm install prisma --save-dev`
Setup Prisma: `npx prisma init --datasource-provider sqlite`
Create data models in `prisma/schema.prisma`
Create `seed.ts` file to seed data in `prisma` directory
Add content to seed file using dummy data
Also needed: `npm install tsx --save-dev` and to use

```json
	"prisma": {
		"seed": "tsx prisma/seed.ts"
	},
```

<!--I believe this^ solves a SvelteKit issue regarding TypeScript, the prisma guide for Svelte uses `"seed": "ts-node prisma/seed.ts"` -->

Run `npx prisma migrate dev --name init` to seed database and install `@prisma/client`
