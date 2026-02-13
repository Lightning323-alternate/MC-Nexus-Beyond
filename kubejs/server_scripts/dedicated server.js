// priority: 0

ServerEvents.recipes((event) => {
  //Check if this is a dedicated server
  global.dedicatedServer = false;
  try {
    let attempt = JsonIO.read("kubejs_server_marker.json");
    if (attempt != null) {
      config = attempt;
      global.dedicatedServer = true;
    }
  } catch (e) {
  }

  console.warn("KUBEJS DEDICATED SERVER = " + global.dedicatedServer);
  if (global.dedicatedServer == false) {
    return;
  }

  event.remove([
    // { output: "create_power_loader:empty_andesite_chunk_loader" },
    { output: "create_power_loader:empty_brass_chunk_loader" },
    { output: "redstonepen:pen" },
    { output: "redstonepen:quill" },
    // { output: "redstonepen:relay" },
  ]);

  // The andesite chunkloader only loads the current chunk
  // event.recipes.create.mechanical_crafting('create_power_loader:empty_andesite_chunk_loader', [
  //   'GGGGG',
  //   'GV VG',
  //   'GPXPG',
  //   'AVSVA',
  //   'AASAA'
  // ], {
  //   G: '#forge:glass',
  //   S: 'create:shaft',
  //   A: 'create:andesite_casing',
  //   X: 'minecraft:respawn_anchor',
  //   V: 'kubejs:hydronite_shard',
  //   P: 'kubejs:precision_component',
  // });

  // //The brass chunkloader works in a  1x1, 3x3 or 5x5 pattern
  // event.recipes.create.mechanical_crafting('create_power_loader:empty_brass_chunk_loader', [
  //   'GGGGG',
  //   'GPPPG',
  //   'GVXVG',
  //   'AVSVA',
  //   'AASAA'
  // ], {
  //   G: 'thermal:enderium_glass',
  //   S: 'create:shaft',
  //   A: 'create:brass_casing',
  //   V: 'kubejs:hydronite_shard',
  //   X: 'minecraft:respawn_anchor',
  //   P: 'kubejs:precision_machine',
  // });



});
