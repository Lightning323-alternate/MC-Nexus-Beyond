
/**
 * 
 * 
 * 
 * Create addons
 */
ServerEvents.recipes((event) => {
  event.remove([
    { output: "create_enchantment_industry:printer" },
    { output: "vs_clockwork:gas_thruster" },
    { output: "nexus:glowing_helmet" }
  ]);

  event.recipes.create.mechanical_crafting(
    Item.of('vs_clockwork:gas_thruster', 1), [
    'IDI',
    'BcB',
    'ipi',
    'i i',
  ], {
    I: 'create:industrial_iron_block',
    D: 'vs_clockwork:duct',
    B: 'minecraft:iron_bars',
    i: '#forge:plates/iron',
    p: 'create:propeller',
    c: 'tjetpacks:combustion_chamber',
  });

  event.shaped(Item.of('nexus:glowing_helmet', 1), [
    ' g ',
    'gjg',
    'd d',
  ], {
    g: 'minecraft:gold_ingot',
    j: 'mowziesmobs:glowing_jelly',
    d: 'minecraft:glowstone_dust',
  });

  //We can reprint enchantments with this
  event.shaped(Item.of("create_enchantment_industry:printer", 1), [
    " C ",
    "BGB",
    "III"
  ],
    {
      C: "create:copper_casing",
      B: "minecraft:dried_kelp",
      I: "#forge:plates/iron",
      G: "minecraft:amethyst_shard"
      //G: "nexus:gem_tanzanite"
    });




  //  event.recipes.thermal.press('numismatics:spur', ['thermal:copper_coin', 'thermal:press_coin_die']);
  event.shapeless('numismatics:spur', ['thermal:copper_coin']);
  event.shapeless('thermal:copper_coin', ['numismatics:spur']);

  event.recipes.thermal.press('numismatics:sprocket', ['thermal:silver_coin', 'thermal:press_coin_die']);
  event.recipes.shapeless('thermal:silver_coin', ['numismatics:sprocket']);


  event.recipes.shapeless('numismatics:bevel', [Item.of('numismatics:spur', 8)]);
  event.recipes.shapeless(Item.of('numismatics:spur', 8), [Item.of('numismatics:bevel', 1)]);


  event.recipes.shapeless(Item.of('numismatics:bevel', 2), [Item.of('numismatics:sprocket', 1)]);
  event.recipes.shapeless('numismatics:sprocket', [Item.of('numismatics:bevel', 2)]);

  event.recipes.shapeless('numismatics:sun', [Item.of('numismatics:crown', 8)]);
  event.recipes.shapeless(Item.of('numismatics:crown', 8), [Item.of('numismatics:sun', 1)]);

  event.recipes.shapeless('numismatics:crown', [Item.of('numismatics:cog', 8)]);

  event.recipes.thermal.press('numismatics:crown', ['createdeco:netherite_coin', 'thermal:press_coin_die']);
  event.recipes.shapeless('createdeco:netherite_coin', ['numismatics:crown']);

  event.recipes.shapeless('numismatics:cog', [Item.of('numismatics:sprocket', 4)]);
  event.recipes.thermal.press('numismatics:cog', ['#forge:dusts/emerald', 'thermal:press_coin_die']);
  event.recipes.shapeless('minecraft:emerald', ['numismatics:cog']);


  //Hyper XP core
  event.recipes.create.mixing([Fluid.of("create_enchantment_industry:hyper_experience", 1000)], [Item.of("kubejs:super_xp_housing", 1),]);
  event.recipes.create.filling('kubejs:super_xp_housing', ["minecraft:quartz", Fluid.of("create_enchantment_industry:hyper_experience", 1000)]);
});
