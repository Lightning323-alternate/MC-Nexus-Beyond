// priority: 10

/*
Disable ALL cyclic loot tables
kubejs loot events:
- ServerEvents.blockLootTables
- ServerEvents.entityLootTables 
- ServerEvents.giftLootTables
- ServerEvents.fishingLootTables
- ServerEvents.chestLootTables

LootJS Loot Types:
- LootType.UNKNOWN
- LootType.BLOCK
- LootType.ENTITY
- LootType.CHEST
- LootType.FISHING
- LootType.GIFT 
*/

/**
 * Test the loot blocker
 */
// LootJS.modifiers((event) => {
//   event
//     .addLootTypeModifier(LootType.BLOCK)
//     .randomChance(1.0)
//     .addLoot("kubejs:worldedit_wand");
//   event
//     .addLootTypeModifier(LootType.ENTITY)
//     .randomChance(1.0)
//     .addLoot("kubejs:worldedit_wand");
//   event
//     .addLootTypeModifier(LootType.CHEST)
//     .randomChance(1.0)
//     .addLoot("kubejs:worldedit_wand");
// });

/**
 * Add loot (alredy have loot for this)
 */
// LootJS.modifiers((event) => {
//   event.addLootTypeModifier(LootType.CHEST).randomChance(0.15).addLoot("createkinetic:freeze_ship_totem");
//   event.addLootTypeModifier(LootType.CHEST).randomChance(0.2).addLoot("createkinetic:ship_totem");
// });


const loot_blacklist = [
  "kubejs:worldedit_wand",
  "kubejs:worldedit_nav",
  "lootr:trophy",
];

/**
 * Remove loot
 */
LootJS.modifiers((event) => {
  //Block loot should not contain any OP stuff and It needs to be kept for the sake of the existing whitelisted items
  event
    .addLootTypeModifier([
      LootType.ENTITY,
      LootType.UNKNOWN,
      // LootType.BLOCK,
      LootType.CHEST,
      LootType.FISHING,
      LootType.GIFT,
    ])
    .apply((context) => {
      try {
        let lootToRemove = [];
        context.forEachLoot((item) => {
          let itemIDString = item.id.toString(); //This is the item name
          // console.log("LOOT: " + itemIDString);

          let block = itemIDString.startsWith("cyclic:") || loot_blacklist.includes(itemIDString);
          if (block) {
            // console.log("LOOT: Removing loot: " + itemIDString);
            lootToRemove.push(item);
          }
        });
        for (let i = 0; i < lootToRemove.length; i++) {
          context.removeLoot(lootToRemove[i]);
        }
      } catch (error) {
        console.log("LOOT ERROR: " + error);
      }
    });
});