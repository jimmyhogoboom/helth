import { getInventory } from '../stores/db.js';
export const ssr = false;

export async function load() {
  return {
    inventory: getInventory()
  };
}
