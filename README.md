# the Sound Shelter's donations management tool

- [App Goals](#goals)
- [Installation Instructions](#installation-instructions)
- [Prisma and Database Setup](#prisma-setup-and-installs)
- [Pictures of the App](#screenshots)

- to view project planning and outline refer to `zToDo.md` in the main directory
- to view wishlist items refer to `zToDo.md` in the main directory

## Goals

## Technologies

## Installation Instructions

1. [Click](https://github.com/ElBrewster/sound-shelter) to open the repository.
2. Click the "Fork" button. (This will create a user copy of the repository.)
3. Open the Terminal application.
4. In Terminal, use the "cd" command to navigate to where the local repository will live.
5. In GitHub, click on the green "Code' dropdown.
6. You will see three clone options. Select "SSH" and copy the SSH key.
7. In Terminal, run "git clone [insert copied SSH key here]".
8. In Terminal, use the "cd" command to navigate into the newly created directory. Enter `npm i` to install dependancies.
9. Open the local repository in VS Code by typing: `code .`
10. Type `npm run dev` into the terminal and view the app in your browser at `http://localhost:5173/`.
11. Continue setup with database installs and running seed functions:

### Prisma Setup and Seeding SQLite DataBase

- Setup Prisma: `npx prisma init --datasource-provider sqlite`
- Run `npx prisma migrate dev --name init` to seed database and install `@prisma/client`
- Run `npx tsx prisma/seed.ts` if db seed isn't successful on the first try
- `npx prisma generate` to generate Prisma Client
- Browse database content in the browser with by running `npx prisma studio`

I think it's just `npx prisma generate` if I already have the sqlite db set, and the folder/schema file
and then to seed?

I think it's `prisma generate/studio/migrate dev`

## Screenshots

This app was made by El Brewster ✨

You can find me at:
[![Static Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=%23181717&color=white&link=https%3A%2F%2Fgithub.com%2FElBrewster)](https://github.com/ElBrewster)
[![Static Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=%230A66C2&color=white&link=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fel-brewster%2F)](https://www.linkedin.com/in/el-brewster/)
