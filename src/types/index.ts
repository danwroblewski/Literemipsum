// Common types used across the application
export interface TextGeneratorOptions {
  paragraphCount: number;
  author: Author;
}

export interface CopyResult {
  success: boolean;
  error?: string;
}

// Re-export author types for convenience
export type { Author } from '../utils/authors';