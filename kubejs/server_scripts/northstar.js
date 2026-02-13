ServerEvents.recipes((event) => {
  //Heat tiles make space travel easier
  event.shaped(Item.of("northstar:jet_engine", 8), [
    "ICI",
    "IPI",
    "I I"
  ], {
    "I": "kubejs:heat_tile",
    "C": "northstar:rocket_combustion_chamber",
    "P": "create:propeller",
  });

  //Should we add kubejs:pyrotide_shard? It would require getting glow shroom to get to other planets
  // event.remove([
  //   { output: "northstar:interplanetary_navigator" },
  // ]);
  // event.recipes.create.mechanical_crafting('northstar:interplanetary_navigator', [
  //   "iXi",
  //   "CXC",
  //   "iXi",
  //   "CPC",
  //   "iAi",
  // ],
  //   {
  //     "i": "northstar:titanium_ingot",
  //     "X": "northstar:polished_lunar_sapphire",
  //     "A": "kubejs:pyrotide_shard",
  //     "C": "northstar:circuit",
  //     "P": "northstar:targeting_computer",
  //   }
  // );

  event.recipes.create.compacting([Item.of('northstar:tungsten_ingot', 8)],
    [
      Item.of("kubejs:heat_tile", 3),
      Item.of("kubejs:black_netherite_ingot", 1),
    ]).superheated();


  // let incomplete = 'northstar:incomplete_titanium_ingot';
  // event.recipes.create.sequenced_assembly([//The output
  //     Item.of('northstar:titanium_ingot', 1),
  // ], 'kubejs:heat_tile', // the input:   create:brass_sheet
  //     [
  //         event.recipes.createFilling(incomplete, [incomplete, Fluid.of('northstar:titanium_tetrachloride', 250)]),
  //         event.recipes.createPressing(incomplete, [incomplete]),
  //         event.recipes.createPressing(incomplete, [incomplete]),
  //         event.recipes.createPressing(incomplete, [incomplete]),
  //         event.recipes.createFilling(incomplete, [incomplete, Fluid.of('minecraft:water', 500)]),
  //     ]
  // ).transitionalItem(incomplete).loops(1) // set the transitional item and the number of loops

  /**
   * Create factory recipes
   */
  //Mars soil and gravel
  event.recipes.create.mixing('northstar:mars_soil', ['minecraft:soul_soil', 'thermal:iron_dust']).heated()
});
