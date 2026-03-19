
/**
 * 
 * 
 * 
 * Create addons
 */
ServerEvents.recipes((event) => {
  event.remove([
    { output: "create_enchantment_industry:printer" },
    { output: "vs_clockwork:gas_thruster" }
  ]);

  

  //Clockwork
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



  //Locometal
  event.recipes.create.deploying("railways:white_slashed_locometal", ["#forge:stripped_logs", "#forge:plates/iron"]);
  event.recipes.create.deploying("railways:slashed_locometal", ["#forge:stripped_logs", "createdeco:industrial_iron_sheet"]);
  event.shaped(Item.of('railways:slashed_locometal', 4), ['ii', 'ii',], { i: 'createdeco:industrial_iron_sheet_metal', });
  event.shaped(Item.of('railways:white_slashed_locometal', 4), ['ii', 'ii',], { i: 'createdeco:iron_sheet_metal', });

  event.shaped(Item.of('railways:locometal_boiler', 3), [
    ' i ',
    'i i',
    ' i '
  ], {
    i: 'railways:slashed_locometal',
  });
  event.shaped(Item.of('railways:brass_wrapped_locometal_boiler', 3), [
    ' i ',
    'iwi',
    ' i '
  ], {
    i: 'railways:slashed_locometal',
    w: 'createaddition:brass_rod'
  });
  event.shaped(Item.of('railways:copper_wrapped_locometal_boiler', 3), [
    ' i ',
    'iwi',
    ' i '
  ], {
    i: 'railways:slashed_locometal',
    w: 'createaddition:copper_wire'
  });
  event.shaped(Item.of('railways:iron_wrapped_locometal_boiler', 3), [
    ' i ',
    'iwi',
    ' i '
  ], {
    i: 'railways:slashed_locometal',
    w: 'createaddition:iron_wire'
  });



  event.shaped(Item.of('railways:white_locometal_boiler', 3), [
    ' i ',
    'i i',
    ' i '
  ], {
    i: 'railways:white_slashed_locometal',
  });
  event.shaped(Item.of('railways:white_brass_wrapped_locometal_boiler', 3), [
    ' i ',
    'iwi',
    ' i '
  ], {
    i: 'railways:white_slashed_locometal',
    w: 'createaddition:brass_rod'
  });
  event.shaped(Item.of('railways:white_copper_wrapped_locometal_boiler', 3), [
    ' i ',
    'iwi',
    ' i '
  ], {
    i: 'railways:white_slashed_locometal',
    w: 'createaddition:copper_wire'
  });
  event.shaped(Item.of('railways:white_iron_wrapped_locometal_boiler', 3), [
    ' i ',
    'iwi',
    ' i '
  ], {
    i: 'railways:white_slashed_locometal',
    w: 'createaddition:iron_wire'
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

  //Recycling
  event.recipes.create.compacting([Item.of('minecraft:iron_ingot', 1)],
    [
      Item.of("minecraft:iron_bars", 3)
    ]).heated();

  event.recipes.create.compacting([Item.of('minecraft:iron_ingot', 1)],
    [
      Item.of("quark:grate", 1)
    ]).heated();

  event.recipes.create.compacting([Item.of('minecraft:iron_ingot', 3)],
    [
      Item.of("minecraft:iron_trapdoor", 1)
    ]).heated();

  //Hyper XP core
  event.recipes.create.mixing([Fluid.of("create_enchantment_industry:hyper_experience", 1000)], [Item.of("kubejs:super_xp_housing", 1),]);
  event.recipes.create.filling('kubejs:super_xp_housing', ["minecraft:quartz", Fluid.of("create_enchantment_industry:hyper_experience", 1000)]);
});
