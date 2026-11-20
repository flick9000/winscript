import en from "@shared/i18n/locales/en.json";

export function withFallback(
    locale: Record<string, string>,
): Record<string, string> {
    return { ...en, ...locale };
}
