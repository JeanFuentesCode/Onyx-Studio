'use server';
/**
 * @fileOverview A Genkit flow for generating a concise summary of product information.
 *
 * - generateProductSummary - A function that generates a product summary using AI.
 * - GenerateProductSummaryInput - The input type for the generateProductSummary function.
 * - GenerateProductSummaryOutput - The return type for the generateProductSummary function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

// Input Schema
const GenerateProductSummaryInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  productDescription:
    z.string().describe('A detailed description of the product.'),
  productFeatures:
    z.array(z.string()).describe('A list of key features of the product.'),
});
export type GenerateProductSummaryInput = z.infer<typeof GenerateProductSummaryInputSchema>;

// Output Schema
const GenerateProductSummaryOutputSchema = z.string().describe('A concise summary of the product highlighting its key features and description.');
export type GenerateProductSummaryOutput = z.infer<typeof GenerateProductSummaryOutputSchema>;

// Wrapper function
export async function generateProductSummary(
  input: GenerateProductSummaryInput
): Promise<GenerateProductSummaryOutput> {
  return generateProductSummaryFlow(input);
}

// Genkit Prompt
const generateProductSummaryPrompt = ai.definePrompt({
  name: 'generateProductSummaryPrompt',
  input: { schema: GenerateProductSummaryInputSchema },
  output: { schema: GenerateProductSummaryOutputSchema },
  prompt: `You are an AI assistant tasked with generating concise and easy-to-understand summaries of product information.
Given the following product details, generate a summary that highlights its key features and description.
The summary should be no more than 100 words.

Product Name: {{{productName}}}
Product Description: {{{productDescription}}}
Product Features:
{{#each productFeatures}}
- {{{this}}}
{{/each}}`,
});

// Genkit Flow
const generateProductSummaryFlow = ai.defineFlow(
  {
    name: 'generateProductSummaryFlow',
    inputSchema: GenerateProductSummaryInputSchema,
    outputSchema: GenerateProductSummaryOutputSchema,
  },
  async (input) => {
    const { output } = await generateProductSummaryPrompt(input);
    if (!output) {
      throw new Error('Failed to generate product summary.');
    }
    return output;
  }
);
