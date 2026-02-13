// priority: 9

//https://wiki.latvian.dev/books/kubejs-legacy/page/kubejs-thermal

ServerEvents.recipes((event) => {
  event.remove([
    { output: "thermal:flux_drill" },
    { output: "thermal:flux_saw" },
    { output: "thermal:machine_pulverizer" },
    { output: "thermal:area_radius_augment" },
    { output: "thermal:drill_head" },
    { output: "thermal:flux_capacitor" },
    { output: "thermal:hazmat_fabric" },
    // { output: "thermal:diving_fabric" },
    { output: "thermal:diving_helmet" },
    { output: "thermal:hazmat_helmet" },
    { output: "thermal:hazmat_chestplate" },
    { output: "thermal:hazmat_leggings" },
    { output: "thermal:hazmat_boots" },
  ]);

  /**
   * New recipes
   */
  event.recipes.create.deploying('kubejs:steel_string', ['minecraft:string', 'createbigcannons:cast_iron_nugget']);

  //A conduit is made with a heart of the sea surrounded by nautilus shells
  //If you want to make it even harder, add kubejs:pyrotide_shard
  //REasons why this should be hard
  //1- create copper backtank requires1ir-15m air but cannot have diving chestplate
  event.shaped(Item.of('kubejs:aqua_machine', 1), [
    ' O ',
    'NMN',
    ' P ',
  ], {
    O: 'northstar:oxygen_separator',
    M: "minecraft:heart_of_the_sea",
    N: "minecraft:nautilus_shell",
    P: "kubejs:pyrotide_shard",
  });

  //Hazmat suit grants water breathing as well, however you could still die from being underwater too long
  // event.recipes.create.deploying(Item.of('kubejs:light_aqua_machine', 2), ['kubejs:aqua_machine', 'northstar:oxygen_separator']);
  // event.shaped(Item.of('kubejs:light_aqua_machine', 1), [
  //   'MRM',
  // ], {
  //   // A: 'kubejs:light_aqua_machine',
  //   M: "minecraft:prismarine_crystals",
  //   // N: "minecraft:nautilus_shell",
  //   R: 'northstar:oxygen_separator',
  // });

  //Hazmat suit grants fire and lava protection but has less durability
  event.shaped(Item.of('thermal:hazmat_fabric', 1), [
    ' S ',
    'SRS',
    ' S '
  ], {
    R: 'thermal:cured_rubber',
    S: "kubejs:steel_string",
    // M: "minecraft:magma_cream",
  });

  //Make wanderlite matrix from wanderlite cube
  event.recipes.thermal.press('vs_clockwork:wanderlite_matrix', 'vs_clockwork:wanderlite_cube')
  // // Press an iron dust into an iron nugget using the coin die. To use an item as a die they must have the thermal:crafting/dies tag!
  // event.recipes.thermal.press('minecraft:iron_nugget', ['#forge:dusts/iron', 'thermal:press_coin_die'])

  // event.shaped(Item.of('thermal:diving_fabric', 2), [
  //   'S S',
  //   'SRS',
  //   'S S',
  // ], {
  //   R: 'minecraft:prismarine_crystals',
  //   S: "minecraft:string",
  // });

  /**
   * To prevent the hazmat suit from eclipsing the phoenix armor, the hazmat suit requires tungsten
   * The hazmat suit has very low durability, so that is going to be a factor that would help with the balance
   * The hazmat suit also protects against harmful potions, increases air supply and reduces fall damage
   * If because of the low durability, I decide to make this easier to obtain, do so by reducing/removing magma cream
   */
  var drillSheetMaterial = [
    "create:sturdy_sheet",
    //"northstar:tungsten_sheet", "kubejs:heat_tile"
    // , "kubejs:sand_tile"
  ];
  var hazmatIngotMaterial = ["northstar:tungsten_ingot", "kubejs:heat_tile"
    // , "kubejs:sand_tile"
  ];

  event.shaped(Item.of('thermal:hazmat_helmet', 1), [
    'FIF',
    'IGI',
    'FAF'
  ], {
    F: 'thermal:hazmat_fabric',
    I: hazmatIngotMaterial,
    G: "#forge:glass",
    //A: "kubejs:light_aqua_machine"
    A: "northstar:oxygen_separator"
  });

  event.shaped(Item.of('thermal:hazmat_chestplate', 1), [
    'F F',
    'IFI',
    'FFF',
  ], {
    F: 'thermal:hazmat_fabric',
    I: hazmatIngotMaterial,
  });

  event.shaped(Item.of('thermal:hazmat_leggings', 1), [
    'FFF',
    'I I',
    'F F',
  ], {
    F: 'thermal:hazmat_fabric',
    I: hazmatIngotMaterial,
  });

  event.shaped(Item.of('thermal:hazmat_boots', 1), [
    'F F',
    'LIL',
  ], {
    F: 'thermal:hazmat_fabric',
    I: hazmatIngotMaterial,
    // R: "thermal:cured_rubber",
    L: "minecraft:leather",
  });

  /**
   * The diving helmet doesnt run out of durability nor does the player die as long as they are wearing it
   * Lets prevent this from eclipsing create helmet and backtank
   * The aether iron bubble provides infinite water breathing, and doesnt run out of durability, it can be obtained in a gold dungeon
   */
  event.shaped(Item.of('thermal:diving_helmet', 1), [
    ' G ',
    'GIG',
    'TBT'
  ], {
    G: 'minecraft:gold_ingot',
    I: "#forge:glass",
    B: "aether:iron_bubble",
    T: "minecraft:iron_ingot",
  });

  //The diving helmet does a damage hit but you cant die because it regenerates, so I think it might also be fare to add an alternative tungsten recipe
  event.shaped(Item.of('thermal:diving_helmet', 1), [
    ' G ',
    'GIG',
    'GBG'
  ], {
    G: 'minecraft:gold_ingot',
    B: "kubejs:aqua_machine",
    I: "#forge:glass",
  });

  //Allows increased radius (1st enhancement -> 3x3, 2nd -> 5x5, 3rd 7x7)
  event.shaped(Item.of('thermal:area_radius_augment', 1), [
    'GrG',
    't t',
    'GrG',
  ], {
    t: 'thermal:tin_ingot',
    r: 'thermal:redstone_servo',
    G: 'thermal:iron_gear',
    // P: 'kubejs:precision_component',
  });


  //The pulverizer allows a chance to get additional stuff (sometimes ore doubling), if using a catalyst
  //Pulverizer affectively increases diamond yield to about 1.5x (50% chance of additional diamond)
  event.shaped(Item.of('thermal:machine_pulverizer', 1), [
    ' b ',
    'sfs',
    'iri',
  ], {
    b: 'minecraft:blast_furnace',
    r: 'thermal:rf_coil',
    f: 'thermal:machine_frame',
    s: flintBlockID,
    // i: 'thermal:copper_gear',
    //Changed copper to signalum
    i: 'thermal:signalum_gear',
  });

  //This is only used for the drill, so it makes sense to add diamond
  event.recipes.create.mechanical_crafting('thermal:drill_head', [
    ' D ',
    'DDD',
    'iii',
    'ici'
  ], {
    c: 'minecraft:copper_ingot',
    i: 'minecraft:iron_ingot',
    D: 'northstar:polished_diamond',
  });


  // This is a tool with infinite durability and can be upgraded with radial enhancment to mine 3x3, 5x5 or 7x7 blocks
  // The only balancing factor is that the drill requires a lot of power to run, but again can be upgraded
  event.recipes.create.mechanical_crafting('thermal:flux_drill', [
    ' d ',
    'XBX',
    'trt',
    'RPR',
    'XRX',
  ], {
    d: 'thermal:drill_head',
    r: 'thermal:rf_coil',
    B: 'kubejs:black_netherite_ingot',
    X:  drillSheetMaterial,
    t: 'thermal:invar_gear',
    P: 'kubejs:precision_machine',
    R: 'thermal:cured_rubber',
  });

  // E: 'thermal:enderium_plate',
  // g: 'create:sturdy_sheet',
  // G: 'thermal:netherite_plate',

  event.recipes.create.mechanical_crafting('thermal:flux_saw', [
    ' d ',
    'XXX',
    'trt',
    'RPR',
    'XRX',
  ], {
    d: 'thermal:saw_blade',
    r: 'thermal:rf_coil',
    t: 'thermal:invar_gear',
    X:  drillSheetMaterial,
    P: 'create:precision_mechanism',
    R: 'thermal:cured_rubber',
  });

  //Thermal battery has 4 lead ingots, 1 electrum gear and 4 cured rubber
  //The original capacitor had 3 lead ingots, 3 redstone, 1 rf coil
  //Can recharge all items in inventory
  event.recipes.create.mechanical_crafting('thermal:flux_capacitor', [
    'aEa',
    'RrR',
    'lal',
    ' l '
  ], {
    r: 'thermal:rf_coil',
    l: 'thermal:lead_ingot',
    a: 'minecraft:redstone',
    //added
    R: 'thermal:cured_rubber',
    E: 'thermal:electrum_ingot',
  });


  /**
   * 
   * 
   * Create factory recipes
   * It should be different than the traditional way to make elements so we arent making multipurpose factories
   * nickel factory (Difficulty==iron) (If you live in the overworld, its harder to make, if you live on mars, its the same)
   * Silver factory (Difficulty==gold) (If you live in the overworld, its harder to make, if you live on mars, its the same)
   */
  // event.recipes.create.crushing([Item.of("thermal:nickel_nugget").withChance(0.20)], "minecraft:copper_ingot").processingTime(500);
  // event.recipes.create.crushing([Item.of("thermal:nickel_nugget").withChance(0.05)], "minecraft:raw_copper").processingTime(500);

  event.recipes.create.splashing([Item.of("thermal:silver_nugget", 3).withChance(0.18)], 'northstar:mars_sand'); //Sand -> 12% 3x gold nugget
  event.recipes.create.splashing([Item.of("thermal:nickel_nugget", 1).withChance(0.5), Item.of("thermal:raw_nickel").withChance(0.05)], 'northstar:mars_soil');//Gravel -> 12% iron nugget
  event.recipes.create.splashing([Item.of("thermal:silver_nugget").withChance(0.02)], 'minecraft:soul_soil');//Gold has this too

  event.recipes.create.crushing([
    // Item.of("minecraft:flint").withChance(0.25),
    // Item.of("minecraft:gold_nugget").withChance(0.1),
    // Item.of("create:copper_nugget").withChance(0.1),
    // Item.of("create:zinc_nugget").withChance(0.1),
    // Item.of("minecraft:iron_nugget").withChance(0.1),
    // Item.of("createaddition:electrum_nugget").withChance(0.1),
    Item.of("thermal:silver_nugget").withChance(0.1),
    Item.of("thermal:nickel_nugget").withChance(0.1)
  ], 'minecraft:tuff');

  /**
   * 
   * 
   * 
   * 
   * 
   * 
   * Thermal Jetpacks
   */
  event.remove([
    //A jetpack requires a elytra
    //Higher tier jetpacks are unlocked by bossfight drops
    //A jetpack should not replace vehicles or the elytra
    //The top tier jetpack provides 12 armor points and so should be as hard as ignitium chestplate

    { output: "tjetpacks:jetpack_te1" },
    { output: "tjetpacks:jetpack_te2" },
    { output: "tjetpacks:jetpack_te3" },
    { output: "tjetpacks:jetpack_te4" },
    // { output: "tjetpacks:jetpack_te5_enderium" },
    { output: "tjetpacks:cryogenic_crystal" },
    { output: "tjetpacks:thruster_te1" },
    { output: "tjetpacks:thruster_te2" },
    { output: "tjetpacks:thruster_te3" },
    { output: "tjetpacks:thruster_te4" },
    { output: "tjetpacks:flux_chestplate" },
    { output: "tjetpacks:combustion_chamber" },
    { output: "tjetpacks:combustion_chamber_hard" },
  ]);

  event.shaped(Item.of('tjetpacks:flux_chestplate', 1), [
    'i i',
    'fcf',
    'iii',
  ], {
    // c: 'tjetpacks:ignitium_elytra_chestplate',
    // c: 'tjetpacks:ignitium_chestplate',
    c: 'kubejs:ignitium_pearl',
    i: 'kubejs:ignitium_ingot',
    f: 'thermal:rf_coil',
  });

  /**
   * Heat tile
   * kubejs.com/wiki/addons/thermal
   */
  //Default recipe
  event.shapeless(Item.of("kubejs:heat_tile", 3), [
    Item.of('#forge:plates/nickel', 2),
    "#forge:plates/copper",
    "kubejs:monstrous_ingot",
    "minecraft:fire_charge",
  ]);

  event.recipes.thermal.smelter(Item.of('kubejs:heat_tile', 3), [
    Item.of('#forge:plates/nickel', 2),
    Item.of('#forge:plates/copper'),
    Item.of('kubejs:monstrous_ingot')
  ]);

  //Combustion Chambers
  event.shaped(Item.of("tjetpacks:combustion_chamber", 2), [
    "P P",
    "PSP",
    " p "
  ], {
    "S": "thermal:redstone_servo",
    "P": "#forge:plates/nickel",
    "p": "create:propeller",
  });

  event.shaped(Item.of("tjetpacks:combustion_chamber_hard", 1), [
    "ITI",
    "IRI",
    " P "
  ], {
    "I": "northstar:tungsten_sheet",
    "T": "tjetpacks:combustion_chamber",
    "R": "thermal:redstone_servo",
    "P": "northstar:hardened_precision_mechanism",
  });

  event.shaped(Item.of('tjetpacks:cryogenic_crystal', 1), [
    'bbb',
    'brb',
    'bbb',
  ], {
    b: 'thermal:blitz_powder',
    r: 'deeperdarker:soul_crystal'
  });

  event.recipes.create.mechanical_crafting('tjetpacks:thruster_te1', [
    'PrP',
    'pCp',
    'pLp',
    'pEp'
  ], {
    r: 'thermal:rf_coil',
    p: '#forge:plates/lead',
    P: '#forge:ingots/lead',
    C: 'tjetpacks:combustion_chamber',
    L: 'thermal:lightning_charge',
    E: 'create:propeller',
  });

  event.recipes.create.mechanical_crafting('tjetpacks:thruster_te2', [
    'PrP',
    'UCU',
    'pLp',
    'UEU'
  ], {
    r: 'thermal:rf_coil',
    p: '#forge:plates/invar',
    P: '#forge:ingots/invar',
    C: 'tjetpacks:combustion_chamber_hard',
    L: 'thermal:lightning_charge',
    U: 'thermal:upgrade_augment_1',
    E: 'create:propeller',
  });

  event.recipes.create.mechanical_crafting('tjetpacks:thruster_te3', [
    'PrP',
    'UCU',
    'pLp',
    'UEU'
  ], {
    r: 'thermal:rf_coil',
    p: '#forge:plates/electrum',
    P: '#forge:ingots/electrum',
    C: 'tjetpacks:combustion_chamber_hard',
    L: 'thermal:lightning_charge',
    U: 'thermal:upgrade_augment_2',
    E: 'create:propeller',
  });

  event.recipes.create.mechanical_crafting('tjetpacks:thruster_te4', [
    'PrP',
    'UCU',
    'pLp',
    'UEU'
  ], {
    r: 'thermal:rf_coil',
    p: '#forge:plates/enderium',
    P: '#forge:ingots/enderium',
    C: 'tjetpacks:combustion_chamber_hard',
    L: 'thermal:lightning_charge',
    U: 'thermal:upgrade_augment_3',
    E: 'create:propeller',
  });


  event.recipes.create.mechanical_crafting('tjetpacks:jetpack_te1', [
    'prp',
    'sEs',
    'prp',
    'T T'
  ], {
    r: 'thermal:rf_coil',
    p: '#forge:plates/lead',
    T: 'tjetpacks:thruster_te1',
    s: 'tjetpacks:leather_strap',
    E: 'minecraft:elytra',
  });

  event.recipes.create.mechanical_crafting('tjetpacks:jetpack_te2', [
    'prp',
    'sEs',
    'prp',
    'T T'
  ], {
    r: 'thermal:rf_coil',
    p: '#forge:plates/invar',
    T: 'tjetpacks:thruster_te1',
    s: 'tjetpacks:leather_strap',
    E: 'deeperdarker:soul_elytra',
  });

  event.recipes.create.mechanical_crafting('tjetpacks:jetpack_te2', [
    'prp',
    'sEs',
    'prp',
    'T T'
  ], {
    r: 'thermal:rf_coil',
    p: '#forge:plates/invar',
    T: 'tjetpacks:thruster_te2',
    s: 'tjetpacks:leather_strap',
    E: 'tjetpacks:jetpack_te1',
  });

  event.recipes.create.mechanical_crafting('tjetpacks:jetpack_te3', [
    'prp',
    'sEs',
    'pCp',
    'prp',
    'T T'
  ], {
    r: 'thermal:rf_coil',
    p: '#forge:plates/electrum',
    T: 'tjetpacks:thruster_te3',
    s: 'tjetpacks:leather_strap',
    E: 'tjetpacks:jetpack_te2',
    C: 'northstar:advanced_circuit',
  });

  event.recipes.create.mechanical_crafting('tjetpacks:jetpack_te4', [
    'prp',
    'sEs',
    'pCp',
    'prp',
    'T T'
  ], {
    r: 'thermal:rf_coil',
    p: '#forge:plates/enderium',
    T: 'tjetpacks:thruster_te4',
    s: 'tjetpacks:leather_strap',
    E: 'tjetpacks:jetpack_te3',
    C: 'tjetpacks:cryogenic_crystal',
  });

});