// app/demo/template.js
'use client'; // Required for useState

import { useState } from 'react';

import { ReactNode } from 'react';

export default function DemoTemplate({ children }: { children: ReactNode }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="border-2 border-blue-500 p-4 m-4">
      <h2 className="text-lg font-bold mb-2">Template Wrapper</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
        className="border p-2 mb-4"
      />
      <p className="mb-2">Current input value: {inputValue}</p>
      <div className="border-2 border-green-500 p-4">
        {children}
      </div>
    </div>
  );
}