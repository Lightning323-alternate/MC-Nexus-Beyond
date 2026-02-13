
ServerEvents.recipes((event) => {
  event.remove([
    { output: "createpropulsion:thruster" },
    { output: "createpropulsion:physics_assembler" },
    { output: "createpropulsion:assembly_gauge" },
  ]);


  //TODO: Should VS or propulsion wing be removed?
  //Would it cause confusion to have both?
  event.shapeless(Item.of('createpropulsion:wing', 1),
    ['vs_clockwork:wing']
  );

  event.shaped(Item.of('createpropulsion:physics_assembler', 1), [
    ' W ',
    'GAG',
    'III',
  ], {
    W: 'vs_clockwork:wanderlite_matrix',
    A: 'create:precision_mechanism',
    I: 'create:sturdy_sheet',
    G: '#forge:plates/gold',
  });

  event.shaped(Item.of('createpropulsion:assembly_gauge', 1), [
    ' W ',
    ' G ',
    ' I ',
  ], {
    W: 'vs_clockwork:wanderlite_matrix',
    // A: 'minecraft:amethyst_shard',
    I: '#forge:plates/iron',
    G: '#forge:plates/gold',
  });

  event.shaped(Item.of('createpropulsion:thruster', 1), [ //Did requrie a precision mechanism before I changed the recipe
    'ItI',
    'ICI',
    ' p ',
  ], {
    I: '#forge:plates/iron',
    C: 'tjetpacks:combustion_chamber',
    t: 'create:fluid_pipe',
    p: 'create:chute',//create:propeller',
  });
});
