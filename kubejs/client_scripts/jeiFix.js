// priority: 0

//If having issues with create items:
//https://www.reddit.com/r/CreateMod/comments/1dggv32/comment/l8sxg4p/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
// JEIEvents.addItems(e => {
//     e.add(Ingredient.of('@create').getItemIds().toArray());
// });

JEIEvents.addItems((event) => {
  //event.add('patchouli:guide_book');  //This is just an example.
  event.add(//Add the thermalpedia
    Item.of("patchouli:guide_book", { "patchouli:book": "thermal:guidebook" })
  );
});

JEIEvents.hideItems(event => {
  event.hide(//Hide cyclic guidebook
    Item.of("patchouli:guide_book", { "patchouli:book": "cyclic:guide_book" })
  );
});


//Hide items from JEI
//https://github.com/emilyploszaj/emi/issues/429

// JEIEvents.hideItems((event) => {
//   //Hide WorldEdit items
//   if (!global.isWorldEditInstalled) {
//     console.log("Hiding worldedit items...");
//     event.hide("kubejs:worldedit_wand");
//     event.hide("kubejs:worldedit_nav");
//   }
// });
