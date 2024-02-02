// export const idMigrate = (inventory: InventoryItem[], recipes?: Recipe[]) => 
// {
// }

export const migrateInventoryIds = (inventory: InventoryItem[]) => {
  return inventory.map(({ id }) => {
    let newId: number = 100;
    if(id) {
      newId= id + 100;
    }
    return newId;
  })
}

// TODO: should only return the changed recipe per oldId
export const migrateRecipeItemIds = (recipes: Recipe[], oldId: number | undefined, newId: number | string): (Recipe | null)[] => {

  return recipes.map(( recipe: Recipe ) => {
    recipe.items = recipe.items.map((item: RecipeItem): RecipeItem => { 
      if(item.id === oldId) {
        item.id = newId;
      }
      return item;
    })
    return recipe;
  })
}
