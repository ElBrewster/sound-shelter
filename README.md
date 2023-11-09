# the Sound Shelter's donations management tool

- [App Goals](#goals)
- [Installation Instructions](#installation-instructions)
- [Prisma and Database Setup](#prisma-setup-and-installs)
- [Pictures of the App](#screenshots)

- to view project planning and outline refer to `zToDo.md` in the main directory
- to view wishlist items refer to `zToDo.md` in the main directory

## Goals

This project simulates a tool for staff working at a shelter. It's core functionalities include:

- Donation Registration: record donations and who donated
- Donation Distribution: record distributions of the shelter's inventory
- Provide a report that displays inventory amounts based on inventory type
- Provide a report for total donations given by a donor

## Technologies

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

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

- Run `npx prisma generate` to generate Prisma Client
- Run `npx prisma studio` to view database in the browser
- Run `npx prisma migrate` to create database migration
- Run `npx tsx prisma/seed.ts` if db seed isn't successful with previous commands

## Screenshots

This app was made by El Brewster ✨

You can find me at:
[![Static Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=%23181717&color=white&link=https%3A%2F%2Fgithub.com%2FElBrewster)](https://github.com/ElBrewster)
[![Static Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=%230A66C2&color=white&link=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fel-brewster%2F)](https://www.linkedin.com/in/el-brewster/)
