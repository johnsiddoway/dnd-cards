var monsters = [
    {
        "pageSize": "small",
        "name": "Orc",
        "challengeRating": "1/2",
        "creatureSize": "Medium",
        "creatureType": "humanoid (orc)",
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
        "challengeRating": 2,
        "creatureSize": "Large",
        "creatureType": "giant",
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
        "challengeRating": 6,
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
        "challengeRating": "1/2",
        "creatureSize": "Medium",
        "creatureType": "beast",
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
        "challengeRating": 21,
        "creatureSize": "Large",
        "creatureType": "celestial",
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
    },
    {
        "pageSize": "medium",
        "name": "Wererat",
        "challengeRating": 2,
        "creatureSize": "Medium",
        "creatureType": "humanoid (human, shapechanger)",
        "creatureAlignment": "lawful evil",
        "armorClass": 12,
        "armorDescription": null,
        "hitPoints": 33,
        "hitPointsDescription": "6d8 + 6",
        "speed": "30 ft",
        "abilityScores": [10, 15, 12, 11, 10, 8],
        "savingThrows": null,
        "skills": "Perception +2, Stealth +4",
        "damageResistances": "",
        "damageImmunities": "bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons",
        "conditionImmunities": "",
        "senses": "darkvision 60 ft, passive Percepion 12",
        "languages": "Common (can't speak in rat form)",
        "abilities": [
            {
                "name": "Shapechanger",
                "description": "The wererat can use its action to polymorph into a rat-humanoid hybrid or into a giant rat, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form when it dies."
            },
            {
                "name": "Keen Smell",
                "description": "The wererat has advantage on Wisdom (Perception) checks that rely on smell."
            }
        ],
        "innateSpellcasting": {},
        "spellcasting": {},
        "actions": [
            {
                "name": "Multiattack (Humanoid o Hybrid Form Only)",
                "description": "The wererat makes two attacks, only one of which can be a bite."
            },
            {
                "name": "Bite (Rat or Hybrid Form Only)",
                "type": "Melee Weapon Attack",
                "description": "+4 to hit, reach 5 ft, one target. Hit: 4 (1d4 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 11 Constitution saving throw or be cursed with wererat lycanthropy."
            },
            {
                "name": "Shortsword (Humanoid or Hybrid Form Only)",
                "type": "Melee Weapon Attack",
                "description": "+4 to hit, reach 5 ft, one target. Hit: 5 (1d6 + 2) piercing damage."
            },
            {
                "name": "Hand Crossbow (Humanoid or Hybrid Form Only)",
                "type": "Ranged Weapon Attack",
                "description": "+4 to hit, range 30/120 ft, one target. Hit: 5 (1d6 + 2) piercing damage."
            }
        ],
        "legendaryActions": {}
    },
    {
        "pageSize": "small",
        "name": "Acolyte",
        "challengeRating": "1/4",
        "creatureSize": "Medium",
        "creatureType": "humanoid (any race)",
        "creatureAlignment": "any alignment",
        "armorClass": 10,
        "armorDescription": null,
        "hitPoints": 9,
        "hitPointsDescription": "2d8",
        "speed": "30 ft",
        "abilityScores": [10, 10, 10, 10, 14, 11],
        "savingThrows": null,
        "skills": "Medicine +4, Religion +2",
        "damageResistances": null,
        "damageImmunities": null,
        "conditionImmunities": null,
        "senses": "Passive Percepion 12",
        "languages": "any one language (usually Common)",
        "abilities": [],
        "innateSpellcasting": {},
        "spellcasting": {
            "description": "The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has the following cleric spells prepared:",
            "spells": [
                {
                    "level": "Cantrips",
                    "slots": "at-will",
                    "spells": "light, sacred flame, thumaturgy"
                },
                {
                    "level": "1st level",
                    "slots": "3 slots",
                    "spells": "bless, cure wounds, sanctuary"
                }
            ]
        },
        "actions": [
            {
                "name": "Club",
                "type": "Melee Weapon Attack",
                "description": "+2 to hit, reach 5 ft, one target. Hit: 2 (1d4) bludgeoning damage."
            }
        ],
        "legendaryActions": {}
    },
    {
        "pageSize": "medium",
        "name": "Archmage",
        "challengeRating": 12,
        "creatureSize": "Medium",
        "creatureType": "humanoid (any race)",
        "creatureAlignment": "any alignment",
        "armorClass": 12,
        "armorDescription": "15 with mage armor",
        "hitPoints": 99,
        "hitPointsDescription": "18d8 + 18",
        "speed": "30 ft",
        "abilityScores": [10, 14, 12, 20, 15, 16],
        "savingThrows": "Int +9, Wis +6",
        "skills": "Arcana +13, History +13",
        "damageResistances": "damage from spells; nonmagical bludgeoning, piercing, and slashing (from stoneskin)",
        "damageImmunities": null,
        "conditionImmunities": null,
        "senses": "Passive Percepion 12",
        "languages": "any six languages",
        "abilities": [
            {
                "name": "Magic Resistance",
                "description": "The archmage has advantage on saving throws against spells and other magical effects."
            }
        ],
        "innateSpellcasting": {},
        "spellcasting": {
            "description": "The archmage is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The archmage can cast disguise self and invisibility at wll and has the following wizard spells prepared:",
            "spells": [
                {
                    "level": "Cantrips",
                    "slots": "at-will",
                    "spells": "fire bolt, light, mage hand, prestidigitation, shocking grasp"
                },
                {
                    "level": "1st level",
                    "slots": "4 slots",
                    "spells": "detect magic, identify, mage armor*, magic missile"
                },
                {
                    "level": "2nd level",
                    "slots": "3 slots",
                    "spells": "detect thoughts, mirror image, misty step"
                },
                {
                    "level": "3rd level",
                    "slots": "3 slots",
                    "spells": "counterspell, fly, lightning bolt"
                },
                {
                    "level": "4th level",
                    "slots": "3 slots",
                    "spells": "banishment, fire shield, stoneskin*"
                },
                {
                    "level": "5th level",
                    "slots": "3 slots",
                    "spells": "cone of cold, scrying, wall of force"
                },
                {
                    "level": "6th level",
                    "slots": "1 slot",
                    "spells": "globe of invulnerability"
                },
                {
                    "level": "7th level",
                    "slots": "1 slot",
                    "spells": "teleport"
                },
                {
                    "level": "8th level",
                    "slots": "1 slot",
                    "spells": "mind blank*"
                },
                {
                    "level": "9th level",
                    "slots": "1 slot",
                    "spells": "time stop"
                }
            ]
        },
        "actions": [
            {
                "name": "Dagger",
                "type": "Melee or Ranged Weapon Attack",
                "description": "+6 to hit, reach 5 ft or range 20/60 ft, one target. Hit: 4 (1d4 + 2) piercing damage."
            }
        ],
        "legendaryActions": {}
    },
    {
        "pageSize": "small",
        "name": "Cultist",
        "challengeRating": "1/8",
        "creatureSize": "Medium",
        "creatureType": "humanoid (any race)",
        "creatureAlignment": "any non-good alignment",
        "armorClass": 12,
        "armorDescription": "leather armor",
        "hitPoints": 9,
        "hitPointsDescription": "2d8",
        "speed": "30 ft",
        "abilityScores": [11, 12, 10, 10, 11, 10],
        "savingThrows": "",
        "skills": "Deception +2, Religion +2",
        "damageResistances": "",
        "damageImmunities": "",
        "conditionImmunities": "",
        "senses": "Passive Percepion 10",
        "languages": "any one language (usually Common)",
        "abilities": [
            {
                "name": "Dark Devotion",
                "description": "The cultist has advantage on saving throws against being charmed or frightened."
            }
        ],
        "innateSpellcasting": {},
        "spellcasting": {},
        "actions": [
            {
                "name": "Scimitar",
                "type": "Melee Weapon Attack",
                "description": "+3 to hit, reach 5 ft, one target. Hit: 4 (1d6 + 1) slashing damage."
            }
        ],
        "legendaryActions": {}
    },
    {
        "pageSize": "small",
        "name": "Cult Fanatic",
        "challengeRating": 2,
        "creatureSize": "Medium",
        "creatureType": "humanoid (any race)",
        "creatureAlignment": "any non-good alignment",
        "armorClass": 13,
        "armorDescription": "leather armor",
        "hitPoints": 33,
        "hitPointsDescription": "6d8 + 6",
        "speed": "30 ft",
        "abilityScores": [11, 14, 12, 10, 13, 14],
        "savingThrows": "",
        "skills": "Deception +4, Persuasion +4, Religion +2",
        "damageResistances": "",
        "damageImmunities": "",
        "conditionImmunities": "",
        "senses": "Passive Percepion 11",
        "languages": "any one language (usually Common)",
        "abilities": [
            {
                "name": "Dark Devotion",
                "description": "The cultist has advantage on saving throws against being charmed or frightened."
            }
        ],
        "innateSpellcasting": {},
        "spellcasting": {
            "description": "The fanatic is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 11, +3 to hit with spell attack). The fanatic has the following cleric spells prepared:",
            "spells": [
                {
                    "level": "Cantrips",
                    "slots": "at-will",
                    "spells": "light, sacred flame, thaumaturgy"
                },
                {
                    "level": "1st level",
                    "slots": "4 slots",
                    "spells": "command, inflict wounds, shield of faith"
                },
                {
                    "level": "2nd level",
                    "slots": "3 slots",
                    "spells": "hold person, spiritual weapon"
                }
            ]
        },
        "actions": [
            {
                "name": "Multiattack",
                "description": "The fantic makes two melee attacks."
            },
            {
                "name": "Dagger",
                "type": "Melee or Ranged Weapon Attack",
                "description": "+4 to hit, reach 5 ft or range 20/60 ft, one target. Hit: 4 (1d4 + 2) piercing damage."
            }
        ],
        "legendaryActions": {}
    },
    {
        "pageSize": "medium",
        "name": "Wight",
        "challengeRating": 3,
        "creatureSize": "Medium",
        "creatureType": "undead",
        "creatureAlignment": "neutral evil",
        "armorClass": 14,
        "armorDescription": "studded leather",
        "hitPoints": 45,
        "hitPointsDescription": "6d8 + 18",
        "speed": "30 ft",
        "abilityScores": [15, 14, 16, 1, 13, 15],
        "savingThrows": "",
        "skills": "Perception +3, Stealth +4",
        "damageResistances": "necrotic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered",
        "damageImmunities": "poison",
        "conditionImmunities": "exhaustion, poisoned",
        "senses": "darkvision 60 ft, passive Percepion 13",
        "languages": "the languages it knew in life",
        "abilities": [
            {
                "name": "Sunlight Sensitivity",
                "description": "While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        "innateSpellcasting": {},
        "spellcasting": {},
        "actions": [
            {
                "name": "Multiattack",
                "description": "The wight makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack."
            },
            {
                "name": "Life Drain",
                "type": "Melee Weapon Attack",
                "description": "+4 to hit, reach 5 ft, one creature. Hit: 5 (1d6 + 2) necrotic damage. The target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain by this attack rises 24 hours later as a zombie under the wight's control, unless the humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at one time."
            },
            {
                "name": "Longsword",
                "type": "Melee Weapon Attack",
                "description": "+4 to hit, reach 5 ft, one target. Hit: 6 (1d8 +2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands."
            },
            {
                "name": "Longbow",
                "type": "Ranged Weapon Attack",
                "description": "+4 to hit, range 150/600 ft, one target. Hit: 6 (1d8 + 2) piercing damage."
            }
        ],
        "legendaryActions": {}
    },
    {
        "pageSize": "medium",
        "name": "Will-o'-Wisp",
        "challengeRating": 2,
        "creatureSize": "Tiny",
        "creatureType": "undead",
        "creatureAlignment": "chaotic evil",
        "armorClass": 19,
        "armorDescription": null,
        "hitPoints": 22,
        "hitPointsDescription": "9d4",
        "speed": "0 ft, fly 50 ft (hover)",
        "abilityScores": [1, 28, 10, 13, 14, 11],
        "savingThrows": "",
        "skills": "",
        "damageResistances": "acid, cold, fire, necrotic, thunder; bludgeoning, piercing, and slashing from nonmagical attacks",
        "damageImmunities": "lightning, poison",
        "conditionImmunities": "exhaustion, grappled, paralyzed, poisoned, prone, restrained, unconscious",
        "senses": "darkvision 120 ft, passive Percepion 12",
        "languages": "the languages it knew in life",
        "abilities": [
            {
                "name": "Consume Life",
                "description": "As a bonus action, the will-o'-wisp can target one creature it can see within 5 ft of it that has 0 hit points and is still alive. The target must succeed on a DC 10 Constitution saving throw against this magic or die. If the target dies, the will-o'-wisp regains 10 (3d6) hit points."
            },
            {
                "name": "Ephemereal",
                "description": "The will-o'-wisp can't wear or carry anything."
            },
            {
                "name": "Incorporeal Movement",
                "description": "The will-o'-wisp can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
            },
            {
                "name": "Variable Illumination",
                "description": "The will-o'-wisp sheds bright light in a 5- to 20-foot radius and dim light for an additional number of feet equal to the chosen radius. The will-o'-wisp can alter the radius as a bonus action."
            }
        ],
        "innateSpellcasting": {},
        "spellcasting": {},
        "actions": [
            {
                "name": "Shock",
                "type": "Melee Spell Attack",
                "description": "+4 to hit, reach 5 ft, one creature. Hit 9 (2d8) lightning damage."
            },
            {
                "name": "Invisibility",
                "description": "The will-o'-wisp and its light magically become invisible until it attacks or uses its Consume Life, or until its concentration ends (as if concentrating on a spell)."
            }
        ],
        "legendaryActions": {}
    },
    {
        "pageSize": "small",
        "name": "Zombie",
        "challengeRating": "1/4",
        "creatureSize": "Medium",
        "creatureType": "undead",
        "creatureAlignment": "neutral evil",
        "armorClass": 8,
        "armorDescription": "",
        "hitPoints": 22,
        "hitPointsDescription": "3d8 + 9",
        "speed": "20 ft",
        "abilityScores": [13, 6, 16, 3, 6, 5],
        "savingThrows": "Wis +0",
        "skills": "",
        "damageResistances": "",
        "damageImmunities": "poison",
        "conditionImmunities": "poisoned",
        "senses": "darkvision 60 ft, passive Percepion 8",
        "languages": "understands the languages it knew in life but can't speak",
        "abilities": [
            {
                "name": "Undead Fortitude",
                "description": "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."
            }
        ],
        "innateSpellcasting": {},
        "spellcasting": {},
        "actions": [
            {
                "name": "Slam",
                "type": "Melee Weapon Attack",
                "description": "+3 to hit, reach 5 ft, one target. Hit: 4 (1d6 + 1) bludgeoning damage."
            }
        ],
        "legendaryActions": {}
    }
];