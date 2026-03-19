// priority: 0
// Visit the wiki for more info - https://kubejs.com/
Platform.mods.kubejs.name = 'Nexus Beyond'

//Add worldedit items (This replaces the default minecraft axe and compass)
StartupEvents.registry("item", (event) => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  event
    .create("worldedit_wand")
    .displayName("WorldEdit Wand")
    .maxStackSize(1);
  event
    .create("worldedit_nav")
    .displayName("WorldEdit Navigation Tool")
    .maxStackSize(1);


  //Northstar
  event
    .create("compressed_sand_bar")
    .displayName("Compressed Sand Bar")
    .maxStackSize(64);

  event
    .create("heat_tile")
    .displayName("Heat Resistant Sheet")
    .maxStackSize(64);

  event
    .create("sand_tile")
    .displayName("Sand Tile")
    .maxStackSize(64);

  event
    .create("pyrotide_shard")
    .displayName("Pyrotide Shard")
    .fireResistant(true)
    .maxStackSize(64);

  event
    .create("hydronite_shard")
    .displayName("Hydronyde Shard")
    .fireResistant(true)
    .maxStackSize(64);



  //Other
  event
    .create("steel_string")
    .displayName("Steel String")
    .maxStackSize(64);

  event
    .create("aqua_machine")
    .displayName("Aquatic Ventilator")
    .maxStackSize(64);


  // event
  //   .create("strong_fabric")
  //   .displayName("Durable Fabric")
  //   .maxStackSize(64);

  // event
  //   .create("steering_mechanism")
  //   .displayName("Steering Mechanism")
  //   .maxStackSize(64);

  // event
  //   .create('incomplete_steering_mechanism', 'create:sequenced_assembly')
  //   .displayName("Incomplete Steering Mechanism");

  // event
  //   .create('incomplete_combustion_chamber', 'create:sequenced_assembly')
  //   .displayName("Incomplete Combustion Chamber");

  event
    .create("brass_piston")
    .displayName("Brass Piston")
    .maxStackSize(64);
  event
    .create("brass_gear")
    .displayName("Brass Gear")
    .maxStackSize(64);

  //Clockwork
  event
    .create("wanderlite_dust")
    .displayName("Wanderlite Dust")
    .maxStackSize(64);
  event
    .create("wanderlite_ingot")
    .displayName("Wanderlite Ingot")
    .maxStackSize(64);
  /**
   * 
   * 
   * Cataclysm items
   */
  //Witherite (Harbinger)
  event
    .create("witherite_powder")
    .displayName("Witherite Dust")
    .fireResistant(true)
    .maxStackSize(64);
  event
    .create("black_netherite_ingot")
    .displayName("Black Netherite Ingot")
    .fireResistant(true)
    .maxStackSize(64);

  //Abyssal (Leviathan)
  event
    .create("abyssal_dust")
    .displayName("Abyssal Dust")
    .fireResistant(true)
    .maxStackSize(64);
  event
    .create("abyssal_ingot")
    .displayName("Abyssal Ingot")
    .fireResistant(true)
    .maxStackSize(64);
  event
    .create("abyssal_pearl")
    .displayName("Abyssal Pearl")
    .fireResistant(true)
    .maxStackSize(64);

  //Cursium (Necromancer)
  event
    .create("cursium_dust")
    .displayName("Cursium Dust")
    .fireResistant(true)
    .maxStackSize(64);
  event
    .create("cursium_pearl")
    .displayName("Cursium Pearl")
    .fireResistant(true)
    .maxStackSize(64);

  //Monstrous (Nether golem)
  event
    .create("monstrous_dust")
    .displayName("Monstrous Dust")
    .fireResistant(true)
    .maxStackSize(64);
  event
    .create("monstrous_pearl")
    .displayName("Monstrous Pearl")
    .fireResistant(true)
    .maxStackSize(64);
  event
    .create("monstrous_ingot")
    .displayName("Monstrous Ingot")
    .fireResistant(true)
    .maxStackSize(64);

  //Ancient Remnant
  event
    .create("ancient_dust")
    .displayName("Ancient Dust")
    .fireResistant(true)
    .maxStackSize(64);

  event
    .create("ancient_pearl")
    .displayName("Ancient Pearl")
    .fireResistant(true)
    .maxStackSize(64);


  //End Guardian
  event
    .create("void_core_dust")
    .displayName("Void Core Dust")
    .fireResistant(true)
    .maxStackSize(64);
  event
    .create("void_ingot")
    .displayName("Void Ingot")
    .fireResistant(true)
    .maxStackSize(64);
  event
    .create("void_pearl")
    .displayName("Void Pearl")
    .fireResistant(true)
    .maxStackSize(64);

  //Ignus
  event
    .create("ignitium_powder")
    .displayName("Ignitium Dust")
    .fireResistant(true)
    .maxStackSize(64);
  event
    .create("ignitium_ingot")
    .displayName("Crystalized Ignitium Ingot")
    .fireResistant(true)
    .maxStackSize(64);
  event
    .create("ignitium_pearl")
    .displayName("Ignitium Pearl")
    .fireResistant(true)
    .maxStackSize(64);

  //Other Bosses
  event
    .create("coral_pearl")
    .displayName("Coral Pearl")
    .fireResistant(true)
    .maxStackSize(64);
  event
    .create("fire_pearl")
    .displayName("Fire Pearl")
    .fireResistant(true)
    .maxStackSize(64);

  /**
   * Create items
   */
  event
    .create("precision_component")
    .displayName("Precision Component")
    .maxStackSize(64);
  event
    .create("precision_machine")
    .displayName("Precision Machine")
    .maxStackSize(64);
  event
    .create("warp_core")
    .displayName("Warp Core")
    .maxStackSize(16);
  event
    .create("super_xp_housing")
    .displayName("Hyper XP Core")
    .maxStackSize(16);
});

//Add custom blocks
StartupEvents.registry("block", (event) => {

  // event
  //   .create("compressed_sand") // Create a new block
  //   .soundType("sand")
  //   .displayName("Compressed Sand") // Set a custom name
  //   .textureAll("kubejs:block/compressed_sand")
  //   .hardness(0.9) // Set hardness (affects mining time)
  //   .tagBlock("minecraft:mineable/pickaxe") // mined faster with a shovel
  //   .tagBlock("minecraft:needs_iron_tool") // the tool tier must be at least iron
  //   .fullBlock(true)
  //   .suffocating(true);

  // event
  //   .create("compressed_red_sand") // Create a new block
  //   .soundType("sand")
  //   .displayName("Compressed Red Sand") // Set a custom name
  //   .textureAll("kubejs:block/compressed_red_sand")
  //   .hardness(0.9) // Set hardness (affects mining time)
  //   .tagBlock("minecraft:mineable/pickaxe") // mined faster with a shovel
  //   .tagBlock("minecraft:needs_iron_tool") // the tool tier must be at least iron
  //   .fullBlock(true)
  //   .suffocating(true);

  event
    .create("compressed_cobblestone") // Create a new block
    .soundType("stone")
    .displayName("Compressed Cobblestone") // Set a custom name
    .textureAll("kubejs:block/compressed_cobblestone")
    .hardness(0.9) // Set hardness (affects mining time)
    .tagBlock("minecraft:mineable/pickaxe") // mined faster with a shovel
    .tagBlock("minecraft:needs_stone_tool")
    .fullBlock(true)
    .suffocating(true);

  // event
  //   .create("compressed_holystone") // Create a new block
  //   .soundType("stone")
  //   .displayName("Compressed Holystone") // Set a custom name
  //   .textureAll("kubejs:block/compressed_holystone")
  //   .hardness(0.9) // Set hardness (affects mining time)
  //   .tagBlock("minecraft:mineable/pickaxe") // mined faster with a shovel
  //   .tagBlock("minecraft:needs_stone_tool")
  //   .fullBlock(true)
  //   .suffocating(true);

  event
    .create("phantom_dirt") // Create a new block
    .soundType("grass")
    .displayName("Phantom Dirt") // Set a custom name
    .textureAll("kubejs:block/dirt")
    .hardness(0.9) // Set hardness (affects mining time)
    .tagBlock("minecraft:mineable/shovel") // mined faster with a shovel
    .tagBlock("minecraft:needs_iron_tool") // the tool tier must be at least iron
    .fullBlock(true)
    .suffocating(true)
    .noCollision();

  event
    .create("phantom_cobblestone") // Create a new block
    .soundType("stone")
    .displayName("Phantom Cobblestone") // Set a custom name
    .textureAll("kubejs:block/cobblestone")
    .hardness(0.9) // Set hardness (affects mining time)
    .tagBlock("minecraft:mineable/pickaxe") // mined faster with a shovel
    .tagBlock("minecraft:needs_iron_tool") // the tool tier must be at least iron
    .fullBlock(true)
    .suffocating(true)
    .noCollision();

  event
    .create("phantom_stone") // Create a new block
    .soundType("stone")
    .displayName("Phantom Stone") // Set a custom name
    .textureAll("kubejs:block/stone")
    .hardness(0.9) // Set hardness (affects mining time)
    .tagBlock("minecraft:mineable/pickaxe") // mined faster with a shovel
    .tagBlock("minecraft:needs_iron_tool") // the tool tier must be at least iron
    .fullBlock(true)
    .suffocating(true)
    .noCollision();

  event
    .create("phantom_netherrack") // Create a new block
    .soundType("stone")
    .displayName("Phantom Netherrack") // Set a custom name
    .textureAll("kubejs:block/netherrack")
    .hardness(0.9) // Set hardness (affects mining time)
    .tagBlock("minecraft:mineable/pickaxe") // mined faster with a shovel
    .tagBlock("minecraft:needs_iron_tool") // the tool tier must be at least iron
    .fullBlock(true)
    .suffocating(true)
    .noCollision();

  event
    .create("phantom_end_stone") // Create a new block
    .soundType("stone")
    .displayName("Phantom End Stone") // Set a custom name
    .textureAll("kubejs:block/end_stone")
    .hardness(0.9) // Set hardness (affects mining time)
    .tagBlock("minecraft:mineable/pickaxe") // mined faster with a shovel
    .tagBlock("minecraft:needs_iron_tool") // the tool tier must be at least iron
    .fullBlock(true)
    .suffocating(true)
    .noCollision();

  event
    .create("phantom_stone_bricks") // Create a new block
    .soundType("stone")
    .displayName("Phantom Stone Bricks") // Set a custom name
    .textureAll("kubejs:block/stone_bricks")
    .hardness(0.9) // Set hardness (affects mining time)
    .tagBlock("minecraft:mineable/pickaxe") // mined faster with a shovel
    .tagBlock("minecraft:needs_iron_tool") // the tool tier must be at least iron
    .fullBlock(true)
    .suffocating(true)
    .noCollision();

  event
    .create("phantom_sandstone") // Create a new block
    .soundType("stone")
    .displayName("Phantom Sandstone") // Set a custom name
    .textureAll("kubejs:block/sandstone_top")
    .hardness(0.9) // Set hardness (affects mining time)
    .tagBlock("minecraft:mineable/pickaxe") // mined faster with a shovel
    .tagBlock("minecraft:needs_iron_tool") // the tool tier must be at least iron
    .fullBlock(true)
    .suffocating(true)
    .noCollision();

  event
    .create("phantom_red_sandstone") // Create a new block
    .soundType("stone")
    .displayName("Phantom Red Sandstone") // Set a custom name
    .textureAll("kubejs:block/red_sandstone_top")
    .hardness(0.9) // Set hardness (affects mining time)
    .tagBlock("minecraft:mineable/pickaxe") // mined faster with a shovel
    .tagBlock("minecraft:needs_iron_tool") // the tool tier must be at least iron
    .fullBlock(true)
    .suffocating(true)
    .noCollision();

  event
    .create("phantom_snow") // Create a new block
    .soundType("stone")
    .displayName("Phantom Snow") // Set a custom name
    .textureAll("kubejs:block/snow")
    .hardness(0.9) // Set hardness (affects mining time)
    .tagBlock("minecraft:mineable/shovel") // mined faster with a shovel
    .tagBlock("minecraft:needs_iron_tool") // the tool tier must be at least iron
    .fullBlock(true)
    .suffocating(true)
    .noCollision();
});
