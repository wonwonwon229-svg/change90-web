import React from 'react';

export interface Testimonial {
  id?: number;
  name: string;
  role?: string;
  content?: string;
  text?: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}