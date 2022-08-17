### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

  - React router is used so that we can manipulate the routes in react

- What is a single page application?

  - a single page application is when everything is already loaded at the start and the page doesn't refresh

- What are some differences between client side and server side routing?

  - Client side routing doesn't have to make a new request each time there's a new route while server side has to make a new request for each route

- What are two ways of handling redirects with React Router? When would you use each?

  - you can push on the useHistory hook and you can use the Redirect component by redirecting
  - with Redirecting, you would use this when someone doesn't have permission to access a page or if they got the wrong link, you want to redirect them to the correct place
  - with useHistory, you use this when you are submitting a form and after you submit something, you want to redirect them back to the home page or another page. you also want to use this when you want to allow the user to be able to go back to the page before the redirect.

- What are two different ways to handle page-not-found user experiences using React Router?

  - you can use a default route at the end of all the routes or you can redirect to the home page

- How do you grab URL parameters from within a component using React Router?

  - you can use the hook useParams from react-router-dom

- What is context in React? When would you use it?

  - you would use context is an API in React when you need to pass down props down multiple levels from a parent to great great great grandchildren it would be easier to just use context instead of drilling down the prop down each level and passing it down each time

- Describe some differences between class-based components and function
  components in React.

  - function components are a lot newer and easier to use

- What are some of the problems that hooks were designed to solve?

  - the use of hooks reduces the number of concepts needed in the development of react applications and so we don't have to switch between functions and classes
