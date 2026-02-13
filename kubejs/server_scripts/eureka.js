
/**
 * 
 * 
 * 
 * 
 *
 * 
 * 
 * 
 * 
 * Clockwork / vs_eureka / create addons
 * 
 */
ServerEvents.recipes((event) => {

  // event.remove([
  //   { output: "vs_eureka:engine" },
  //   { output: "vs_eureka:oak_ship_helm" },
  //   { output: "vs_eureka:birch_ship_helm" },
  //   { output: "vs_eureka:spruce_ship_helm" },
  //   { output: "vs_eureka:acacia_ship_helm" },
  //   { output: "vs_eureka:dark_oak_ship_helm" },
  //   { output: "vs_eureka:jungle_ship_helm" },
  //   { output: "vs_eureka:crimson_ship_helm" },
  //   { output: "vs_eureka:warped_ship_helm" },

  // ]);


  // event.shaped(Item.of("vs_eureka:engine", 1), [
  //   "SSS",
  //   "pBp",
  //   "PGP"
  // ],
  //   {
  //     G: "create:brass_block",
  //     // I: "minecraft:iron_ingot",
  //     S: "minecraft:smooth_stone",
  //     p: "#forge:glass_panes",
  //     B: "minecraft:blast_furnace",
  //     P: "createdieselgenerators:engine_piston",
  //   }
  // );


  // //Ship helms
  // let helm_layout = [
  //   'FBF',
  //   'BWB',
  //   'FOF',
  //   'ZSZ',
  // ];

  // function helm_key(woodType) {
  //   return {
  //     B: 'create:brass_ingot',
  //     W: ['kubejs:wanderlite_ingot',
  //       // 'kubejs:wanderlite_jewel'
  //     ],
  //     S: 'kubejs:steering_mechanism',
  //     F: 'minecraft:' + woodType + '_fence',
  //     Z: "create:brass_casing",

  //     O: 'minecraft:' + woodType + '_planks',
  //   }
  // }

  // event.recipes.create.mechanical_crafting('vs_eureka:oak_ship_helm', helm_layout, helm_key("oak"));
  // event.recipes.create.mechanical_crafting('vs_eureka:birch_ship_helm', helm_layout, helm_key("birch"));
  // event.recipes.create.mechanical_crafting('vs_eureka:spruce_ship_helm', helm_layout, helm_key("spruce"));
  // event.recipes.create.mechanical_crafting('vs_eureka:acacia_ship_helm', helm_layout, helm_key("acacia"));
  // event.recipes.create.mechanical_crafting('vs_eureka:dark_oak_ship_helm', helm_layout, helm_key("dark_oak"));
  // event.recipes.create.mechanical_crafting('vs_eureka:jungle_ship_helm', helm_layout, helm_key("jungle"));
  // event.recipes.create.mechanical_crafting('vs_eureka:crimson_ship_helm', helm_layout, helm_key("crimson"));
  // event.recipes.create.mechanical_crafting('vs_eureka:warped_ship_helm', helm_layout, helm_key("warped"));

  // //Steering mechanism
  // let incomplete = 'kubejs:incomplete_steering_mechanism';

  // event.recipes.create.sequenced_assembly([//The output
  //   Item.of('kubejs:steering_mechanism'),
  // ], '#forge:plates/gold', // the input:   create:brass_sheet
  //   [
  //     event.recipes.createDeploying(incomplete, [incomplete, 'create:precision_mechanism']),
  //     event.recipes.createDeploying(incomplete, [incomplete, 'create:electron_tube']),
  //     event.recipes.createDeploying(incomplete, [incomplete, 'create:large_cogwheel']),
  //     event.recipes.createDeploying(incomplete, [incomplete, 'create:cogwheel']),
  //     event.recipes.createPressing(incomplete, incomplete),
  //   ]
  // ).transitionalItem(incomplete).loops(2) // set the transitional item and the number of loops


  // event.shaped(Item.of('vs_eureka:oak_ship_helm', 1), helm_layout, helm_key("oak"));
  // event.shaped(Item.of('vs_eureka:birch_ship_helm', 1), helm_layout, helm_key("birch"));
  // event.shaped(Item.of('vs_eureka:spruce_ship_helm', 1), helm_layout, helm_key("spruce"));
  // event.shaped(Item.of('vs_eureka:acacia_ship_helm', 1), helm_layout, helm_key("acacia"));
  // event.shaped(Item.of('vs_eureka:dark_oak_ship_helm', 1), helm_layout, helm_key("dark_oak"));
  // event.shaped(Item.of('vs_eureka:jungle_ship_helm', 1), helm_layout, helm_key("jungle"));
  // event.shaped(Item.of('vs_eureka:crimson_ship_helm', 1), helm_layout, helm_key("crimson"));
  // event.shaped(Item.of('vs_eureka:warped_ship_helm', 1), helm_layout, helm_key("warped"));


  //   event.remove([
  //     { output: "creategbd:basic_laser_turret" },
  //     { output: "creategbd:advanced_laser_turret" },
  //     { output: "creategbd:beam_reactor_helmet" },
  //   ]);

  // //Really useful but shouldnt make the game boring
  // //Also consider why it is even here if its too hard to obtain
  //   event.recipes.create.mechanical_crafting(
  //     Item.of('creategbd:basic_laser_turret', 1), [
  //     'GGG',
  //     'GCG',
  //     'BZB',
  //     'BOB',
  //   ], {
  //     G: 'thermal:obsidian_glass',//moderate
  //     C: 'creategbd:guardian_beam_capacitor',//HARD
  //     B: 'minecraft:prismarine_bricks',//easy
  //     O: 'create:shaft',//easy
  //     Z: 'minecraft:beacon',//HARD
  //   });

  //   // //Most overpowered item in the game
  //   // //It also has 700 durabilty
  //   // //Should this be unobtainable?
  //   // event.recipes.create.mechanical_crafting(
  //   //   Item.of('creategbd:beam_reactor_helmet', 1), [
  //   //   '  N  ',
  //   //   ' NAN ',
  //   //   'NACAN',
  //   //   'NDXDN',
  //   //   'NIZIN',
  //   // ], {
  //   //   X: 'tjetpacks:cryogenic_crystal',
  //   //   I: 'cataclysm:ancient_metal_ingot',
  //   //   D: 'kubejs:void_ingot',
  //   //   C: 'creategbd:elder_guardian_beam_capacitor',
  //   //   A: 'kubejs:hydronite_shard',
  //   //   Z: 'cataclysm:ignitium_helmet',
  //   //   N: 'kubejs:black_netherite_ingot',
  //   // });

  //   //Make this harder for lag reasons or just remove it entirely
  //   event.recipes.create.mechanical_crafting(
  //     Item.of('creategbd:advanced_laser_turret', 1), [
  //     'GGG',
  //     'ACA',
  //     'BZB',
  //     'BOB',
  //   ], {
  //     G: 'thermal:enderium_glass',
  //     C: 'creategbd:elder_guardian_beam_capacitor',
  //     B: 'minecraft:dark_prismarine',
  //     A: 'kubejs:hydronite_shard',
  //     O: 'create:shaft',
  //     Z: 'minecraft:beacon',
  //   });


});
