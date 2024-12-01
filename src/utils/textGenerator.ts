import { Author, AUTHORS } from './authors';
import type { CopyResult } from '../types';

export function generateParagraphs(count: number, author: Author): string[] {
  const authorParagraphs = AUTHORS[author];
  const result: string[] = [];
  
  for (let i = 0; i < count; i++) {
    const index = i % authorParagraphs.length;
    result.push(authorParagraphs[index]);
  }
  
  return result;
}

export async function copyToClipboard(text: string): Promise<CopyResult> {
  try {
    await navigator.clipboard.writeText(text);
    return { success: true };
  } catch (error) {
    console.error('Failed to copy text:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}