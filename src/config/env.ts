import { z } from "zod";

// Blank or malformed analytics values fall back to undefined so callers use
// their defaults; a bad value must never take down every page.
const optionalString = z.string().trim().min(1).optional().catch(undefined);

const clientEnvSchema = z.object({
	VITE_POSTHOG_KEY: optionalString,
	VITE_POSTHOG_HOST: z.string().trim().url().optional().catch(undefined),
	VITE_GTM_ID: optionalString,
	VITE_CAL_LINK: optionalString,
});

export const clientEnv = clientEnvSchema.parse(import.meta.env);

const serverEnvSchema = z.object({
	ATTIO_API_TOKEN: z.string().optional(),
});

export function getServerEnv() {
	return serverEnvSchema.parse(process.env);
}
