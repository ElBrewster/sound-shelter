# the Sound Shelter's donations management tool

## Setup

### Prisma Setup

Install: `npm install typescript ts-node @types/node --save-dev`
Initialize TypeScript: `npx tsc --init`
Install Prisma CLI: `npm install prisma --save-dev`
Setup Prisma: `npx prisma init --datasource-provider sqlite`
Create data models in `prisma/schema.prisma`
Create `seed.ts` file to seed data in `prisma` directory
