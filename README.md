# LODGE FINDER

# Table of Contents

1. [Introduction](#tech-stack)
2. [Installation](#installation)
3. [Tech Stack](#tech-stack)
4. [Folder Structure](#folder-structure)
5. [Contributing](#contributing)
6. [Pages and Functionality](#pages-and-functionality)

## INTRODUCTION

[View Requirements](https://docs.google.com/document/d/1_4L2BFDoz68iInp3L81OQj9m-KlrqCPl7jyOyHZxbO0/edit?usp=drive_link)

[View Class diagram](https://drive.google.com/file/d/1NNoc0cHni--XfAeFldqm5FeaACSOUI9m/view?usp=drive_link)

[View UI/UX designs](https://www.figma.com/file/7vCCfwrJ0rINHXtVy2hq3B/Lodge-Finders?type=design&node-id=0%3A1&mode=design&t=WbeP2RSXLlLkXLwv-1)

[View Firebase Console](https://console.firebase.google.com/u/0/project/lodge-finder-29c48/overview)

## INSTALLATION

- Fork the repository
- Clone the forked repo
- Cd into the project and run `npm install` to install dependencies.
- Get `.env` variables from admin to add to `.env.local` in the root folder of the project.
- run `npm run dev` to start the application at localhost:3000

## TECH STACK

- NextJs 14
- Tailwind Css
- Typescript
- Firebase
- Vercel

## FOLDER STRUCTURE

- Project makes use of NextJS 14 App router. All code for the application is to be implemeted inside the `app` folder.
- Every folder within the root of the `app` folder is a page except for `lib` and `ui`.
- The `lib` folder contains an `actions` folder and a `data` folder. The `actions` folder contains files for performing create, update and delete functions for different components. The `data` folder conatins files for performing only read functions on different components. The `definitions.ts` file in the root of the `lib` folder contains all typescript type definitions to be used within the application.
- The `ui` folder in the roof of the `app` folder contains component files arranged in folders.

## CONTRIBUTING

- The `main` branch is the branch that is deployed.
- The `dev` is the branch for developing and testing the software
- Are branches are to be created for new features or fixes, when you're adding your new feature, make a pull request to be merged into the `dev` branch.

## PAGES AND FUNCTIONALITY

This section explains the development and thought process behind each page of the website and their functionality. The location of the file for each page is added to the name using `/app` as the root.

### Home Page (/page.tsx)
