# NextEdge

# React Server Components
React Server Components is a new architecture that was introduced by the React Team and quickly adopted by Next.js
This architecture introduces a new approach to creating React Components by dividing them into two distinct types: 
1.  **Server Components**
2.  **Client Components**

## Server Components:

1. By Default Next.js treats all components as Server Components
2. These Components can perform server side tasks like reading files or fetching data directly from a database
3. The trade-off is that they can't use React hooks or handle user interactions

## Client Components:

1. To create a Client Component, you'll need to add the "use client" directive at the top of your component file
2. while client components cant perform server-side task like reading files or fetching data directly from a database they can use hooks and handle user interactions
3. Client component are the traditional React components you are already familiar with from previous versions of React.

## Routing:

Next.Js has a file-system based routing system
URLs you can access in your browser are determined by how you organize your files and folder in your code.

### Routing Conventions
1. All Routes must live inside the app folder
2. Route files must be named either page.js or page.tsx
3. Each folder represents a segment of the URL path

When these convenstions are followed. the file automatically becomes available as a route.

# Dynamic Routes: 
Refer products folder for dynamic routes understanding.

# Catch All Segments
/docs/feature1/concept1
/docs/feature1/concept2
/docs/feature2/concept1
/docs/feature2/concept2
20Features * 20Concepts = 400
20Features * 1Concept = 20
1Feature * 1Concept = 1
/docs/feature1/concept1/example1.../
need just 1 file to handle
Refer docs folder for understandings.

## Not Found Page
refer to component not-found.
NotFound component doesnot accept parms, instead it accept usePathName.
usePathname only works in Client Component so use use-client.

## File Colocation
File colocation is the practice of placing related files together in the same directory to improve organization, maintainability, and discoverability. In Next.js, this typically means keeping files like components, styles, tests, and hooks alongside the relevant page or feature.
refer- dashboard folder where we have a comp of linechart without worrying that this will be rendered while accessing dashboard.

## Private Folders:
A way to tell Next.js, "Hey, this folder is just for internal stuff - dont include it in the routing system"
1. The folder and all its subfolder are excluded from routing.
2. Add an underscore at the start of the folder name.
It is useful for a bunch of things:
- keeping your ui logic seperate from routing logic.
- Having a consistent way to organize internal files in your project.
- Making it easier to group related files in your code editor.
- Avoiding potential naming conflicts with future Next.js file naming conventions.
refer _lib folder:

# Route Groups:

Lets us logically organize our routes and project files without impacting the URL structure.
- refer auth folder to get the concept.
- initially we are using pages inside auth, but to get rid of auth we can use parenthesis.

Allow you to organize your application’s routes without affecting the URL structure. This is useful for structuring your project logically without exposing unnecessary folder names in the final URL.

# Layout
Pages are route specific components
A layout is UI that shared between multiple pages in you app. It creates a consistent UI that renders throughout application.
Think it as a: 
Header
Content
Footer
Now this Header and Footer will be fixed irrespective of page routing.
Creating Layout:
Default export a React Component from a layout.js or layout.tsx file
The component takes a children prop, which next js populate with your page content. 
refer layout.tsx file:

# Nested Layouts
Allow you to reuse layouts across multiple pages while maintaining a hierarchical structure.
Refer to productId > layout.tsx file 

# Multi Layouts: 
In Next.js, multiple layouts allow different sections of your app to have separate layouts. Instead of using a single layout for all pages, you can apply different layouts to different parts of your application.

For example:

- A public layout for pages like Home and About
- An admin layout for dashboard pages
- A user layout for authenticated user pages

# Routing metadata
The Metadata API in Next.js is a powerful feature that lets you define metadta for each page
Metadata ensures our content looks great when its shared or indexed by search engines.
Two ways to handle metadata in layout.tsx or page.tsx files:
1. export a static metadata object
2. export a dynamic generateMetadata function

## Metadata Rules:
- Both layout.tsx and page.tsx can export metadata. Layout metadata applies to all its pages, while page metadata is specific to that page.
- Metadata follows a top-down order, starting from the root level
- When metadata exsists in multiple places along a route, they merge together with page metadata overriding layout metadata for matching properties.

to use the client componnet with metadata import from another file: refer counter folder

# Title Metadata
- The Title fields primary purpose is to define the document title 
- It can be either a string or an **Object**

# Navigations
File based routing system
Defining routes for our application's root, nested routes, dynamic routes, and catch-all routes
We've been typing URLs directly in the browser to test three routes

Users 
- click on links
- get redirected after certain actions

Link Component Navigation
For client-side navigation, next.js gives us the <Link> component 

The <Link> component is a react component that extends the HTML <a> element and its the primary way to navigate between routwes in Next Js. 

# Active Link 
giving a different look and style to actives link.
usePathName hook to be used to check active-link, and it works only in client component. (use client)
refer auth folder/ layout file to get this concept

## params and searchParams
For a given URL: 
params is a promise that resolves to an object containing the dynamic route parameter (like id)
searchParams is a promise that resolves to an object containing the query parameters (like filtering and sorting)
while page.tsx has access to both params and searchParams, layout.tsx only has acess to params.

**client component("use client") doesnt support async await**
In case of client compoent, we have a hook for promising resolving - use hook.
In case of server compoent, we have a async await for promise resolving.
refer articles - folter to get the above
