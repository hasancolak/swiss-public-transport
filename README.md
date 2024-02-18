# Swiss Public Transport Planner

This project is a public transport planner for Switzerland. It allows to find the next connections between two addresses within Switzerland. The connections are represented by text (departure & arrival time), including a graphic representation of the travel time and stations to change.

## Getting Started

### Installation

```sh
yarn install
# or
npm install
```

### Prepare local

Firs, copy the root `.env.example` file as `.env` file.

### Run local

```sh
yarn dev
# or
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) with your browser to see running application on local.

### Available scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `test` - launch test runner
- `format` Prettier formater
- `lint` linting
- `typecheck` Checks for type

```sh
yarn dev
yarn start
yarn build
yarn test
yarn format
yarn lint
yarn typecheck
```

### Usage

- Visit the deployed app on [hasan-colak-swiss-public-transport.vercel.app](https://hasan-colak-swiss-public-transport.vercel.app/) or run it localy.
- Type start location into `from` input area.
- Type end location into `to` input area.
- The connections result for transport will appear on the screen.
- Click any connection point to see the detail.

## Architecture and Design

In designing the solution, I aimed for a robust architecture that ensures scalability, maintainability, and reusability of components. I adopted a feature-based structure following the principles of atomic design.

### Feature-Based Structure:

- Each feature of the application is encapsulated within its own directory, containing all related components, styles, test and logic.
- This approach facilitates easier navigation, isolation of concerns, and allows for better code organization.

### Atomic Design:

- Components are organized into atomic design principles, with atoms representing the smallest building blocks, molecules composing higher-level components.
- This design methodology promotes component reusability and ensures consistency throughout the application.

### Increased Query Performance (RTK Query)

**Use Case :** Optimizing query performance is crucial for a responsive and efficient application.

**Solution :** RTK Query is utilized to enhance performance through features such as caching, auto-generated query hooks, and automatic cache invalidation. Caching reduces redundant network requests by storing API responses locally, while auto-generated query hooks simplify data fetching and management. Additionally, RTK Query's automatic cache invalidation ensures that data remains up-to-date without manual intervention.

## Followed Coding Standards and Best Practices

- Don't Repeat Yourself (DRY)
- Separation of Concerns (SoC)
- SOLID Principles
- Naming Convention
- Commenting
- Type Safety
- Styling Principles
- Semantic HTML

## Isues

### Nextjs style duplication bug

- fix(nextjs-duplicate-style): [Using index files for imports causes duplicate CSS in page and layout CSS files](https://www.reddit.com/r/nextjs/comments/17q4yb4/using_index_files_for_imports_causes_duplicate/)

I have fixed that problem withhin the [commit eb57602](https://github.com/hasancolak/swiss-public-transport/commit/eb57602651e2dd9b12ea94c49ba1d6eb9d847632)

## Improvement Points

### Log

Implementing a centralized log component within the React application to monitor application behavior, track errors, and ensure availability.

### Adding integration and end-to-end test

I have configured unit test. It is also necessary to expand the test with integration and End-to-End (E2E) tests to ensure Quality, reduce bugs, facilitate refactoring, and enable continuous integration and delivery.

Integration tests provide confidence that different parts of the application work together harmoniously, detecting issues that may arise from interactions between components or changes in dependencies.

End-to-End tests provide comprehensive coverage and confidence in the overall functionality and usability of the application. E2E tests simulate real user scenarios, interacting with the application as a user would, from the UI to the backend services.

## API Reference

[Swiss public transport API](https://transport.opendata.ch/docs.html)
