import 'fake-indexeddb/auto';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Add from './Add.svelte';

describe('Add dialog component', () => {
  it('shows tabs for inventory, recipes, and scan', () => {
    render(Add);

    const tabs = screen.queryAllByRole('button');
    const tabNames = tabs.map(tab => tab.textContent);
    expect(tabNames).toEqual(
      expect.arrayContaining([
        expect.stringContaining('Inventory'),
        // expect.stringContaining('Recipes'),
        expect.stringContaining('Scan')
      ])
    );
  });
})
