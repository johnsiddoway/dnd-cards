var monsters = [
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
        "creatureType": "Large dragon",
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
    },
    {
        "pageSize": "small",
        "name": "Ape",
        "challengeRating": "1/2 (100 XP)",
        "creatureType": "Medium beast",
        "creatureAlignment": "unaligned",
        "armorClass": "12",
        "armorDescription": "",
        "hitPoints": "19",
        "hitPointsDescription": "3d8 + 6",
        "speed": "30 ft, climb 30 ft",
        "abilityScores": [16, 14, 14, 6, 12, 7],
        "savingThrows": null,
        "skills": "Athletics +5, Perception +3",
        "damageResistances": null,
        "damageImmunities": null,
        "conditionImmunities": null,
        "senses": "passive Percepion 13",
        "languages": "-",
        "innateSpellcasting": {},
        "spellcasting": {},
        "abilities": [],
        "actions": [
            {
                "name": "Multiattack",
                "description": "The ape makes two fist attacks."
            },
            {
                "name": "Fist",
                "type": "Melee Weapon Attack",
                "description": "+5 to hit, reach 5 ft, one target. Hit: 6 (ld6 + 3) bludgeoning damage."
            },
            {
                "name": "Rock",
                "type": "Ranged Weapon Attack",
                "description": "+5 to hit, range 25/50 ft, one target. Hit: 6 (1d6 + 3) bludgeoning damage."
            }
        ],
        "legendaryActions": {}
    },
    {
        "pageSize": "large",
        "name": "Solar",
        "challengeRating": "21 (33,000 XP)",
        "creatureType": "Large celestial",
        "creatureAlignment": "lawful good",
        "armorClass": "21",
        "armorDescription": "natural armor",
        "hitPoints": "243",
        "hitPointsDescription": "18d10 + 144",
        "speed": "50 ft, fly 150 ft",
        "abilityScores": [26, 22, 26, 25, 25, 30],
        "savingThrows": "Int +14, Wis +14, Cha +17",
        "skills": "Perception +14",
        "damageResistances": "radiant; bludgeoning, piercing, and slashing from non-magical attacks",
        "damageImmunities": "necrotic, poison",
        "conditionImmunities": "charmed, exhaustion, frightened, poisoned",
        "senses": "truesight 120 ft, Passive Percepion 24",
        "languages": "all, telepathy 120 ft",
        "abilities": [
            { "name": "Angelic Weapons", "description": "The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 radiant damage (included in the attack)." },
            { "name": "Divine Awareness", "description": "The solar knows if it hears a lie." },
            { "name": "Magic Resistance", "description": "The solar has advantage on saving throws against spells and other magical effects." }
        ],
        "innateSpellcasting": {
            "description": "The solar's spellcasting ability is Charisma (spell save DC 25). It can innately cast the following spells, requiring no material components:",
            "spells": [
                {
                    "level": "At will",
                    "spells": "detect evil and god, invisibility (self only)"
                },
                {
                    "level": "3/day each",
                    "spells": "blade barrier, dispel evil and good, resurrection"
                },
                {
                    "level": "1/day each",
                    "spells": "commune, control weather"
                }
            ]
        },
        "spellcasting": {},
        "actions": [
            {
                "name": "Multiattack",
                "type": "",
                "description": "The solar makes two greatsword attacks."
            },
            {
                "name": "Greatsword",
                "type": "Melee Weapon Attack",
                "description": "+15 to hit, reach 5 ft, one target. Hit: 22 (4d6 + 8) slashing damage plus 27 (6d8) radiant damage."
            },
            {
                "name": "Slaying Longbow",
                "type": "Ranged Weapon Attack",
                "description": "+13 to hit, range 150/600 ft, one target. Hit: 15 (2d8 + 6) piercing damage plus 27 (6d8) radiant damage. If the target is a creature that has 100 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die."
            },
            {
                "name": "Flying Sword",
                "type": "",
                "description": "The solar releases its greatsword to hover magically in an unoccupied space within 5 feet of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 feet and either make one attack against a target or return to the solar's hand. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies."
            },
            {
                "name": "Healing Touch (4/Day)",
                "type": "",
                "description": "The solar touches another creature. The target magically regains 40 (8d8 + 4) hit points and is freed from any curse, disease, poison, blindness, or deafness."
            }
        ],
        "legendaryActions": {
            "description": "The solar can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The solar regains spent legendary actions at the start of its turn.",
            "actions": [
                {
                    "name": "Teleport",
                    "description": "The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
                },
                {
                    "name": "Searing Burst (Costs 2 Actions)",
                    "description": "The solar emits magical, divine energy. Each creature of its choice in a 10-foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one."
                },
                {
                    "name": "Blinding Gaze (Costs 3 Actions)",
                    "description": "The solar targets one creature it can see within 30 feet of it. If the target can see it, the target must succed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes blindness."
                }
            ]
        }
    }
];