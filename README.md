# dnd-cards
Monster and NPC stat cards for D&amp;D 5e, using examples from the 5E System Reference Document: https://dnd.wizards.com/articles/features/systems-reference-document-srd.

The goal of this repository is to provide a simple CSS framework to allow for printing content for personal use in offline D&D games.

## How it works

I've broken down stats into three sizes (Small, Medium, and Large), and written up some minimal styles to get the three styles to fit on printed paper. You can fit 4 Small statblocks, 2 Medium statblocks, or 1 Large statblock on a single sheet. You can also mix and match, and print up multiple copies of the same creature at the same time.

![example-1](dnd-cards-example-1.png)

# Statblock JSON Structure

I couldn't find a good resource for D&D 5e statblocks in JSON format (or other formats, for that matter). So I started putting together my own, for usage here.

Any simple stats that are not needed (skills, damage resistances, etc) cannot be removed, but simply left blank (`"skills": ""`) or null (`"skills": null`). This is due to the way Knockout.js operates. The stat name needs to exist for Knockout.js to determine if it can show or hide the stat. I may fix this in the future to allow stored data entries to not require all attributes.

Complex stats (Innate Spellcasting, Spellcasting, Actions, and Legendary Actions) cannot be removed, but simply left as empty objects (`{}`).

```json
{
    "pageSize": "small|medium|large, used to determine if the monster should take one quarter, one half, or one full page",
    "name": "",
    "challengeRating": "1/8|1/4|1/2|1",
    "creatureSize": "Small|Medium|Large",
    "creatureType": "humanoid",
    "creatureAlignment": "lawful good",
    "armorClass": "",
    "armorDescription": "",
    "hitPoints": "",
    "hitPointsDescription": "1d1 + 1",
    "speed": "",
    "abilityScores": [10, 10, 10, 10, 10, 10],
    "savingThrows": "",
    "skills": "",
    "damageResistances": "",
    "damageImmunities": "",
    "conditionImmunities": "",
    "senses": "Passive Percepion 10",
    "languages": "Common",
    "abilities": [
        {
            "name": "",
            "description": ""
        }
    ],
    "innateSpellcasting": {
        "description": "",
        "spells": [
            {
                "level": "",
                "spells": ""
            }
        ]
    },
    "spellcasting": {
        "description": "",
        "spells": [
            {
                "level": "Cantrips",
                "slots": "at-will",
                "spells": ""
            },
            {
                "level": "1st level",
                "slots": "4 slots",
                "spells": ""
            }
        ]
    },
    "actions": [
        {
            "name": "",
            "type": "Melee Weapon Attack",
            "description": ""
        }
    ],
    "legendaryActions": {
        "description": "",
        "actions": [
            {
                "name": "",
                "description": ""
            }
        ]
    }
}
```
# Legal Information

As far as I'm aware, usage of monster and NPC stats from the SRD is valid in this repo as long as I include the SRD5.1, the Open Game License (OGL), and the copyright information of the SRD. All of these things should be available here: https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf.

Bootstrap is licensed under the MIT license - https://github.com/twbs/bootstrap/blob/main/LICENSE
Knockout.js is licensed under the MIT license - https://github.com/knockout/knockout/blob/master/LICENSE
This package is licensed under the MIT license - http://www.opensource.org/licenses/mit-license.php

# Copyright Notice
Open Game License v1.0a Copyright 2000, Wizards of the Coast, LLC.
System Reference Document 5.1 Copyright 2016, Wizards of the Coast, Inc.; Authors Mike Mearls, Jeremy Crawford, Chris Perkins, Rodney Thompson, Peter Lee, James Wyatt, Robert. J. Schwalb, Bruce R. Cordell, Chris Sims, and Steve Townshend, based on original material by E. Gary Gygax and Dave Arneson.