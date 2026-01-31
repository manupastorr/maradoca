import { Performance } from "@/types/press-kit";

// Locations we consider "unknown" / not worth displaying.
const HIDDEN_LOCATION_VALUES = new Set([
  "",
  "unknown",
  "n/a",
  "na",
  "tbd",
  "other",
]);

// Known venue -> canonical location overrides (researched / standardized).
// If a venue is in here, we prefer this value over whatever is stored in Sanity.
const VENUE_LOCATION_OVERRIDES: Record<string, string> = {
  // Nature One takes place at Raketenbasis Pydna near Kastellaun.
  "NatureOne Camp": "Kastellaun (Pydna), Germany",

  // Halle venues: ensure we show Halle (Saale) consistently.
  "Station Endlos": "Halle (Saale), Germany",
  "Charles Bronson": "Halle (Saale), Germany",

  // Magdeburg venue naming.
  "Gewächshäuser": "Magdeburg, Germany",

  // If we only have the region, make it explicit.
  "Rooftop Party@ Villa Palma": "Sardinia, Italy",
};

function normalizeKey(s: string) {
  return s.trim();
}

export function getDisplayLocation(gig: Pick<Performance, "venue" | "location">) {
  const venue = normalizeKey(gig.venue ?? "");
  const rawLocation = normalizeKey(gig.location ?? "");

  const override = VENUE_LOCATION_OVERRIDES[venue];
  const location = (override ?? rawLocation).trim();

  if (!location) return null;
  if (HIDDEN_LOCATION_VALUES.has(location.toLowerCase())) return null;

  return location;
}
