# NextEdge

# React Server Components
React Server Components is a new architecture that was introduced by the React Team and quickly adopted by Next.js
This architecture introduces a new approach to creating React Components by dividing them into two distinct types: 
**-Server Components**
**-Client Components**

# Server Components:

**- By Default Next.js treats all components as Server Components**
**- These Components can perform server side tasks like reading files or fetching data directly from a database**
**- The trade-off is that they can't use React hooks or handle user interactions**

# Client Components:

**- To create a Client Component, you'll need to add the "use client" directive at the top of your component file**
**- while client components cant perform server-side task like reading files or fetching data directly from a database they can use hooks and handle user interactions**
**- Client component are the traditional React components you are already familiar with from previous versions of React**