type NullOrUndefined = null | undefined;

export function isNuN<T = NullOrUndefined>(value: T): value is T {
  return value === null || value === undefined || Number.isNaN(value);
}