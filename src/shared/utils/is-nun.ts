type NullOrUndefined = null | undefined;

export function isNotNuN<T>(
  value: T
): value is Exclude<T, NullOrUndefined> | Exclude<T, NullOrUndefined> {
  return !(value === null || value === undefined || Number.isNaN(value));
}
