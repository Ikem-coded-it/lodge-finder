# LODGE FINDER

[View Class diagram](https://drive.google.com/file/d/1NNoc0cHni--XfAeFldqm5FeaACSOUI9m/view?usp=sharing)

[View Specs Document](https://docs.google.com/document/d/1_4L2BFDoz68iInp3L81OQj9m-KlrqCPl7jyOyHZxbO0/edit?usp=sharing)

## TECH STACK

- NextJs 14
- Tailwind Css
- Typescript
- Firebase

## FOLDER STRUCTURE

- Project makes use of NextJS 14 App router. All code for the application is to be implemeted inside the `app` folder.
- Every folder within the root of the `app` folder is a page except for `lib` and `ui`.
- The `lib` folder contains an `actions` folder and a `data` folder. The `actions` folder contains files for performing create, update and delete functions for different components. The `data` folder conatins files for performing only read functions on different components. The `definitions.ts` file in the root of the `lib` folder contains all typescript type definitions to be used within the application.
- The `ui` folder in the roof of the `app` folder contains component files arranged in folders.
