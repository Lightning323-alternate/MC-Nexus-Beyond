// priority: 9

const ingredientMap = {
    "waystones:waystone": 'minecraft:stone_bricks',
    "waystones:sandy_waystone": 'minecraft:sandstone',
    "waystones:blackstone_waystone": 'minecraft:blackstone',
    "waystones:deepslate_waystone": 'minecraft:deepslate_bricks',
    "waystones:end_stone_waystone": 'minecraft:end_stone_bricks',
    "waystones:mossy_waystone": 'minecraft:mossy_stone_bricks',
};

const ingredientMap2 = {
    "waystones:blue_sharestone": 'minecraft:blue_dye',
    "waystones:brown_sharestone": 'minecraft:brown_dye',
    "waystones:cyan_sharestone": 'minecraft:cyan_dye',
    "waystones:gray_sharestone": 'minecraft:gray_dye',
    "waystones:green_sharestone": 'minecraft:green_dye',
    "waystones:light_blue_sharestone": 'minecraft:light_blue_dye',
    "waystones:light_gray_sharestone": 'minecraft:light_gray_dye',
    "waystones:lime_sharestone": 'minecraft:lime_dye',
    "waystones:magenta_sharestone": 'minecraft:magenta_dye',
    "waystones:orange_sharestone": 'minecraft:orange_dye',
    "waystones:pink_sharestone": 'minecraft:pink_dye',
    "waystones:purple_sharestone": 'minecraft:purple_dye',
    "waystones:red_sharestone": 'minecraft:red_dye',
    "waystones:white_sharestone": 'minecraft:white_dye',
    "waystones:black_sharestone": 'minecraft:black_dye',
    "waystones:yellow_sharestone": 'minecraft:yellow_dye',
};

ServerEvents.recipes((event) => {
    //Replace recipes
    event.remove([
        { output: "waystones:attuned_shard" },
        { output: "waystones:black_sharestone" },
        { output: "waystones:blackstone_waystone" },
        { output: "waystones:blue_sharestone" },
        { output: "waystones:bound_scroll" },
        { output: "waystones:brown_sharestone" },
        { output: "waystones:crumbling_attuned_shard" },
        { output: "waystones:cyan_sharestone" },
        { output: "waystones:deepslate_waystone" },
        { output: "waystones:end_stone_waystone" },
        { output: "waystones:gray_sharestone" },
        { output: "waystones:green_sharestone" },
        { output: "waystones:light_blue_sharestone" },
        { output: "waystones:light_gray_sharestone" },
        { output: "waystones:lime_sharestone" },
        { output: "waystones:magenta_sharestone" },
        { output: "waystones:mossy_waystone" },
        { output: "waystones:orange_sharestone" },
        { output: "waystones:pink_sharestone" },
        { output: "waystones:portstone" },
        { output: "waystones:purple_sharestone" },
        { output: "waystones:red_sharestone" },
        { output: "waystones:return_scroll" },
        { output: "waystones:sandy_waystone" },
        { output: "waystones:sharestone" },
        { output: "waystones:warp_dust" },
        { output: "waystones:warp_plate" },
        { output: "waystones:warp_scroll" },
        { output: "waystones:warp_stone" },
        { output: "waystones:waystone" },
        { output: "waystones:white_sharestone" },
        { output: "waystones:yellow_sharestone" },
    ]);

    //1 netherite scrap makes 8 nethersteel ingots
    //Thats enough for 2 warp plates or 2 warp stones
    event.shaped(Item.of("kubejs:warp_core", 1), [
        " D ",
        "DGD",
        " D ",
    ],
        {
            G: 'kubejs:ancient_pearl',
            D: "kubejs:void_ingot",
            // A: 'kubejs:abyssal_ingot',
            //A:'kubejs:cursium_pearl',
            // L: 'minecraft:lodestone',
            //A: "northstar:polished_lunar_sapphire",
            //A: "northstar:martian_steel_sheet",
        });

    //We could use pyrotide or abyssal ingot instead of lunar amethyst
    event.recipes.create.mechanical_crafting("waystones:warp_stone", [
        " AAA ",
        "AECEA",
        "ACWCA",
        "AECEA",
        " AAA ",
    ],
        {
            W: 'kubejs:warp_core',
            C: 'kubejs:cursium_dust',
            A: "northstar:polished_lunar_sapphire",
            E: "minecraft:ender_pearl",
        });


    for (const [itemName, stoneTypeSymbol] of Object.entries(ingredientMap)) {
        event.shaped(Item.of(itemName, 1), [" S ", "SXS", "OLO",],
            {
                L: 'minecraft:lodestone',
                S: stoneTypeSymbol,
                X: 'kubejs:warp_core',
                O: "cataclysm:polished_obsidian",
            });
    }

    for (const [itemName, stoneTypeSymbol] of Object.entries(ingredientMap2)) {
        event.shapeless(Item.of(itemName, 1), [
            'waystones:sharestone',
            stoneTypeSymbol,
        ]);
    }

    event.shaped(Item.of('waystones:sharestone', 1), ["sss", " X ", "OLO",],
        {
            L: 'minecraft:lodestone',
            s: 'minecraft:smooth_stone',
            X: 'kubejs:warp_core',
            O: "cataclysm:polished_obsidian",
        });

    event.shaped(Item.of("waystones:portstone", 1), [
        " S ",
        "SSS",
        "LXL",],
        {
            L: 'minecraft:smooth_stone',
            S: 'minecraft:stone_bricks',
            X: 'kubejs:warp_core',
        });

    //We could make warp dust harder, since eye_teleport and warp plate are the only 2 that use it (warp plate and block both use 4 warp dust)
    event.shapeless(Item.of("waystones:warp_dust", 4), [
        "thermal:ender_pearl_dust",
        "northstar:polished_lunar_sapphire",
        "northstar:polished_lunar_sapphire",
        "northstar:polished_lunar_sapphire",
    ]);

    event.shaped(Item.of("waystones:return_scroll", 4), [
        "PDP",
        "PEP",
        "PDP"
    ],
        {
            P: "minecraft:paper",
            D: "waystones:warp_dust",
            E: "kubejs:cursium_pearl"
        }
    );

    event.shaped(Item.of("waystones:bound_scroll", 1), [
        "PBP",
        "PXP",
        "PBP"
    ],
        {
            X: "waystones:return_scroll",
            B: "minecraft:blaze_rod",
            P: "minecraft:paper",
        }
    );

    event.shaped(Item.of("waystones:warp_scroll", 1), [
        "PBP",
        "PXP",
        "PBP"
    ],
        {
            X: "waystones:bound_scroll",
            B: "minecraft:compass",
            P: "minecraft:paper",
        }
    );

    //Warp plate comes with 4 free warp dust and 1 flint (that is why it is in the original recipe)
    //This should be hard to engourage other means of travel for short distances
    //If we really wanted to make this hard, we should add a nether star
    //THIS could reqyire pyrotide
    event.recipes.create.mechanical_crafting('waystones:warp_plate', [
        'ODO',
        'DKD',
        'ODO',
        'FWF',
    ], {
        D: 'waystones:warp_dust',
        K: "minecraft:flint",
        O: 'minecraft:lodestone',
        W: 'waystones:warp_stone',
        F: "cataclysm:polished_obsidian",
    });

});
