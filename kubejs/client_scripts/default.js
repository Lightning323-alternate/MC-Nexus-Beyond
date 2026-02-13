// priority: 0

// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded client scripts)')

JEIEvents.hideItems(event => {
    // if (!global.isWorldEditInstalled) {
    //     event.hide('worldedit:worldedit_wand');
    //     event.hide('worldedit:worldedit_nav');
    // }

    let config = JsonIO.read("kubejs/assets/minecraft/neutron/disabled_items.json") //GSON format
    let configItems = config.items

    console.log("Successfully read client blacklist file!")
    for (let i = 0; i < configItems.length; i++) {
        var item = configItems[i];
        console.log("JEI Hiding " + item);
        event.hide(item)
    }
});