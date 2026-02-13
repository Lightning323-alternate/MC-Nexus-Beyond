/**
 * 
 * 
 * 
 * New recipes
 */
ServerEvents.recipes((event) => {

    /**
     * 
     * 
     * Kubejs Black netherite and Witherite dust
     */
    //Witherite ingot makes witherite dust
    event.recipes.create.crushing([
        Item.of("kubejs:witherite_powder"),
    ], "cataclysm:witherite_ingot").processingTime(300);

    //black netherite makes witherite dust
    event.recipes.create.crushing([
        Item.of("kubejs:witherite_powder")
    ], "kubejs:black_netherite_ingot").processingTime(700);

    //Witherite dust goes into black netherite
    event.recipes.create.compacting([Item.of('kubejs:black_netherite_ingot', 3)],
        [
            Item.of("minecraft:netherite_ingot", 1),
            "kubejs:witherite_powder",
            Item.of("create:sturdy_sheet", 8),
        ]).superheated();


    /**
     * 
     * 
     * Ignitium ingot
     */
    event.recipes.create.crushing([
        Item.of("kubejs:ignitium_powder")
    ], "cataclysm:ignitium_ingot").processingTime(300);

    event.recipes.create.crushing([
        Item.of("kubejs:ignitium_powder")
    ], "kubejs:ignitium_ingot").processingTime(700);

    event.recipes.create.mixing([Item.of('kubejs:ignitium_ingot', 2)],
        ["kubejs:ignitium_powder",
            Item.of("minecraft:netherite_ingot", 2),
            Item.of("minecraft:quartz", 3),
            Item.of("#forge:ingots/electrum", 3)
        ]).superheated();

    event.shaped(Item.of("kubejs:ignitium_pearl", 2), [
        " P ",
        "PNP",
        " P "
    ], {
        P: "kubejs:ignitium_ingot",
        N: "kubejs:hydronite_shard",
        // S: "minecraft:nether_star"
    });


    /**
      * Ancient (Ancient Remnant)
      */
    event.recipes.create.crushing([
        Item.of("kubejs:ancient_dust")
    ], "kubejs:ancient_pearl").processingTime(600);

    event.recipes.create.crushing([
        Item.of("kubejs:ancient_dust")
    ], "cataclysm:ancient_metal_ingot").processingTime(600);

    event.shaped(Item.of("kubejs:ancient_pearl", 3), [
        " N ",
        "SPS",
        " N "
    ], {
        P: "kubejs:ancient_dust",
        N: "minecraft:netherite_ingot",
        S: "minecraft:sandstone"
    });


    /**
      * Abyssal (Leviathan)
      */
    // event.recipes.create.crushing([
    //     Item.of("kubejs:abyssal_dust")
    // ], "kubejs:abyssal_pearl").processingTime(600);

    event.recipes.create.crushing([
        Item.of("kubejs:abyssal_dust")
    ], "kubejs:abyssal_ingot").processingTime(300);

    event.recipes.create.mixing([
        'kubejs:abyssal_ingot', 'kubejs:abyssal_ingot',
    ],
        ["kubejs:abyssal_dust",
            "minecraft:tube_coral", "minecraft:bubble_coral", "minecraft:brain_coral", "minecraft:horn_coral",
            "minecraft:prismarine_crystals", "minecraft:prismarine_crystals", "minecraft:prismarine_crystals",
            "minecraft:prismarine_crystals", "minecraft:prismarine_crystals", "minecraft:prismarine_crystals",
        ]).superheated();

    event.shaped(Item.of("kubejs:abyssal_pearl", 2), [
        " P ",
        "PNP",
        " P "
    ], {
        P: "kubejs:abyssal_ingot",
        N: "minecraft:prismarine_shard"
    });

    /**
     * Monstorous (Nether golem)
     */
    event.recipes.create.crushing([
        Item.of("kubejs:monstrous_dust")
    ], "cataclysm:monstrous_horn").processingTime(300);

    // event.recipes.create.crushing([
    //     Item.of("kubejs:monstrous_dust")
    // ], "kubejs:monstrous_pearl").processingTime(600);

    event.recipes.create.crushing([
        Item.of("kubejs:monstrous_dust")
    ], "kubejs:monstrous_ingot").processingTime(600);

    event.shaped(Item.of("kubejs:monstrous_pearl", 6), [
        " P ",
        "PNP",
        " P "
    ], {
        P: "kubejs:monstrous_ingot",
        N: "minecraft:netherite_ingot"
    });

    event.recipes.create.mixing(['kubejs:monstrous_ingot', 'kubejs:monstrous_ingot'],
        ["kubejs:monstrous_dust",
            "createbigcannons:cast_iron_ingot",
            "minecraft:quartz", "minecraft:quartz", "minecraft:quartz",
        ]).superheated();


    /**
      * Void (End Guardian)
      */
    // event.recipes.create.crushing([
    //     Item.of("kubejs:void_core_dust")
    // ], "cataclysm:void_core").processingTime(300);

    // event.recipes.create.crushing([
    //     Item.of("kubejs:void_core_dust")
    // ], "kubejs:void_pearl").processingTime(600);

    event.recipes.create.crushing([
        Item.of("kubejs:void_core_dust")
    ], "kubejs:void_ingot").processingTime(600);

    event.shaped(Item.of("kubejs:void_pearl", 6), [
        " P ",
        "PNP",
        " P "
    ], {
        P: "kubejs:void_ingot",
        N: "minecraft:end_stone"
    });

    event.recipes.create.mixing(['kubejs:void_ingot', 'kubejs:void_ingot'],
        ["kubejs:void_core_dust",
            Item.of("thermal:enderium_ingot", 1),
            Item.of("minecraft:end_stone", 4),
        ]).superheated();

    /**
     * Cursium
     */
    event.recipes.create.crushing([
        Item.of("kubejs:cursium_dust")
    ], "cataclysm:cursium_ingot").processingTime(300);

    event.recipes.create.crushing([
        Item.of("kubejs:cursium_dust")
    ], "kubejs:cursium_pearl").processingTime(700);

    event.shaped(Item.of("kubejs:cursium_pearl", 8), [
        " r ",
        "rDr",
        " r "
    ], {
        r: 'kubejs:super_xp_housing',
        // I: "kubejs:pyrotide_shard",
        D: "kubejs:cursium_dust"
    });

    event.shaped(Item.of("kubejs:cursium_pearl", 4), [
        " r ",
        "rDr",
        " r "
    ], {
        r: 'kubejs:hydronite_shard',
        D: "kubejs:cursium_dust"
    });

});





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
 * 
 * Loot modifiers
 */
LootJS.modifiers((event) => {
    //https://github.com/AlmostReliable/lootjs/wiki/1.18.2#addentitylootmodifierentities
    // event.addLootTableModifier("minecraft:entities/creeper").randomChance(1.0).addLoot("minecraft:gold_ingot");
    // event.addLootTableModifier("cataclysm:entities/leviathan").randomChance(1.0).addLoot("minecraft:gold_ingot");

    /**
     * These bosses NEED to drop their respective ingots
     */
    event.addEntityLootModifier("cataclysm:the_leviathan").addLoot("kubejs:abyssal_ingot").addLoot("kubejs:abyssal_ingot");
    event.addEntityLootModifier("cataclysm:ender_guardian").addLoot("kubejs:void_ingot").addLoot("kubejs:void_ingot");

    /**
     * These bosses already drop cataclysm block/ingots
     */
    // event.addEntityLootModifier("cataclysm:maledictus").addLoot("cataclysm:cursium_ingot");
    // event.addEntityLootModifier("cataclysm:ancient_remnant").addLoot("cataclysm:ancient_metal_ingot");
    // event.addEntityLootModifier("cataclysm:the_harbinger").addLoot("cataclysm:witherite_ingot");
});



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
 * 
 * 
 * 
 * 
 * Double cataclysm boss loot
 */
let cataclysm_lootMultiplier = 1;
let COMMAND_PREFIX = "!";
PlayerEvents.chat((event) => {
    let { player, message, server } = event;
    let playerName = player.name.getString();

    if (
        player.isOp() &&
        message
            .trim()
            .toLowerCase()
            .startsWith(COMMAND_PREFIX)
    ) {
        try {
            let msg = message.substring(COMMAND_PREFIX.length).trim();
            //========================================================================
            //Give item cheat ========================================================================
            if (msg.startsWith("cataclysm loot")) {
                let amount = msg.substring("cataclysm loot".length).trim();
                cataclysm_lootMultiplier = parseInt(amount, 10);
                player.displayClientMessage(
                    Component.white("Cataclysm loot multiplier set to: " + cataclysm_lootMultiplier),
                    true
                );
            }
        } finally {
            event.cancel();
        }
    }
});


const cataclysm_loot_Blacklist = [
    "cataclysm:abyss_eye",
    "cataclysm:mech_eye",
    "cataclysm:desert_eye",
    "cataclysm:flame_eye",
    "cataclysm:monstrous_eye",

    "cataclysm:amethyst_crab_meat",
    "cataclysm:amethyst_crab_shell",
    "cataclysm:ancient_spear",
    "cataclysm:aptrgangr_head",
    // "cataclysm:athame",
    "cataclysm:blazing_bone",
    "cataclysm:blazing_grips",
    "cataclysm:blessed_amethyst_crab_meat",
    "cataclysm:bloom_stone_pauldrons",
    "cataclysm:bone_reptile_chestplate",
    "cataclysm:bone_reptile_helmet",
    "cataclysm:bulwark_of_the_flame",
    "cataclysm:burning_ashes",
    "cataclysm:chain_of_soul_binding",
    // "cataclysm:door_of_seal",
    "cataclysm:draugr_head",
    "cataclysm:dying_ember",
    // "cataclysm:emp",
    // "cataclysm:final_fractal",
    // "cataclysm:gauntlet_of_bulwark",
    // "cataclysm:gauntlet_of_guard",
    // "cataclysm:gauntlet_of_maelstrom",
    // "cataclysm:infernal_forge",
    "cataclysm:khopesh",
    "cataclysm:remnant_skull",
    "cataclysm:kobolediator_skull",
    "cataclysm:koboleton_bone",
    // "cataclysm:lava_power_cell",
    "cataclysm:lionfish",
    "cataclysm:lionfish_spike",
    "cataclysm:meat_shredder",
    "cataclysm:mechanical_fusion_anvil",
    "cataclysm:netherite_effigy",
    "cataclysm:pointed_icicle",
    // "cataclysm:the_annihilator",
    // "cataclysm:the_immolator",
    // "cataclysm:the_incinerator",
];

LootJS.modifiers((event) => {
    //Block loot should not contain any OP stuff and It needs to be kept for the sake of the existing whitelisted items
    event
        .addLootTypeModifier([
            LootType.ENTITY,
        ])
        .apply((context) => {
            try {
                let lootToAdd = [];
                context.forEachLoot((item) => {
                    let itemIDString = item.id.toString(); //This is the item name
                    let blacklist = cataclysm_loot_Blacklist.includes(itemIDString); //This does indeed work
                    console.log("CATACLYSM LOOT: " + itemIDString + ", IN BLACKLIST: " + blacklist);

                    if (itemIDString.startsWith("cataclysm:") && !blacklist) {
                        console.log("LOOT: Doubling loot: " + itemIDString);
                        lootToAdd.push(item);
                    }
                });
                for (let r = 1; r < cataclysm_lootMultiplier; r++) {
                    for (let i = 0; i < lootToAdd.length; i++) {
                        context.addLoot(lootToAdd[i]);
                    }
                }
            } catch (error) {
                console.log("LOOT ERROR: " + error);
            }
        });
});
