# React My Reads Project

Project developed for [React Nanodegree at Udacity](https://eu.udacity.com/course/react-nanodegree--nd019).
The bootstrap of this project was forked from this [repo](https://github.com/udacity/reactnd-project-myreads-starter).

For the bootstrap and setup [Create React App](https://github.com/facebookincubator/create-react-app) was used.

## The Project

The project consists in a stateful frontend application, responsible for management of a personal library.
It contains a series of shelves that hold books in different states. For example

```
- Books that I'm currently reading
- Books that I want to read
- Books that I've read already
```

It is possible to move a book from one shelf to another as well as remove it from the shelf visualization (like a deletion).

To add new books on the available shelves, there is a search page that allows the user to search new titles and select one of the shelves directly from the results.

## Technical

> All the commands shown on this section comprise both package managers: **yarn** and **npm**

### To Run

In order to run the project.

1. Clone the repository

```bash
git clone git@github.com:castrodrigo/react-my-reads-project.git
```

2. Inside the cloned folder

- 2.1 Install the packages with: **[yarn](https://yarnpkg.com/lang/en/)** or **[npm](https://www.npmjs.com/)**

```bash
yarn
```

```bash
npm start
```

- 2.2 After installing the packages, to run the app:

```bash
yarn start
```

```bash
npm start
```

- 2.3 The application will be available at port 3000. `http://localhost:3000`

### Tests

The appllications contains tests using `Jest` and `Enzyme`

1. Run tests

```bash
yarn test
```

```bash
npm run test
```

2. Run test coverage

```bash
yarn test --coverage
```

```bash
npm run test --coverage
```

### Project URLS

- List Page `http://localhost:3000/`
- Search Page `http://localhost:3000/search`

### Backend Server

The API used in this project was provided by Udacity at `https://reactnd-books-api.udacity.com`
