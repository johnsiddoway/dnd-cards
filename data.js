var data = {
    "abilityScoreModifiers": [0, -5, -4, -4, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9],
    "monsters": [
        {
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
            "damageResistances": null,
            "damageImmunities": null,
            "languages": "Common, Orc",
            "senses": "Darkvision 60 ft, Passive Percepion 10",
            "skills": "Intimidation +2",
            "spellcasting": {},
            "abilities": [
                { "name": "Aggressive", "description": "As a bonus action, the Orc can move up to its speed towards a hostile creature that it can see" }
            ],
            "actions": [
                { "name": "Greataxe", "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (ldl2 + 3) slashing damage." },
                { "name": "Javeline", "description": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 6 (ld6 + 3) piercing damage." }
            ]
        },
        {
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
            "damageResistances": null,
            "damageImmunities": null,
            "languages": "Common, Giant",
            "senses": "Darkvision 60 ft, Passive Percepion 8",
            "skills": null,
            "spellcasting": {},
            "abilities": [],
            "actions": [
                { "name": "Greatclub", "description": "Melee Weapon Attack: +6 to hit, reach 5 ft, one target. Hit: 13 (2d8 + 4) bludgeoning damage." },
                { "name": "Javeline", "description": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft or range 30/120 ft, one target. Hit: 11 (2d6 + 4) piercing damage." }
            ]
        },
        {
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
            "senses": "Blindsight 30 ft, Darkvision 120 ft, Passive Percepion 16",
            "languages": "Common, Draconic",
            "challengeRating": 6,
            "experiencePoints": 2300,
            "abilities": [
                { "name": "Ice Walk", "description": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement." }
            ],
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
            ]
        },
        {
            "name": "Wererat",
            "challengeRating": "2 (450 XP)",
            "creatureType": "Medium humanoid (human, shapechanger)",
            "creatureAlignment": "lawful evil",
            "armorClass": "12",
            "armorDescription": null,
            "hitPoints": "33",
            "hitPointsDescription": "6d8 + 6",
            "speed": "30 ft",
            "abilityScores": [10, 15,12, 11, 10, 8],
            "damageResistances": null,
            "damageImmunities": "nonmagical weapons that aren't silvered",
            "languages": "Common (can't speak in rat form)",
            "senses": "Darkvision 60 ft (rat form only), Passive Percepion 12",
            "skills": "Perception +2, Stealth +4",
            "spellcasting": {},
            "abilities": [
                { "name": "Shapechanger", "description": "The wererat can use its action to polymorph into a rat-humanoid hybrid or into a giat rat, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
                { "name": "Keen Smell", "description": "The wererat has advantage on Wisdom (Perception) checks that rely on smell." }
            ],
            "actions": [
                {
                    "name": "Multiattack (Humanoid or Hybrid Form Only)",
                    "type": null,
                    "description": "The wererat makes two attacks, only one of which can be a bite."
                },
                {
                    "name": "Bite (Rat or Hybrid Form Only)",
                    "type": "Melee Weapon Attack",
                    "description": "+4 to hit, reach 5 ft, one target. Hit: 4 (1d4 + 2) piercing damage. If the target is humanoid, it must succeed on a DC 11 Constitution saving throw or be cursed with wererat lycanthropy."
                },
                {
                    "name": "Shortsword (Humanoid or Hybrid Form Only)",
                    "type": "Melee Weapon Attack",
                    "description": "+4 to hit, reach 5 ft, one target. Hit: 5 (1d6 + 2) piercing damage."
                },
                {
                    "name": "Hand Crossbow (Humanoid or Hybrid Form Only)",
                    "type": "Ranged Weapon Attack",
                    "description": "+4 to hit, range 30/120 ftt, one target. Hit: 5 (1d6 + 2) piercing damage."
                }
            ]
        },
    ]
};