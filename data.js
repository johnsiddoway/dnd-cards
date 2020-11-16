var data = {
    "abilityScoreModifiers": [0, -5, -4, -4, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10],
    "monsters": [
        {
            "pageSize": "small",
            "name": "Orc",
            "challengeRating": "1/2 (100 XP)",
            "creatureType": "Medium humanoid",
            "creatureAlignment": "chaotic evil",
            "armorClass": "13",
            "armorDescription": "hide armor",
            "hitPoints": "15",
            "hitPointsDescription": "2d8 + 6",
            "speed": "30 ft",
            "abilityScores": [16, 12, 16, 7, 11, 10],
            "savingThrows": null,
            "skills": "Intimidation +2",
            "damageResistances": null,
            "damageImmunities": null,
            "conditionImmunities": null,
            "senses": "Darkvision 60 ft, Passive Percepion 10",
            "languages": "Common, Orc",
            "abilities": [
                { "name": "Aggressive", "description": "As a bonus action, the Orc can move up to its speed towards a hostile creature that it can see" }
            ],
            "innateSpellcasting": {},
            "spellcasting": {},
            "actions": [
                { "name": "Greataxe", "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (ldl2 + 3) slashing damage." },
                { "name": "Javelin", "description": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 6 (ld6 + 3) piercing damage." }
            ],
            "legendaryActions": {}
        },
        {
            "pageSize": "small",
            "name": "Ogre",
            "challengeRating": "2 (450 XP)",
            "creatureType": "Large giant",
            "creatureAlignment": "chaotic evil",
            "armorClass": "11",
            "armorDescription": "hide armor",
            "hitPoints": "59",
            "hitPointsDescription": "7d10 + 21",
            "speed": "40 ft",
            "abilityScores": [19, 8, 16, 5, 7, 7],
            "savingThrows": null,
            "skills": null,
            "damageResistances": null,
            "damageImmunities": null,
            "conditionImmunities": null,
            "senses": "Darkvision 60 ft, Passive Percepion 8",
            "languages": "Common, Giant",
            "abilities": [],
            "innateSpellcasting": {},
            "spellcasting": {},
            "actions": [
                { "name": "Greatclub", "description": "Melee Weapon Attack: +6 to hit, reach 5 ft, one target. Hit: 13 (2d8 + 4) bludgeoning damage." },
                { "name": "Javelin", "description": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft or range 30/120 ft, one target. Hit: 11 (2d6 + 4) piercing damage." }
            ],
            "legendaryActions": {}
        },
        {
            "pageSize": "medium",
            "name": "Young White Dragon",
            "creatureSize": "Large",
            "creatureType": "dragon",
            "creatureAlignment": "chaotic evil",
            "armorClass": "17",
            "armorDescription": "natural armor",
            "hitPoints": "133",
            "hitPointsDescription": "14d10 + 56",
            "speed": "40 ft, burrow 20 ft, fly 80 ft, swim 40 ft",
            "abilityScores": [18, 10, 18, 6, 11, 12],
            "savingThrows": "Dev +3, Con +7, Wis +3, Cha +4",
            "skills": "Perception +6, Stealth +3",
            "damageResistances": null,
            "damageImmunities": "cold",
            "conditionImmunities": null,
            "senses": "Blindsight 30 ft, Darkvision 120 ft, Passive Percepion 16",
            "languages": "Common, Draconic",
            "challengeRating": 6,
            "experiencePoints": 2300,
            "abilities": [
                { "name": "Ice Walk", "description": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement." }
            ],
            "innateSpellcasting": {},
            "spellcasting": {},
            "actions": [
                {
                    "name": "Multiattack",
                    "description": "The dragon makes three attacks: one with its bite and two with its claws."
                },
                {
                    "name": "Bite",
                    "type": "Melee Weapon Attack",
                    "description": "+7 to hit, reach 10 ft, one target. Hit: 15 (2d10 + 4) piercing damage plus 4 (1d8) cold damage."
                },
                {
                    "name": "Claw",
                    "type": "Melee Weapon Attack",
                    "description": "+7 to hit, reach 5 ft, one target. Hit: 11 (2d6 + 4) slashing damage."
                },
                {
                    "name": "Cold Breath (Recharge 5-6)",
                    "description": "The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 15 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much on a successful one."
                }
            ],
            "legendaryActions": {}
        }
    ]
};