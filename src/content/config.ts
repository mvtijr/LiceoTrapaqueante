import { z, defineCollection } from 'astro:content';

const noticiasCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        author: z.string().optional(),
        image: z.string().optional(),
    }),
});

export const collections = {
    'noticias': noticiasCollection,
};
