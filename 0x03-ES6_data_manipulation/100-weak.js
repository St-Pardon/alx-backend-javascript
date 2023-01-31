export const weakMap = new WeakMap();

/**
 * Track within the weakMap the number of times queryAPI is called for each endpoint.
 * @param {WeakMap} endpoint - weakmap of http response
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) weakMap.set(endpoint, 0);
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= 5) throw new Error('Endpoint load is high');
}
