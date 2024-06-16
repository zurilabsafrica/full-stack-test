# Book Viewer Web App

This documentation provides a comprehensive overview of the Book Viewer web application.

## File Structure

```
book-viewer-web-app/
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Navbar.jsx
│ │ │ ├── Popup.jsx
│ │ │ └── Search.jsx
│ │ ├── features/
│ │ │ ├── store.jsx
│ │ │ ├── teacherSlice.jsx
│ │ ├── hooks/
│ │ │ └── useBooks.js
│ │ ├── api/
│ │ │ ├── client.js
│ │ │ └── queries.js
│ │ ├── psges/
│ │ │ ├── Landing.jsx
│ │ │ └── Listing.jsx
│ │ ├── App.jsx
│ │ └── main.jsx
│ │ └── index.css
│ │ └── package.json
│ │ └── package-lock.json
│ │ └── postcss.config.js
│ │ └── tailwind.config.js
│ │ └── vite.config.js
├── backend/
| ├── (GraphQL server files)
├── .gitignore
├── README.md
├── Docs.md
└── .prettierrc
```

## Logic and Design

### App.jsx

- **Purpose**: Initializes the React Router Dom and wraps the application in the `BrowserRouter` component for routing.
- **Main Functionality**:
  - Provides dynamic routing for the apliation's pages.

### Landing.jsx

- **Purpose**: Landing page for the application's UI.
- **Main Functionality**:
  - Fetches book data using a custom hook (`useBooks`).
  - Manages state for the modal popup and the selected book.
  - Displays a loading skeleton while data is being fetched.
  - Renders the `Navbar` component and a grid of book cards.
  - Opens a modal with detailed information when a book card is clicked.

### Listing.jsx

- **Purpose**: Listing page for books added to the reading list in the store.
- **Main Functionality**:
  - Fetches listed books from the store using the react-redux hook (`useSelector`).
  - Manages state for the modal popup and the selected book.
  - Renders the `Navbar` component and a grid of listed book cards.
  - Opens a modal with detailed information when a listed book card is clicked.

### Navbar.jsx

- **Purpose**: Provides a search bar at the top of the page alongside routing for the appliation's pages.
- **Main Functionality**:
  - Handles page routing using the (`useNavigate`) hook from `react-router-dom`
  - Contains the `Search` component for searching books, and the Home and Book icons for the Landing page and the Listing page respectively.

### Search.jsx

- **Purpose**: Allows users to search for books by title.
- **Main Functionality**:
  - Uses Material-UI's `Autocomplete` for the search bar which dynamically displays the passed books array as a prop.
  - Filters books based on user input.
  - Opens a popup with book details when a search result is selected and the search icon or Enter key is pressed.

### Popup.jsx

- **Purpose**: Displays detailed information about a selected book in a modal.
- **Main Functionality**:
  - Shows the book title, cover photo, and description.
  - Enables the ability to add a book to the book listing through the `Add to Listing` buttton which dispatches the `addToReadingList` reducer in the `teacherSlice` attached to the application's store.
  - Enables the ability to remove a book from the book listing through the `Remove from Listing` buttton which dispatches the `removeFromReadingList` reducer in the `teacherSlice` attached to the application's store.
  - Dynamically renders the two buttons depending on the availability of the book in the `readingList` state of the store through the use of the `isBookInReadingList` selector in the `teacherSlice`.
  - Closes when clicking outside the modal or the close button.

### store.js

**Purpose**: To configure and create the Redux store for state management.

- **Main Functionality**:
  - Configures the Redux store using the `@reduxjs/toolkit` library.
  - Integrates the `teacherReducer` to manage the state related to teachers.

### teacherSlice.js

**Purpose**: To define the state and reducers for managing teacher-related data.

- **Main Functionality**:
  - Defines the initial state for teacher-related data including `searchResults`, `readingList`, and `allBooks`.
  - Provides reducers for:
    - Adding all books to the state.
    - Searching for books based on a search term.
    - Adding a book to the reading list.
    - Removing a book from the reading list.
  - Exports action creators for the defined reducers.
  - Provides selectors to access specific parts of the teacher state such as `searchResults`, `readingList`, `allBooks`, the number of books in the reading list, and to check if a book is in the reading list.

### Custom Hook (useBooks.js)

- **Purpose**: Fetches book data from the GraphQL server.
- **Main Functionality**:
  - Uses Apollo Client's `useQuery` hook to execute the `GET_BOOKS` query.
  - Returns loading, error, and data states to the components.

### Apollo Client Setup (client.js)

- **Purpose**: Configures the Apollo Client for GraphQL requests.
- **Main Functionality**:
  - Sets the URI for the GraphQL server.
  - Configures the cache for efficient data management.

### GraphQL Query (queries.js)

- **Purpose**: Defines the GraphQL query for fetching book data.
- **Main Functionality**:
  - Specifies the `books` query, which returns book titles, authors, cover photo URLs, and reading levels.

## Styling Guidelines

- **Font**: Uses the "Mulish" Google Font for consistency and readability.
- **Colors**: Incorporates the predefined color palette for UI elements, defined in the tailwind config file.
- **Responsive Design**: Ensures the UI is consistent and functional across different screen sizes.
