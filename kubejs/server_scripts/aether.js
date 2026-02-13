// priority: 9


/**
 * 
 * 
 * 
 * Aether recipes
 */
ServerEvents.recipes((event) => {
  event.remove([
    { output: "aether:altar" },
  ]);

  event.remove({ output: 'nexus:gem_amethyst', type: 'minecraft:crafting_shaped' })

  //The Altar allows only specific items (usually aether+minecraft tools) to be recharged using ambrosium shards
  //THe original recipe had 1 zanite gemstone and 8 holystone blocks
  //https://aether.fandom.com/wiki/Zanite_Gemstone

  //It takes 6 ambrosium shards to restore any tool
  //Ambrosium is like aethers coal, but I think its a little less rare
  //Holystone Tools when being used have a chance to cause whatever they are being used on to drop an Ambrosium Shard.

  //Zanite is the second most common ore in The Aether. 
  //https://aether.fandom.com/wiki/Ambrosium_Shard

  //The altar smelts gravitite into enchanted gravitite (block)
  event.shaped(Item.of('aether:altar', 1), [
    'AZA',
    'ppp',
    'HHH',
  ], {
    Z: 'aether:zanite_block',
    // z: 'aether:zanite_gemstone',
    p: 'aether:skyroot_planks',
    A: 'kubejs:pyrotide_shard',
    H: 'aether:holystone',
  });

  event.shaped(Item.of('minecraft:lead', 1), [
    'AA ', 'AA ', '  A'], {
    A: 'minecraft:string'
  });

});
