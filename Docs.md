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
│ │ ├── hooks/
│ │ │ └── useBooks.js
│ │ ├── api/
│ │ │ ├── client.js
│ │ │ └── queries.js
│ │ ├── App.jsx
│ │ └── Landing.jsx
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

- **Purpose**: Initializes the Apollo Client and wraps the application in the `ApolloProvider`.
- **Main Functionality**:
  - Provides GraphQL capabilities to the application.
  - Renders the `Landing` component, which contains the main UI.

### Landing.jsx

- **Purpose**: Main container for the application's UI.
- **Main Functionality**:
  - Fetches book data using a custom hook (`useBooks`).
  - Manages state for the modal popup and the selected book.
  - Displays a loading skeleton while data is being fetched.
  - Renders the `Navbar` component and a grid of book cards.
  - Opens a modal with detailed information when a book card is clicked.

### Navbar.jsx

- **Purpose**: Provides a search bar at the top of the page.
- **Main Functionality**:
  - Fixed at the top of the page with a translucent background.
  - Contains the `Search` component for searching books.

### Search.jsx

- **Purpose**: Allows users to search for books by title.
- **Main Functionality**:
  - Uses Material-UI's `Autocomplete` for the search bar.
  - Filters books based on user input.
  - Opens a popup with book details when a search result is selected and the search icon or Enter key is pressed.

### Popup.jsx

- **Purpose**: Displays detailed information about a selected book in a modal.
- **Main Functionality**:
  - Shows the book title, cover photo, and description.
  - Closes when clicking outside the modal or the close button.

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
