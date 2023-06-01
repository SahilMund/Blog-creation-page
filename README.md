# Blog Creation Page

This repository contains the code for a blog creation page with the following features:

1. <strong>Title Field</strong>: A field where users can enter the title of the blog post.
2. <strong>Description Field</strong>: A field where users can enter a brief description of the blog post.
3. <strong>Content Field</strong>: A rich text editor powered by CKEditor library, allowing users to write and format the content of the blog post.
4. <strong>Submit Button</strong>: A button that performs local validations on the fields before submitting the blog post.
5. <strong>Responsiveness</strong>: The page is designed to scale well for both smaller mobile and larger desktop displays using Bootstrap framework.
6. <strong>Styling</strong>: The page is styled with a decent design to make it visually appealing.
7. <strong>Validation</strong>: Local validations are implemented to ensure that all required fields are filled before submitting the blog post.
8. <strong>Code Structure</strong>: The code is well-structured, organized into smaller logical chunks with proper documentation.
9. <strong>Local Storage</strong>: Once the blog post is submitted, the details are stored in the browser's local storage. 
10. <strong> Home Page</strong>: The home page fetches the blog post details from local storage and displays them in the user interface.

## Getting Started :-

To run the blog creation page locally, follow these steps:

1. Clone this repository to your local machine or download the source code as a ZIP file.

```
git clone https://github.com/SahilMund/Blog-creation-page.git
```

2. Open the project in your preferred code editor.

3. Install the dependencies by running the following command:

```
npm install
```

4. Start the development server with the following command:

```
npm start
```

5. Open your web browser and visit http://localhost:3000 to view the blog creation page.


## Dependencies :-

The blog creation page utilizes the following dependencies:

- React: JavaScript library for building user interfaces.
- React Router: Library for handling routing in a React application.
- Bootstrap: CSS framework for responsive and mobile-first web development.
- CKEditor: Rich text editor library for creating and formatting the content.

## Folder Structure :-

```
.gitignore
README.md
package-lock.json
package.json
public
   |-- 404.html
   |-- favicon.ico
   |-- index.html
   |-- logo192.png
   |-- logo512.png
   |-- manifest.json
   |-- robots.txt
src
   |-- App.css
   |-- App.js
   |-- components
   |   |-- NavBar.js
   |-- index.css
   |-- index.js
   |-- pages
   |   |-- 404.js
   |   |-- CreateBlog.js
   |   |-- HomePage.js
   |-- styles.js
   |-- utils
   |   |-- localStorage.js
```

- The public folder contains the HTML template and other static assets.
- The src folder contains the source code for the blog creation page.
- The components and pages folder contains the React components for creating the blog and displaying the home page and Navbar component.
- The utils folder contains utility functions for working with local storage.
- The App.js file is the main entry point of the application.
- The index.js file is responsible for rendering the React components into the DOM.
- The index.css file contains the global CSS styles for the application.
- The .gitignore file specifies which files and directories should be ignored by version control.
- The package.json file lists the project's dependencies and contains scripts for running the application.
- The README.md file provides information about the project and how to run it.