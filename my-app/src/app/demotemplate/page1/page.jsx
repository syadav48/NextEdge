import Link from "next/link";

// app/demo/page1/page.js
export default function Page1() {
    return (
      <div>
        <h3>Page 1 Content</h3>
        <p>Notice how the input resets when switching pages</p>
        <div className="mt-4 space-x-4">
        <Link href="/demotemplate/page2" className="text-blue-600 underline">
          Go to Page 2
        </Link>
      </div>
      </div>
    );
  }