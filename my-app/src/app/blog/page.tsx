export const metadata = {
  title: {
    absolute: 'Blog' 
  },
};

export default async function Blog() {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve("delay")
      }, 2000)
    })
    return (
      <h1>My Blogging</h1>
    );
  }