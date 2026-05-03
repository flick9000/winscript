import en from "./locales/en.json";

export function withFallback(locale: Record<string, string>): Record<string, string> {
  return { ...en, ...locale };
}
