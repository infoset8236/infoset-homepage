import { z } from 'zod';

export const SectionIdSchema = z.enum([
    'hero',
    'service',
]);

export type SectionId = z.infer<typeof SectionIdSchema>;

export const SectionsSchema = z.array(SectionIdSchema);
