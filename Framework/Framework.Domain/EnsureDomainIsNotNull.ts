import { Entity } from "./Entity";

export function EnsureDomainIsNotNull<T extends Entity | null>(
  domain: T
): asserts domain is NonNullable<T> {
  if (!domain) {
    throw new Error("entity is null");
  }
}
