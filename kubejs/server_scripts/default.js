// priority: 12
// Visit the wiki for more info - https://kubejs.com/
// This script can be reloaded with the reload command.

ServerEvents.loaded((event) => {
    if (Platform.mods.worldedit) {
        console.log("WorldEdit is installed!");
    } else {
        console.log("WorldEdit is not installed.");
    }
    global.isWorldEditInstalled = Platform.mods.worldedit ? true : false;
});

/**
 * Including bossfight drops in items
 * The following bossfight drops are incorportated into items
 * 
 * thermal drill
 * - Witherite ingot
 * 
 * advanced combusiton chamber
 * - Monstrous ingot
 * 
 * warp stone
 * - Ancient ingot
 * - void ingot
 * - leviathan ingot
 * 
 * 
 * - End Guardian ingot
 * - Ender Dragon ingot
 */

global.recipeRemovalList = [
    "createdeco:industrial_iron_ingot",
    "minecraft:lodestone",
    "quark:pipe",
    "createaddition:electrum_amulet",
    "nexus:shield_obsidian",
    "nexus:snowflake",
    "nexus:gem_prismarine",
    "minecraft:iron_block",
    "minecraft:iron_trapdoor",
    "createbigcannons:cast_iron_block",
    "createdeco:industrial_iron_trapdoor",
    "create:industrial_iron_block",
    "minecraft:rail",
    "minecraft:powered_rail",
    "pipez:energy_pipe",
    "pipez:fluid_pipe",
    "pipez:gas_pipe",
    "pipez:infinity_upgrade",
    "pipez:universal_pipe",
    "pipez:wrench",
    "redstonepen:basic_pulse_button",
    "redstonepen:control_box"
];


// List your possible paths here, from most to least likely
let blacklistPaths = [
    "kubejs/disabled_items.json",
    "kubejs/assets/minecraft/neutron/disabled_items.json",
    "kubejs/server_scripts/disabled_items.json",
    "kubejs/config/disabled_items.json"
];

let config = null;
let finalPath = "";

// Iterate through the paths until a file is successfully read
for (let path of blacklistPaths) {
    let attempt = JsonIO.read(path);
    if (attempt != null) {
        config = attempt;
        finalPath = path;
        break;
    }
}

if (config) {
    console.log("Successfully read blacklist file from: " + finalPath);
    let configItems = config.items;
    for (let i = 0; i < configItems.length; i++) {
        let item = configItems[i];
        console.log("Adding to removal list: " + item);
        global.recipeRemovalList.push(item);
    }
} else {
    console.warn("Could not find a valid blacklist JSON in any of the specified paths!");
}

const flintBlockID = 'supplementaries:flint_block';
const createDG = 'createdieselgenerators:';
const eureka = 'vs_eureka:';
const clockwork = 'vs_clockwork:'
const mowziesmobs = 'mowziesmobs:';

function customAllowMixing(event, inputsArray, outputItem) {
    // Check if the inputs array is structured as expected (two component lists)
    if (!Array.isArray(inputsArray) || inputsArray.length !== 2) {
        console.error("customAllowMixing requires a 2D array with exactly two inner arrays for inputs.");
        return;
    }

    for (const component1 of inputsArray[0]) {
        for (const component2 of inputsArray[1]) {
            console.log("Mixing ", component1, component2);
            event.recipes.create.mixing(outputItem, [component1, component2]).heated()
        }
    }
}


ServerEvents.recipes((event) => {
    global.recipeRemovalList.forEach(item => {
        event.remove({ output: item });
    });

    /**
     * 
     * 
     * 
     * Kubejs Wanderlite ingot
     */
    event.recipes.create.crushing(["kubejs:wanderlite_dust",], "kubejs:wanderlite_jewel").processingTime(1500);
    event.recipes.create.crushing(["kubejs:wanderlite_dust",], "vs_clockwork:wanderlite_matrix").processingTime(500);
    event.recipes.create.crushing([Item.of("kubejs:wanderlite_dust").withChance(0.5)], "vs_clockwork:wanderlite_crystal").processingTime(300);
    event.recipes.create.crushing([Item.of("kubejs:wanderlite_dust")], "kubejs:wanderlite_ingot").processingTime(700);

    event.recipes.create.compacting(['kubejs:wanderlite_ingot',],
        [
            "kubejs:wanderlite_dust",
            "create:rose_quartz",
        ]).heated();

    event.recipes.create.mixing([Item.of('create:brass_ingot', 4)], ['createdeco:brass_trapdoor']).heated();

    //Defeating ferros wroganaut has multiple advantages
    //You can melt the helmet and axe into netherite
    var netheritableItems = ['mowziesmobs:wrought_helmet', 'mowziesmobs:wrought_axe'];
    var netheriteYield = 4;
    for (var i = 0; i < netheritableItems.length; i++) {
        var input = [netheritableItems[i], "minecraft:iron_ingot"];
        var output = [
            Item.of('minecraft:netherite_ingot', netheriteYield),
            Item.of('thermal:netherite_nugget', 6).withChance(0.5),
            Item.of('thermal:silver_nugget', 8).withChance(0.9),
        ];
        var scrapOutput = [
            Item.of('minecraft:netherite_scrap', netheriteYield * 5),
            Item.of('thermal:netherite_nugget', 6).withChance(0.5),
        ];
        event.recipes.create.mixing(output, input).superheated();
        event.recipes.thermal.smelter(output, input);
        event.recipes.thermal.insolator(scrapOutput, input).water(400)
    }


    /**
     * Redstone pen
     */

    // event.shaped(Item.of("redstonepen:relay", 1), [
    //   "TCT",
    //   "CDC",
    //   "III"
    // ],
    //   {
    //     "C": "minecraft:smooth_stone",
    //     "T": "minecraft:redstone_torch",
    //     "D": "minecraft:redstone",
    //     "I": "minecraft:iron_block",
    //   }
    // );

    event.shaped(Item.of('redstonepen:control_box', 1), [
        "QRQ",
        "RsR",
        "QRQ",
    ],
        {
            "R": "minecraft:redstone",
            "Q": "create:brass_casing",
            "s": "northstar:circuit",
        }
    );

    event.shapeless(Item.of("redstonepen:basic_pulse_button", 1), [
        "#minecraft:wooden_buttons",
        "create:brass_ingot",
    ]);

    /**
     * 
     * 
     * 
     * Compressed blocks
     */
    event.shaped(Item.of("kubejs:compressed_cobblestone", 1), [
        "PPP",
        "PPP",
        "PPP",
    ], {
        P: "minecraft:cobblestone",
    });

    event.shapeless(Item.of("minecraft:cobblestone", 9), [
        "kubejs:compressed_cobblestone",
    ]);


    /**
     * 
     * 
     * Create components
     */
    event.shaped(Item.of("kubejs:brass_piston", 4), [
        "  G",
        " I ",
        "P  "
    ], {
        G: "create:brass_ingot",
        P: "create:brass_nugget",
        I: "createaddition:brass_rod",
    });

    event.shaped(Item.of("kubejs:brass_gear", 1), [
        " P ",
        "PIP",
        " P "
    ], {
        P: "create:brass_ingot",
        I: "minecraft:iron_nugget",
    });

    event.shaped(Item.of("kubejs:precision_component", 1),
        ["PPP", "PPP", "PPP"], {
        P: "create:precision_mechanism",
    });

    event.shaped(Item.of("kubejs:precision_machine", 1),
        ["PPP", "PPP", "PPP"], {
        P: "kubejs:precision_component",
    });


    event.shaped(Item.of("create:precision_mechanism", 9), ["kubejs:precision_component"]);
    event.shaped(Item.of("kubejs:precision_component", 9), ["kubejs:precision_machine"]);


    //Dirt
    var phantom_quantity = 32;
    event.shaped(Item.of("kubejs:phantom_dirt", phantom_quantity), ["BSB", "BFB", "BSB"], {
        B: "minecraft:dirt",
        F: "minecraft:phantom_membrane",
        S: "minecraft:string",
    });

    //Stone
    event.shaped(Item.of("kubejs:phantom_stone", phantom_quantity), ["BSB", "BFB", "BSB"], {
        B: "minecraft:stone",
        F: "minecraft:phantom_membrane",
        S: "minecraft:string",
    });

    //netherrack
    event.shaped(Item.of("kubejs:phantom_netherrack", phantom_quantity), ["BSB", "BFB", "BSB"], {
        B: "minecraft:netherrack",
        F: "minecraft:phantom_membrane",
        S: "minecraft:string",
    });

    //snow
    event.shaped(Item.of("kubejs:phantom_snow", phantom_quantity), ["BSB", "BFB", "BSB"], {
        B: "minecraft:snow_block",
        F: "minecraft:phantom_membrane",
        S: "minecraft:string",
    });

    //sandstone
    event.shaped(Item.of("kubejs:phantom_sandstone", phantom_quantity), ["BSB", "BFB", "BSB"], {
        B: "minecraft:sandstone",
        F: "minecraft:phantom_membrane",
        S: "minecraft:string",
    });

    //red sandstone
    event.shaped(Item.of("kubejs:phantom_red_sandstone", phantom_quantity), ["BSB", "BFB", "BSB"], {
        B: "minecraft:red_sandstone",
        F: "minecraft:phantom_membrane",
        S: "minecraft:string",
    });

    //cobblestone
    event.shaped(Item.of("kubejs:phantom_cobblestone", phantom_quantity), ["BSB", "BFB", "BSB"], {
        B: "minecraft:cobblestone",
        F: "minecraft:phantom_membrane",
        S: "minecraft:string",
    });

    //stone bricks
    event.shaped(Item.of("kubejs:phantom_stone_bricks", phantom_quantity), ["BSB", "BFB", "BSB"], {
        B: "minecraft:stone_bricks",
        F: "minecraft:phantom_membrane",
        S: "minecraft:string",
    });

    //end stone
    event.shaped(Item.of("kubejs:phantom_end_stone", phantom_quantity), ["BSB", "BFB", "BSB"], {
        B: "minecraft:end_stone",
        F: "minecraft:phantom_membrane",
        S: "minecraft:string",
    });

    //Plate recipes for create ingots
    const brassComponents = [
        ["#forge:plates/copper", "minecraft:copper_ingot"],
        ["#forge:plates/zinc", "create:zinc_ingot"]
    ];
    customAllowMixing(event, brassComponents, Item.of('create:brass_ingot', 2));


    event.recipes.create.crushing([Item.of('minecraft:quartz', 4)], ['minecraft:quartz_block'])

    event.recipes.create.compacting(['create:andesite_alloy',],
        [
            "create:shaft",
            "create:shaft",
            "create:shaft",
            "create:shaft"
        ]).heated();


    //Sand bar, sand tile
    event.recipes.create.compacting('kubejs:compressed_sand_bar', [
        Item.of('#minecraft:sand', 16),
        Item.of('#minecraft:gravel', 4),
        Fluid.of("minecraft:water", 500),
    ]);
    event.recipes.create.pressing(Item.of('kubejs:sand_tile', 1), ['kubejs:compressed_sand_bar']);

    //Pyrotide shard (only 3 ingredients allowed)
    var shardInput = ['minecraft:amethyst_shard', 'mowziesmobs:glowing_jelly'
    ];
    event.recipes.create.compacting(Item.of('kubejs:pyrotide_shard', 3), shardInput).heated();
    event.recipes.thermal.smelter(Item.of('kubejs:pyrotide_shard', 3), shardInput);

    //Hydronite shard
    shardInput = ["northstar:lunar_sapphire_shard", "kubejs:abyssal_ingot", "kubejs:pyrotide_shard"];
    event.recipes.create.compacting(Item.of('kubejs:hydronite_shard', 6), shardInput).heated();
    event.recipes.thermal.smelter(Item.of('kubejs:hydronite_shard', 6), shardInput);

    event.shaped(Item.of("createaddition:electrum_amulet", 1), [
        " s ",
        "s s",
        "Is "
    ], {
        I: "kubejs:wanderlite_ingot",
        s: "createaddition:electrum_wire"
    });

    event.shaped(Item.of("minecraft:rail", 32), [
        "I I",
        "IsI",
        "I I"
    ], {
        I: "minecraft:iron_ingot",
        s: "minecraft:stick"
    });

    event.shaped(Item.of("minecraft:powered_rail", 16), [
        "I I",
        "IsI",
        "IRI"
    ], {
        I: "minecraft:gold_ingot",
        s: "minecraft:stick",
        R: "minecraft:redstone"
    });

    //Fix Create adding automatic recipes to the iron block and iron trapdoor (We need to make cast iron)
    event.shapeless('minecraft:iron_block', [
        'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot',
        'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot',
        'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot'
    ]).id('kubejs:iron_block2_manual_only');


    event.shapeless('create:copper_diving_helmet', ['nexus:copper_helmet', '#forge:glass']);

    event.shapeless('createbigcannons:cast_iron_block', [
        'createbigcannons:cast_iron_ingot', 'createbigcannons:cast_iron_ingot', 'createbigcannons:cast_iron_ingot',
        'createbigcannons:cast_iron_ingot', 'createbigcannons:cast_iron_ingot', 'createbigcannons:cast_iron_ingot',
        'createbigcannons:cast_iron_ingot', 'createbigcannons:cast_iron_ingot', 'createbigcannons:cast_iron_ingot'
    ]).id('kubejs:cast_iron_block_manual_only');

    event.shapeless('create:industrial_iron_block', [
        'createdeco:industrial_iron_ingot', 'createdeco:industrial_iron_ingot', 'createdeco:industrial_iron_ingot',
        'createdeco:industrial_iron_ingot', 'createdeco:industrial_iron_ingot', 'createdeco:industrial_iron_ingot',
        'createdeco:industrial_iron_ingot', 'createdeco:industrial_iron_ingot', 'createdeco:industrial_iron_ingot'
    ]).id('kubejs:industrial_iron_block_manual_only');

    event.shaped(Item.of("createdeco:industrial_iron_trapdoor", 1), [
        "ii",
        "ii",
    ], {
        i: "createbigcannons:cast_iron_ingot",
    }).id('kubejs:industrial_iron_trapdoor_manual_only');


    event.shaped(Item.of("minecraft:iron_trapdoor", 1), [
        "ii",
        "ii",
    ], {
        i: "minecraft:iron_ingot",
    }).id('kubejs:iron_trapdoor2_manual_only');

    //Industrial iron
    event.recipes.create.pressing('createdeco:industrial_iron_ingot', 'createbigcannons:cast_iron_ingot');

    //Remove the slime ball nametag recipes
    event.remove([
        { output: "minecraft:slime_ball" },
    ]);

    event.shapeless(Item.of("minecraft:slime_ball", 1), [
        "create:dough",
        "minecraft:lime_dye",
    ]);
    event.shapeless(Item.of("minecraft:slime_ball", 9), [
        "minecraft:slime_block",
    ]);

    //Belts are better than pipes
    event.shaped(Item.of("quark:pipe", 2), [
        " C ",
        " B ",
        " C ",
    ],
        {
            C: "#forge:plates/copper",
            B: "#forge:glass",
        }
    );

    //Belts are better than pipes
    event.shaped(Item.of("quark:pipe", 1), [
        " C ",
        " B ",
        " C ",
    ],
        {
            C: "#forge:plates/copper",
            B: "#forge:glass_panes",
        }
    );

    //Add nametag recipe
    event.shaped(Item.of("minecraft:name_tag", 1), [
        "BCC",
        "BSC",
        "ABB"
    ],
        {
            A: "minecraft:writable_book",
            B: "minecraft:paper",
            C: "minecraft:string",
            S: "minecraft:slime_ball",
        }
    );


    event.shaped(Item.of("minecraft:lodestone", 1), [
        "CCC",
        "CBC",
        "CCC"
    ],
        {
            C: "minecraft:chiseled_stone_bricks",
            B: "minecraft:iron_ingot",
            //B: 'kubejs:black_gold_ingot',
        }
    );

    event.shaped(Item.of('nexus:gem_prismarine', 1), [
        ' O ',
        'OSO',
        ' O ',
    ], {
        S: 'kubejs:abyssal_pearl',
        O: 'minecraft:prismarine_crystals',
    });

    event.shaped(Item.of('nexus:shield_obsidian', 1), [
        'OOO',
        'OSO',
        ' O ',
    ], {
        S: 'nexus:shield_leather',
        O: 'create:sturdy_sheet',
    });

    //The snowflake is obtained from a boss
    event.shaped(Item.of('nexus:snowflake', 24), [
        ' P ',
        'POP',
        ' P ',
    ], {
        P: 'minecraft:ice',
        O: 'mowziesmobs:ice_crystal',
    });

    event.recipes.create.mixing(Item.of('nexus:snowflake', 2), [
        Item.of('minecraft:blue_ice', 4),
        Item.of('nexus:snowflake', 1),
    ]);

    //Mind as well
    event.shapeless(Item.of('minecraft:glowstone_dust', 12 * 6), [
        'mowziesmobs:glowing_jelly',
    ]);


});
