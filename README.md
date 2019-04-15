# WordPress Content Blocks: Advanced

This is the repository for the LinkedIn Learning course "WordPress Content Blocks: Advanced". The full course is available from [LinkedIn Learning](https://linkedin.com/learning).

## Instructions

This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

## Branches

The branches are structured to correspond to the videos in the course. The naming convention is `CHAPTER#_MOVIE#`. As an example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter.
Some branches will have a beginning and an end state. These are marked with the letters `b` for "beginning" and `e` for "end". The `b` branch contains the code as it is at the beginning of the movie. The `e` branch contains the code as it is at the end of the movie. The `master` branch holds the final state of the code when in the course.

## Installing

1. To use these exercise files, you must have the following installed:
   - WordPress
   - Node and NPM
2. Clone this repository to the `/wp-content/plugins/` folder of your local WordPress installation using the terminal (Mac), CMD (Windows), or a GUI tool like SourceTree.
3. Run `npm install` in terminal to install dependencies.
4. Run `npm run start` to start the development process.
5. In WordPress, activate the "Podkit" plugin.

## Recommended VS Code extensions

- [ESLint](https://marketplace.visualstudio.com/itemdetails?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/itemdetails?itemName=esbenp.prettier-vscode)
- [stylelint](https://marketplace.visualstudio.com/itemdetails?itemName=shinnn.stylelint)
