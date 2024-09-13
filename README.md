This project is a React.js application with TypeScript that renders items and includes a login page with JWT-based authentication.

The Screenshot has been added to the wiki folder

Project Setup:

Node.js (v14+)
NPM or Yarn package manager

Installation:

1. Clone the repository to your local machine:

git clone https://github.com/chabikant/my-project.git
cd my-project

2. Install dependencies:

npm install

Ensure your backend is running on localhost:8000.

3. Run the React development server:

npm start

5. The application will be available at http://localhost:3000.

6. How to run the project
After running the React development server (npm start), navigate to http://localhost:3000.
The application starts with a login page.
Enter valid credentials to log in and be redirected to the items page, where items will be fetched from the API.

Custom Hook: useApi
The custom hook useApi is designed to handle all API requests within the application. It abstracts away the complexity of managing JWT tokens, handling token expiration, and retrying API calls with a refreshed token.

Key Features of the useApi Hook:

1. Token Management:

The hook automatically attaches the JWT token to the Authorization header for API requests.
It fetches the token from localStorage where it’s saved during login.

2. Token Refresh:

If an API call fails due to token expiration (401 Unauthorized), the hook automatically attempts to refresh the token using the refresh token.
It retries the failed request after refreshing the token.

3. Error Handling:

Handles API errors and token expiration scenarios. In case of refresh failure, the user is logged out.

This should give your project documentation clear instructions for usage, assumptions, and the working of the custom useApi hook.

















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
