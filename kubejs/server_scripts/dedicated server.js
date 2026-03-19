// priority: 0

//Check if this is a dedicated server
global.dedicatedServer = false;
try {
  let attempt = JsonIO.read("kubejs_server_marker.json");
  if (attempt != null) {
    config = attempt;
    global.dedicatedServer = true;
    console.log("Successfully read server marker kubejs_server_marker.json");
  }
} catch (e) {
  console.warn("kubejs_server_marker.json not found");
}

ServerEvents.recipes((event) => {
  console.log("IS DEDICATED SERVER: " + global.dedicatedServer);
  // if (global.dedicatedServer == false) {
  //   return;
  // }

  event.remove([
    { output: "create_power_loader:empty_andesite_chunk_loader" },
    { output: "create_power_loader:empty_brass_chunk_loader" },
    { output: "createendertransmission:item_transmitter" },
    { output: "createendertransmission:fluid_transmitter" },
    { output: "redstonepen:pen" },
    { output: "redstonepen:quill" },
    // { output: "redstonepen:relay" },
  ]);

  event.recipes.create.mechanical_crafting('create_power_loader:empty_andesite_chunk_loader', [
    'GGGGG',
    'G   G',
    'GVXVG',
    'ALSLA',
    'AASAA'
  ], {
    G: '#forge:glass',
    S: 'create:shaft',
    A: 'create:andesite_casing',
    X: 'kubejs:warp_core',
    // P: 'minecraft:ender_pearl',
    L: 'minecraft:lodestone',
    V: 'kubejs:precision_component',
  });

  //Create ender transmission
  event.recipes.create.mechanical_crafting(
    Item.of('createendertransmission:item_transmitter', 1), [
    ' OCO ',
    'OPXPO',
    'OPAPO',
    'OPXPO',
    ' OCO ',
  ], {
    O: 'create:sturdy_sheet',
    C: 'create:chute',
    P: 'minecraft:ender_pearl',
    X: 'kubejs:precision_component',
    A: 'kubejs:warp_core',
  });

  event.recipes.create.mechanical_crafting(
    Item.of('createendertransmission:fluid_transmitter', 1), [
    ' OCO ',
    'OPXPO',
    'OPAPO',
    'OPXPO',
    ' OCO ',
  ], {
    O: 'create:sturdy_sheet',
    C: 'create:mechanical_pump',
    P: 'minecraft:ender_pearl',
    X: 'kubejs:precision_component',
    A: 'kubejs:warp_core',
  });

});
