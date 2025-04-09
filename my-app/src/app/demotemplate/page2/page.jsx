// app/demo/page2/page.js
import Link from 'next/link';

export default function Page2() {
  return (
    <div>
      <h3>Page 2 Content</h3>
      <p>The input will reset when coming back from Page 1</p>
      <div className="mt-4 space-x-4">
        <Link href="/demotemplate/page1" className="text-blue-600 underline">
          Go to Page 1
        </Link>
      </div>
    </div>
  );
}
