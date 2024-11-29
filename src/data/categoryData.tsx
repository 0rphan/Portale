// src/data/categoryData.ts

export interface Category {
  name: string;
  borderColor: string;
}

export const categories: Category[] = [
  { name: 'Word Guessing', borderColor: '#4CAF50' },  // Green
  { name: 'Geography', borderColor: '#2196F3' },      // Blue
  { name: 'Photography', borderColor: '#FFC107' },    // Yellow
  { name: 'Word Puzzle', borderColor: '#FF5722' },    // Orange
  { name: 'Pokemon', borderColor: '#9C27B0' },        // Purple
  { name: 'Music', borderColor: '#3F51B5' },          // Indigo
  { name: 'Movies', borderColor: '#E91E63' },         // Pink
];
