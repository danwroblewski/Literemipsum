import React from 'react';
import { Author, AUTHOR_NAMES } from '../utils/authors';

interface AuthorSelectorProps {
  selectedAuthor: Author;
  onAuthorChange: (author: Author) => void;
}

export function AuthorSelector({ selectedAuthor, onAuthorChange }: AuthorSelectorProps) {
  return (
    <div className="flex flex-col gap-3">
      <label className="block text-lg font-medium text-amber-100">
        Select Author Style
      </label>
      <div className="flex flex-wrap gap-2">
        {(Object.keys(AUTHOR_NAMES) as Author[]).map((author) => (
          <button
            key={author}
            onClick={() => onAuthorChange(author)}
            className={`px-4 py-2 rounded-md transition-all duration-200 font-medium ${
              selectedAuthor === author
                ? 'bg-copper-400 text-midnight-950 shadow-lg shadow-copper-400/20'
                : 'bg-midnight-800 text-amber-100 hover:bg-midnight-700 hover:text-amber-50'
            }`}
          >
            {AUTHOR_NAMES[author]}
          </button>
        ))}
      </div>
    </div>
  );
}