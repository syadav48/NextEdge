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

# Not Found Page
refer to component not-found.
NotFound component doesnot accept parms, instead it accept usePathName.
usePathname only works in Client Component so use use-client.