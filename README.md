# SQL Query Editor
## Deployed link
https://65563d5b952b94178c314cc7--lucky-paprenjak-e9fb91.netlify.app/
## Overview
This project appears to be a web application designed for SQL query editing and execution. Here's a basic overview of its components and functionalities:


- The application uses React's useState hook for managing state. There are two main states: query and result. The query state holds the SQL query that the user inputs, and the result state stores the output of the executed query.
- The application includes an SQL editor implemented using @monaco-editor/react, a package that provides a rich code editor. This editor is configured for SQL language, allowing users to write and edit SQL queries conveniently.
- The app includes a handleRun function that is triggered when the user clicks the 'Run' button. This function processes the query written in the editor, presumably by passing it to the mapper function which might handle the execution of the SQL query and return the result.
- There's a SQLDropdown component that seems to allow users to select from predefined SQL queries. This can be a helpful feature for users who want to run standard queries without typing them manually.
- The DataTable component is used to display the results of the executed query. It takes the result state as its data source.

## Framework

- **Vite+React** : You've chosen Vite as your build tool along with React as your front-end framework. Vite is known for its fast build times, leveraging modern browser capabilities, while React is a popular library for building user interfaces.
- **Tailwind CSS** : For styling, you've used Tailwind CSS, a utility-first CSS framework. Tailwind CSS allows for rapid UI development with its concise class names and is highly customizable.
- **Framer Motion** : For animations, you've integrated Framer Motion, a popular library for creating animations in React applications. Framer Motion provides a powerful and easy way to add animations and motion effects to React components.
- **Ant Design (Antd)** : For UI components, you've chosen Ant Design, which is a design system containing a set of high-quality React components. Ant Design is known for its enterprise-grade UI components that are customizable and offer a consistent design language.

## Pageload Time
The pageload time of the application is 0.06 seconds.
This was measured using a chrome extension.
The application has a less pageload time beacause of use of lazy loading of components.
- **Lazy Loading of Components** : Import components like Editor, SQLDropdown, and DataTable using React's lazy loading feature. This will split the code into different chunks and load them only when they are needed.



## Installation


Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/HemalDesai/SQLQueryEditor.git
```
```sh
cd SQLQueryEditor
```
```sh
npm i
```
```sh
npm run dev
```




