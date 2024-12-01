import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { NumberSelector } from './components/NumberSelector';
import { TextDisplay } from './components/TextDisplay';
import { AuthorSelector } from './components/AuthorSelector';
import { generateParagraphs } from './utils/textGenerator';
import type { Author } from './types';

function App() {
  const [paragraphCount, setParagraphCount] = useState(3);
  const [selectedAuthor, setSelectedAuthor] = useState<Author>('atwood');
  const paragraphs = generateParagraphs(paragraphCount, selectedAuthor);

  return (
    <div className="min-h-screen bg-midnight-950 text-amber-100 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen size={36} className="text-copper-400" />
              <h1 className="text-5xl vintage-heading text-amber-100">
                Literem Ipsum
              </h1>
            </div>
            <p className="vintage-text text-lg max-w-xl text-amber-200">
              Generate literary filler text inspired by the world's greatest authors.
              Select your preferred writer and customize the length to your needs.
            </p>
          </div>

          <div className="bg-midnight-900/90 backdrop-blur-sm border border-midnight-700 p-8 rounded-xl w-full max-w-2xl shadow-lg">
            <div className="space-y-8">
              <AuthorSelector
                selectedAuthor={selectedAuthor}
                onAuthorChange={setSelectedAuthor}
              />
              
              <div>
                <label className="block text-lg font-medium text-amber-100 mb-3">
                  Number of Paragraphs (1-8)
                </label>
                <NumberSelector
                  value={paragraphCount}
                  onChange={setParagraphCount}
                  min={1}
                  max={8}
                />
              </div>
            </div>
          </div>

          <TextDisplay paragraphs={paragraphs} />
        </div>
      </div>
    </div>
  );
}

export default App;