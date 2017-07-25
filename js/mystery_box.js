/**
 * Author: Berto <Skype: tripleeys>
 *
 */
 
 
 /*var items = [
 "Demon Blade", "Dirk of Cronus", "Doom Bow", "Fairy Plate", "Pixie-Enchanted Sword",
 "Admin Bow", "Admin Dagger", "Admin Staff"
 ];*/
 
 var percentage = 0;
 
 const ALL_ITEMS = [
	/*new Item("Admin Bow", "http://static.drips.pw/rotmg/wiki/Untiered/Admin Bow.png"),
	new Item("Admin Dagger", "http://static.drips.pw/rotmg/wiki/Untiered/Admin Dagger.png"),
	new Item("Admin Katana", "http://static.drips.pw/rotmg/wiki/Untiered/Admin Katana.png"),
	new Item("Admin Staff", "http://static.drips.pw/rotmg/wiki/Untiered/Admin Staff.png"),
	new Item("Admin Sword", "http://static.drips.pw/rotmg/wiki/Untiered/Admin Sword.png"),
	new Item("Admin Wand", "http://static.drips.pw/rotmg/wiki/Untiered/Admin Wand.png"),
	new Item("Almandine Armor of Anger", "http://static.drips.pw/rotmg/wiki/Untiered/Almandine Armor of Anger.png"),
	new Item("Almandine Ring of Wrath", "http://static.drips.pw/rotmg/wiki/Untiered/Almandine Ring of Wrath.png"),
	new Item("America Ring", "http://static.drips.pw/rotmg/wiki/Untiered/America Ring.png"),
	new Item("Amulet of Drakefyre", "http://static.drips.pw/rotmg/wiki/Untiered/Amulet of Drakefyre.png"),
	new Item("Amulet of Resurrection", "http://static.drips.pw/rotmg/wiki/Untiered/Amulet of Resurrection.png"),
	new Item("An Icicle", "http://static.drips.pw/rotmg/wiki/Untiered/An Icicle.png"),
	new Item("Anatis Staff", "http://static.drips.pw/rotmg/wiki/Untiered/Anatis Staff.png"),
	new Item("Ancient Spell Pierce", "http://static.drips.pw/rotmg/wiki/Untiered/Ancient Spell Pierce.png"),
	new Item("Ancient Stone Sword", "http://static.drips.pw/rotmg/wiki/Untiered/Ancient Stone Sword.png"),
	new Item("Annihilation Armor", "http://static.drips.pw/rotmg/wiki/Untiered/Annihilation Armor.png"),
	new Item("Annoying Firecracker Katana", "http://static.drips.pw/rotmg/wiki/Untiered/Annoying Firecracker Katana.png"),
	new Item("Apocalypse Feather", "http://static.drips.pw/rotmg/wiki/Untiered/Apocalypse Feather.png"),
	new Item("Arbiter's Wrath", "http://static.drips.pw/rotmg/wiki/Untiered/Arbiter's Wrath.png"),
	new Item("Arctic Bow", "http://static.drips.pw/rotmg/wiki/Untiered/Arctic Bow.png"),
	new Item("Barely Attuned Magic Thingy", "http://static.drips.pw/rotmg/wiki/Untiered/Barely Attuned Magic Thingy.png"),
	new Item("Bone Dagger", "http://static.drips.pw/rotmg/wiki/Untiered/Bone Dagger.png"),
	new Item("Book of Geb", "http://static.drips.pw/rotmg/wiki/Untiered/Book of Geb.png"),
	new Item("Bow of Deep Enchantment", "http://static.drips.pw/rotmg/wiki/Untiered/Bow of Deep Enchantment.png"),
	new Item("Bow of Eternal Frost", "http://static.drips.pw/rotmg/wiki/Untiered/Bow of Eternal Frost.png"),
	new Item("Bow of Mystical Energy", "http://static.drips.pw/rotmg/wiki/Untiered/Bow of Mystical Energy.png"),
	new Item("Bow of Nightmares", "http://static.drips.pw/rotmg/wiki/Untiered/Bow of Nightmares.png"),
	new Item("Bow of the Morning Star", "http://static.drips.pw/rotmg/wiki/Untiered/Bow of the Morning Star.png"),
	new Item("Bracer of the Guardian", "http://static.drips.pw/rotmg/wiki/Untiered/Bracer of the Guardian.png"),
	new Item("Bronze Medal", "http://static.drips.pw/rotmg/wiki/Untiered/Bronze Medal.png"),
	new Item("Candy Ring", "http://static.drips.pw/rotmg/wiki/Untiered/Candy Ring.png"),
	new Item("Candy-Coated Armor", "http://static.drips.pw/rotmg/wiki/Untiered/Candy-Coated Armor.png"),
	new Item("Captain's Ring", "http://static.drips.pw/rotmg/wiki/Untiered/Captain's Ring.png"),
	new Item("Celestial Blade", "http://static.drips.pw/rotmg/wiki/Untiered/Celestial Blade.png"),
	new Item("Chasuble of Holy Light", "http://static.drips.pw/rotmg/wiki/Untiered/Chasuble of Holy Light.png"),
	new Item("Cheater Heavy Armor", "http://static.drips.pw/rotmg/wiki/Untiered/Cheater Heavy Armor.png"),
	new Item("Cheater Light Armor", "http://static.drips.pw/rotmg/wiki/Untiered/Cheater Light Armor.png"),
	new Item("Cheater Robe", "http://static.drips.pw/rotmg/wiki/Untiered/Cheater Robe.png"),
	new Item("Chicken Leg of Doom", "http://static.drips.pw/rotmg/wiki/Untiered/Chicken Leg of Doom.png"),
	new Item("Cloak of the Planewalker", "http://static.drips.pw/rotmg/wiki/Untiered/Cloak of the Planewalker.png"),
	new Item("Clover Bow", "http://static.drips.pw/rotmg/wiki/Untiered/Clover Bow.png"),
	new Item("Conducting Wand", "http://static.drips.pw/rotmg/wiki/Untiered/Conducting Wand.png"),
	new Item("Coral Bow", "http://static.drips.pw/rotmg/wiki/Untiered/Coral Bow.png"),
	new Item("Coral Ring", "http://static.drips.pw/rotmg/wiki/Untiered/Coral Ring.png"),
	new Item("Coral Silk Armor", "http://static.drips.pw/rotmg/wiki/Untiered/Coral Silk Armor.png"),
	new Item("Coral Venom Trap", "http://static.drips.pw/rotmg/wiki/Untiered/Coral Venom Trap.png"),
	new Item("Corrupted Cleaver", "http://static.drips.pw/rotmg/wiki/Untiered/Corrupted Cleaver.png"),
	new Item("Cracked Crystal Skull", "http://static.drips.pw/rotmg/wiki/Untiered/Cracked Crystal Skull.png"),
	new Item("Crown", "http://static.drips.pw/rotmg/wiki/Untiered/Crown.png"),
	new Item("Crystal Bone Ring", "http://static.drips.pw/rotmg/wiki/Untiered/Crystal Bone Ring.png"),
	new Item("Crystal Sword", "https://i.imgur.com/dp1HJKq.png"),
	new Item("Crystal Wand", "http://static.drips.pw/rotmg/wiki/Untiered/Crystal Wand.png"),
	new Item("Cupid's Bow", "http://static.drips.pw/rotmg/wiki/Untiered/Cupid's Bow.png"),
	new Item("Dagger of Dire Hatred", "http://static.drips.pw/rotmg/wiki/Untiered/Dagger of Dire Hatred.png"),
	new Item("Dagger of Sinister Deeds", "http://static.drips.pw/rotmg/wiki/Untiered/Dagger of Sinister Deeds.png"),
	new Item("Dagger of the Amethyst Prism", "http://static.drips.pw/rotmg/wiki/Untiered/Dagger of the Amethyst Prism.png"),
	new Item("Dagger of the Terrible Talon", "http://static.drips.pw/rotmg/wiki/Untiered/Dagger of the Terrible Talon.png"),
	new Item("Def Test Sword", "http://static.drips.pw/rotmg/wiki/Untiered/Def Test Sword.png"),
	new Item("Demon Blade", "http://static.drips.pw/rotmg/wiki/Untiered/Demon Blade.png"),
	new Item("Diamond Bladed Katana", "http://static.drips.pw/rotmg/wiki/Untiered/Diamond Bladed Katana.png"),
	new Item("Dirk of Cronus", "http://static.drips.pw/rotmg/wiki/Untiered/Dirk of Cronus.png"),
	new Item("Doctor Swordsworth", "http://static.drips.pw/rotmg/wiki/Untiered/Doctor Swordsworth.png"),
	new Item("Doku No Ken", "http://static.drips.pw/rotmg/wiki/Untiered/Doku No Ken.png"),
	new Item("Dominion Armor", "http://static.drips.pw/rotmg/wiki/Untiered/Dominion Armor.png"),
	new Item("Doom Bow", "http://static.drips.pw/rotmg/wiki/Untiered/Doom Bow.png"),
	new Item("Enchanted Ice Blade", "http://static.drips.pw/rotmg/wiki/Untiered/Enchanted Ice Blade.png"),
	new Item("Enchanted Ice Shard", "http://static.drips.pw/rotmg/wiki/Untiered/Enchanted Ice Shard.png"),
	new Item("Eternal Snowflake Wand", "http://static.drips.pw/rotmg/wiki/Untiered/Eternal Snowflake Wand.png"),
	new Item("Etherite Dagger", "http://static.drips.pw/rotmg/wiki/Untiered/Etherite Dagger.png"),
	new Item("Experimental Ring", "http://static.drips.pw/rotmg/wiki/Untiered/Experimental Ring.png"),
	new Item("Fairy Plate", "http://static.drips.pw/rotmg/wiki/Untiered/Fairy Plate.png"),
	new Item("Fire Dragon Battle Armor", "http://static.drips.pw/rotmg/wiki/Untiered/Fire Dragon Battle Armor.png"),
	new Item("Freezing Quiver", "http://static.drips.pw/rotmg/wiki/Untiered/Freezing Quiver.png"),
	new Item("Frimarra", "http://static.drips.pw/rotmg/wiki/Untiered/Frimarra.png"),
	new Item("Frost Citadel Armor", "http://static.drips.pw/rotmg/wiki/Untiered/Frost Citadel Armor.png"),
	new Item("Frost Drake Hide Armor", "http://static.drips.pw/rotmg/wiki/Untiered/Frost Drake Hide Armor.png"),
	new Item("Frost Elementalist Robe", "http://static.drips.pw/rotmg/wiki/Untiered/Frost Elementalist Robe.png"),
	new Item("Frostbite", "http://static.drips.pw/rotmg/wiki/Untiered/Frostbite.png"),
	new Item("Frozen Wand", "http://static.drips.pw/rotmg/wiki/Untiered/Frozen Wand.png"),
	new Item("Geb's Ring of Wisdom", "http://static.drips.pw/rotmg/wiki/Untiered/Geb's Ring of Wisdom.png"),
	new Item("Ghastly Drape", "http://static.drips.pw/rotmg/wiki/Untiered/Ghastly Drape.png"),
	new Item("Ghostly Prism", "http://static.drips.pw/rotmg/wiki/Untiered/Ghostly Prism.png"),
	new Item("Gold Medal", "http://static.drips.pw/rotmg/wiki/Untiered/Gold Medal.png"),
	new Item("Harlequin Armor", "http://static.drips.pw/rotmg/wiki/Untiered/Harlequin Armor.png"),
	new Item("Heartfind Dagger", "http://static.drips.pw/rotmg/wiki/Untiered/Heartfind Dagger.png"),
	new Item("Helm of Draconic Dominance", "http://static.drips.pw/rotmg/wiki/Untiered/Helm of Draconic Dominance.png"),
	new Item("Helm of the Juggernaut", "http://static.drips.pw/rotmg/wiki/Untiered/Helm of the Juggernaut.png"),
	new Item("HoneyScepter", "http://static.drips.pw/rotmg/wiki/Untiered/HoneyScepter.png"),
	new Item("Ice Crown", "http://static.drips.pw/rotmg/wiki/Untiered/Ice Crown.png"),
	new Item("Indomptable", "http://static.drips.pw/rotmg/wiki/Untiered/Indomptable.png"),
	new Item("KoalaPOW", "http://static.drips.pw/rotmg/wiki/Untiered/KoalaPOW.png"),
	new Item("Leaf Bow", "http://static.drips.pw/rotmg/wiki/Untiered/Leaf Bow.png"),
	new Item("Leaf Dragon Hide Armor", "http://static.drips.pw/rotmg/wiki/Untiered/Leaf Dragon Hide Armor.png"),
	new Item("Lethargic Sentience", "http://static.drips.pw/rotmg/wiki/Untiered/Lethargic Sentience.png"),
	new Item("Leviathan Armor", "http://static.drips.pw/rotmg/wiki/Untiered/Leviathan Armor.png"),
	new Item("Mantle of Skuld", "http://static.drips.pw/rotmg/wiki/Untiered/Mantle of Skuld.png"),
	new Item("Midnight Star", "http://static.drips.pw/rotmg/wiki/Untiered/Midnight Star.png"),
	new Item("Murky Toxin", "http://static.drips.pw/rotmg/wiki/Untiered/Murky Toxin.png"),
	new Item("Onyx Shield of the Mad God", "http://static.drips.pw/rotmg/wiki/Untiered/Onyx Shield of the Mad God.png"),
	new Item("Orb of Conflict", "http://static.drips.pw/rotmg/wiki/Untiered/Orb of Conflict.png"),
	new Item("Orb of Sweet Demise", "http://static.drips.pw/rotmg/wiki/Untiered/Orb of Sweet Demise.png"),
	new Item("Penetrating Blast Spell", "http://static.drips.pw/rotmg/wiki/Untiered/Penetrating Blast Spell.png"),
	new Item("Pirate King's Cutlass", "http://static.drips.pw/rotmg/wiki/Untiered/Pirate King's Cutlass.png"),
	new Item("Pixie-Enchanted Sword", "http://static.drips.pw/rotmg/wiki/Untiered/Pixie-Enchanted Sword.png"),
	new Item("Plague Poison", "http://static.drips.pw/rotmg/wiki/Untiered/Plague Poison.png"),
	new Item("Poison Fang Dagger", "http://static.drips.pw/rotmg/wiki/Untiered/Poison Fang Dagger.png"),
	new Item("Precisely Calibrated Stringstick", "http://static.drips.pw/rotmg/wiki/Untiered/Precisely Calibrated Stringstick.png"),
	new Item("Present Dispensing Wand", "http://static.drips.pw/rotmg/wiki/Untiered/Present Dispensing Wand.png"),
	new Item("Prism of Dancing Swords", "http://static.drips.pw/rotmg/wiki/Untiered/Prism of Dancing Swords.png"),
	new Item("Prism of Dire Instability", "http://static.drips.pw/rotmg/wiki/Untiered/Prism of Dire Instability.png"),
	new Item("Quiver of Thunder", "http://static.drips.pw/rotmg/wiki/Untiered/Quiver of Thunder.png"),
	new Item("Ray Katana", "http://static.drips.pw/rotmg/wiki/Untiered/Ray Katana.png"),
	new Item("Resurrected Warrior's Armor", "http://static.drips.pw/rotmg/wiki/Untiered/Resurrected Warrior's Armor.png"),
	new Item("Ring Pop", "http://static.drips.pw/rotmg/wiki/Untiered/Ring Pop.png"),
	new Item("Ring of Divine Faith", "http://static.drips.pw/rotmg/wiki/Untiered/Ring of Divine Faith.png"),
	new Item("Ring of Minor Defense", "http://static.drips.pw/rotmg/wiki/Untiered/Ring of Minor Defense.png"),
	new Item("Ring of Pure Wishes", "http://static.drips.pw/rotmg/wiki/Untiered/Ring of Pure Wishes.png"),
	new Item("Ring of Unbound Health", "http://static.drips.pw/rotmg/wiki/Untiered/Ring of Unbound Health.png"),
	new Item("Ring of the Burning Sun", "http://static.drips.pw/rotmg/wiki/Untiered/Ring of the Burning Sun.png"),
	new Item("Ring of the Covetous Heart", "http://static.drips.pw/rotmg/wiki/Untiered/Ring of the Covetous Heart.png"),
	new Item("Ring of the Nile", "http://static.drips.pw/rotmg/wiki/Untiered/Ring of the Nile.png"),
	new Item("Ring of the Northern Light", "http://static.drips.pw/rotmg/wiki/Untiered/Ring of the Northern Light.png"),
	new Item("Ring of the Pyramid", "http://static.drips.pw/rotmg/wiki/Untiered/Ring of the Pyramid.png"),
	new Item("Ring of the Sphinx", "http://static.drips.pw/rotmg/wiki/Untiered/Ring of the Sphinx.png"),
	new Item("Robe of the Ancient Intellect", "http://static.drips.pw/rotmg/wiki/Untiered/Robe of the Ancient Intellect.png"),
	new Item("Robe of the Mad Scientist", "http://static.drips.pw/rotmg/wiki/Untiered/Robe of the Mad Scientist.png"),
	new Item("Robe of the Star Mother", "http://static.drips.pw/rotmg/wiki/Untiered/Robe of the Star Mother.png"),
	new Item("Robe of the Summer Solstice", "http://static.drips.pw/rotmg/wiki/Untiered/Robe of the Summer Solstice.png"),
	new Item("Robe of the Tlatoani", "http://static.drips.pw/rotmg/wiki/Untiered/Robe of the Tlatoani.png"),
	new Item("Robobow", "http://static.drips.pw/rotmg/wiki/Untiered/Robobow.png"),
	new Item("Salju", "http://static.drips.pw/rotmg/wiki/Untiered/Salju.png"),
	new Item("Scepter of Fulmination", "http://static.drips.pw/rotmg/wiki/Untiered/Scepter of Fulmination.png"),
	new Item("Scepter of Geb", "http://static.drips.pw/rotmg/wiki/Untiered/Scepter of Geb.png"),
	new Item("Seal of Blasphemous Prayer", "http://static.drips.pw/rotmg/wiki/Untiered/Seal of Blasphemous Prayer.png"),
	new Item("Seal of the Enchanted Forest", "http://static.drips.pw/rotmg/wiki/Untiered/Seal of the Enchanted Forest.png"),
	new Item("Sentient Staff", "http://static.drips.pw/rotmg/wiki/Untiered/Sentient Staff.png"),
	new Item("Sewer Cocktail", "http://static.drips.pw/rotmg/wiki/Untiered/Sewer Cocktail.png"),
	new Item("Shendyt of Geb", "http://static.drips.pw/rotmg/wiki/Untiered/Shendyt of Geb.png"),
	new Item("Shield of Ogmur", "http://static.drips.pw/rotmg/wiki/Untiered/Shield of Ogmur.png"),
	new Item("Silver Medal", "http://static.drips.pw/rotmg/wiki/Untiered/Silver Medal.png"),
	new Item("Skull of Endless Torment", "http://static.drips.pw/rotmg/wiki/Untiered/Skull of Endless Torment.png"),
	new Item("Skull-splitter Sword", "http://static.drips.pw/rotmg/wiki/Untiered/Skull-splitter Sword.png"),
	new Item("Skullish Remains of Esben", "http://static.drips.pw/rotmg/wiki/Untiered/Skullish Remains of Esben.png"),
	new Item("Snake Eye Ring", "http://static.drips.pw/rotmg/wiki/Untiered/Snake Eye Ring.png"),
	new Item("Snake Skin Armor", "http://static.drips.pw/rotmg/wiki/Untiered/Snake Skin Armor.png"),
	new Item("Snake Skin Shield", "http://static.drips.pw/rotmg/wiki/Untiered/Snake Skin Shield.png"),
	new Item("Soul of the Bearer", "http://static.drips.pw/rotmg/wiki/Untiered/Soul of the Bearer.png"),
	new Item("Soulless Robe", "http://static.drips.pw/rotmg/wiki/Untiered/Soulless Robe.png"),
	new Item("Spectral Cloth Armor", "http://static.drips.pw/rotmg/wiki/Untiered/Spectral Cloth Armor.png"),
	new Item("Spectral Ring of Horrors", "http://static.drips.pw/rotmg/wiki/Untiered/Spectral Ring of Horrors.png"),
	new Item("Spicy Wand of Spice", "http://static.drips.pw/rotmg/wiki/Untiered/Spicy Wand of Spice.png"),
	new Item("Spider's Eye Ring", "http://static.drips.pw/rotmg/wiki/Untiered/Spider's Eye Ring.png"),
	new Item("Spirit Dagger", "http://static.drips.pw/rotmg/wiki/Untiered/Spirit Dagger.png"),
	new Item("Spiteful Scutum", "http://static.drips.pw/rotmg/wiki/Untiered/Spiteful Scutum.png"),
	new Item("Sprite Wand", "http://static.drips.pw/rotmg/wiki/Untiered/Sprite Wand.png"),
	new Item("St. Abraham's Wand", "http://static.drips.pw/rotmg/wiki/Untiered/St. Abraham's Wand.png"),
	new Item("Staff of Adoration", "http://static.drips.pw/rotmg/wiki/Untiered/Staff of Adoration.png"),
	new Item("Staff of Esben", "http://static.drips.pw/rotmg/wiki/Untiered/Staff of Esben.png"),
	new Item("Staff of Extreme Prejudice", "http://static.drips.pw/rotmg/wiki/Untiered/Staff of Extreme Prejudice.png"),
	new Item("Staff of Horrific Knowledge", "http://static.drips.pw/rotmg/wiki/Untiered/Staff of Horrific Knowledge.png"),
	new Item("Staff of Iceblast", "http://static.drips.pw/rotmg/wiki/Untiered/Staff of Iceblast.png"),
	new Item("Staff of Yuletide Carols", "http://static.drips.pw/rotmg/wiki/Untiered/Staff of Yuletide Carols.png"),
	new Item("Staff of the Crystal Serpent", "http://static.drips.pw/rotmg/wiki/Untiered/Staff of the Crystal Serpent.png"),
	new Item("Staff of the Fundamental Core", "http://static.drips.pw/rotmg/wiki/Untiered/Staff of the Fundamental Core.png"),
	new Item("Staff of the Rising Sun", "http://static.drips.pw/rotmg/wiki/Untiered/Staff of the Rising Sun.png"),
	new Item("Staff of the Vital Unity", "http://static.drips.pw/rotmg/wiki/Untiered/Staff of the Vital Unity.png"),
	new Item("Strike Amulet", "http://static.drips.pw/rotmg/wiki/Untiered/Strike Amulet.png"),
	new Item("Sunshine Shiv", "http://static.drips.pw/rotmg/wiki/Untiered/Sunshine Shiv.png"),
	new Item("Sword of Illumination", "http://static.drips.pw/rotmg/wiki/Untiered/Sword of Illumination.png"),
	new Item("Sword of Majesty", "http://static.drips.pw/rotmg/wiki/Untiered/Sword of Majesty.png"),
	new Item("Sword of Splendor", "http://static.drips.pw/rotmg/wiki/Untiered/Sword of Splendor.png"),
	new Item("Sword of the Mad God", "http://static.drips.pw/rotmg/wiki/Untiered/Sword of the Mad God.png"),
	new Item("Sword of the Rainbow's End", "http://static.drips.pw/rotmg/wiki/Untiered/Sword of the Rainbow's End.png"),
	new Item("Tablet of the King's Avatar", "http://static.drips.pw/rotmg/wiki/Untiered/Tablet of the King's Avatar.png"),
	new Item("The Forgotten Crown", "http://static.drips.pw/rotmg/wiki/Untiered/The Forgotten Crown.png"),
	new Item("The Forgotten Ring", "http://static.drips.pw/rotmg/wiki/Untiered/The Forgotten Ring.png"),
	new Item("The Phylactery", "http://static.drips.pw/rotmg/wiki/Untiered/The Phylactery.png"),
	new Item("The Robe of Twilight", "http://static.drips.pw/rotmg/wiki/Untiered/The Robe of Twilight.png"),
	new Item("The Twilight Gemstone", "http://static.drips.pw/rotmg/wiki/Untiered/The Twilight Gemstone.png"),
	new Item("Thousand Shot", "http://static.drips.pw/rotmg/wiki/Untiered/Thousand Shot.png"),
	new Item("Thousand Suns Spell", "http://static.drips.pw/rotmg/wiki/Untiered/Thousand Suns Spell.png"),
	new Item("Tome of Frigid Protection", "http://static.drips.pw/rotmg/wiki/Untiered/Tome of Frigid Protection.png"),
	new Item("Tome of Holy Protection", "http://static.drips.pw/rotmg/wiki/Untiered/Tome of Holy Protection.png"),
	new Item("Tome of Purification", "http://static.drips.pw/rotmg/wiki/Untiered/Tome of Purification.png"),
	new Item("Toy Knife", "http://static.drips.pw/rotmg/wiki/Untiered/Toy Knife.png"),
	new Item("Unstable Anomaly", "http://static.drips.pw/rotmg/wiki/Untiered/Unstable Anomaly.png"),
	new Item("Useless Katana", "http://static.drips.pw/rotmg/wiki/Untiered/Useless Katana.png"),
	new Item("Vinesword", "http://static.drips.pw/rotmg/wiki/Untiered/Vinesword.png"),
	new Item("Void Blade", "http://static.drips.pw/rotmg/wiki/Untiered/Void Blade.png"),
	new Item("Wand of Ancient Terror", "http://static.drips.pw/rotmg/wiki/Untiered/Wand of Ancient Terror.png"),
	new Item("Wand of Budding Romance", "http://static.drips.pw/rotmg/wiki/Untiered/Wand of Budding Romance.png"),
	new Item("Wand of Egg-cellence", "http://static.drips.pw/rotmg/wiki/Untiered/Wand of Egg-cellence.png"),
	new Item("Wand of Evocation", "http://static.drips.pw/rotmg/wiki/Untiered/Wand of Evocation.png"),
	new Item("Wand of Retribution", "http://static.drips.pw/rotmg/wiki/Untiered/Wand of Retribution.png"),
	new Item("Wand of the Bulwark", "http://static.drips.pw/rotmg/wiki/Untiered/Wand of the Bulwark.png"),
	new Item("Water Dragon Silk Robe", "http://static.drips.pw/rotmg/wiki/Untiered/Water Dragon Silk Robe.png"),
	new Item("Wyrmhide Armor", "http://static.drips.pw/rotmg/wiki/Untiered/Wyrmhide Armor.png"),
	new Item("Zaarvox's Heart", "http://static.drips.pw/rotmg/wiki/Untiered/Zaarvox's Heart.png"),*/
	
	// keys
	new Item("Abyss of Demons Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Abyss of Demons Key.png"),
	new Item("Battle Nexus Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Battle Nexus Key.png"),
	new Item("Beachzone Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Beachzone Key.png"),
	new Item("Bella's Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Bella's Key.png"),
	new Item("Candy Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Candy Key.png"),
	new Item("Cemetery Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Cemetery Key.png"),
	new Item("Davy's Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Davy's Key.png"),
	new Item("Deadwater Docks Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Deadwater Docks Key.png"),
	new Item("Draconis Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Draconis Key.png"),
	new Item("Forest Maze Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Forest Maze Key.png"),
	new Item("Halloween Cemetery Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Halloween Cemetery Key.png"),
	new Item("Ice Cave Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Ice Cave Key.png"),
	new Item("Ice Tomb Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Ice Tomb Key.png"),
	new Item("Lab Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Lab Key.png"),
	new Item("Manor Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Manor Key.png"),
	new Item("Mountain Temple Key", "https://i.imgur.com/C1x4QXa.png"),
	new Item("Ocean Trench Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Ocean Trench Key.png"),
	new Item("Pirate Cave Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Pirate Cave Key.png"),
	new Item("Puppet Master's Encore Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Puppet Master's Encore Key.png"),
	new Item("Shaitan's Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Shaitan's Key.png"),
	new Item("Shatters Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Shatters Key.png"),
	new Item("Snake Pit Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Snake Pit Key.png"),
	new Item("Spider Den Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Spider Den Key.png"),
	new Item("Sprite World Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Sprite World Key.png"),
	new Item("The Crawling Depths Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/The Crawling Depths Key.png"),
	new Item("The Hive Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/The Hive Key.png"),
	new Item("Theatre Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Theatre Key.png"),
	new Item("Tomb of the Ancients Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Tomb of the Ancients Key.png"),
	new Item("Totem Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Totem Key.png"),
	new Item("Toxic Sewers Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Toxic Sewers Key.png"),
	new Item("Treasure Map", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Treasure Map.png"),
	new Item("Undead Lair Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Undead Lair Key.png"),
	new Item("Woodland Labyrinth Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Woodland Labyrinth Key.png"),
	new Item("The Nest Key", "https://i.imgur.com/QGwUicw.png"),
	
	// pet food
	new Item("Ambrosia", "http://static.drips.pw/rotmg/wiki/Misc%20items/Ambrosia.png"),
	new Item("Double Cheeseburger Deluxe", "http://static.drips.pw/rotmg/wiki/Misc%20items/Double%20Cheeseburger%20Deluxe.png"),
	new Item("Superburger", "http://static.drips.pw/rotmg/wiki/Misc%20items/Superburger.png"),
	new Item("Thanksgiving Turkey", "https://static.drips.pw/rotmg/wiki/Misc%20items/Thanksgiving%20Turkey.png"),
	new Item("Grapes of Wrath", "https://static.drips.pw/rotmg/wiki/Misc%20items/Grapes%20of%20Wrath.png"),
	new Item("Chocolate Cream Sandwich Cookie", "http://static.drips.pw/rotmg/wiki/Misc%20items/Chocolate%20Cream%20Sandwich%20Cookie.png"),
	new Item("Power Pizza", "https://static.drips.pw/rotmg/wiki/Misc%20items/Power%20Pizza.png"),
	new Item("Pumpkin Pie", "https://static.drips.pw/rotmg/wiki/Misc%20items/Pumpkin%20Pie.png"),
	new Item("Great Taco", "https://static.drips.pw/rotmg/wiki/Misc%20items/Great%20Taco.png"),
	new Item("Sliced Yam", "https://static.drips.pw/rotmg/wiki/Misc%20items/Sliced%20Yam.png"),
	new Item("Ear of Corn", "https://static.drips.pw/rotmg/wiki/Misc%20items/Ear%20of%20Corn.png"),
	new Item("Fries", "https://static.drips.pw/rotmg/wiki/Misc%20items/Fries.png"),
	new Item("Cranberries", "http://static.drips.pw/rotmg/wiki/Misc%20items/Cranberries.png"),
	new Item("Soft Drink", "https://static.drips.pw/rotmg/wiki/Misc%20items/Soft%20Drink.png"),
	
	// skins
	new Item("Agent", "http://static.drips.pw/rotmg/wiki/Skins/Agent.png"),
	new Item("Amazonian", "http://static.drips.pw/rotmg/wiki/Skins/Amazonian.png"),
	new Item("Artemis", "http://static.drips.pw/rotmg/wiki/Skins/Artemis.png"),
	new Item("Ascended Sorcerer", "http://static.drips.pw/rotmg/wiki/Skins/Ascended Sorcerer.png"),
	new Item("B.B. Wolf", "http://static.drips.pw/rotmg/wiki/Skins/B.B. Wolf.png"),
	new Item("Baby Djinja", "http://static.drips.pw/rotmg/wiki/Skins/Baby Djinja.png"),
	new Item("Bandit", "http://static.drips.pw/rotmg/wiki/Skins/Bandit.png"),
	new Item("Bashing Bride", "http://static.drips.pw/rotmg/wiki/Skins/Bashing Bride.png"),
	new Item("Blizzard Sorcerer", "http://static.drips.pw/rotmg/wiki/Skins/Blizzard Sorcerer.png"),
	new Item("Brigand", "http://static.drips.pw/rotmg/wiki/Skins/Brigand.png"),
	new Item("Carnivalmancer", "http://static.drips.pw/rotmg/wiki/Skins/Carnivalmancer.png"),
	new Item("Chinese Dress Trickster", "http://static.drips.pw/rotmg/wiki/Skins/Chinese Dress Trickster.png"),
	new Item("Cupid", "http://static.drips.pw/rotmg/wiki/Skins/Cupid.png"),
	new Item("Dark Elf Huntress", "http://static.drips.pw/rotmg/wiki/Skins/Dark Elf Huntress.png"),
	new Item("Deadly Vixen", "http://static.drips.pw/rotmg/wiki/Skins/Deadly Vixen.png"),
	new Item("Death Mage", "http://static.drips.pw/rotmg/wiki/Skins/Death Mage.png"),
	new Item("Death", "http://static.drips.pw/rotmg/wiki/Skins/Death.png"),
	new Item("Decorated Paladin", "http://static.drips.pw/rotmg/wiki/Skins/Decorated Paladin.png"),
	new Item("Demon Spawn", "http://static.drips.pw/rotmg/wiki/Skins/Demon Spawn.png"),
	new Item("Down Under", "http://static.drips.pw/rotmg/wiki/Skins/Down Under.png"),
	new Item("Dr. Spellbomb", "http://static.drips.pw/rotmg/wiki/Skins/Dr. Spellbomb.png"),
	new Item("Dragon Tamer", "http://static.drips.pw/rotmg/wiki/Skins/Dragon Tamer.png"),
	new Item("Drow Trickster", "http://static.drips.pw/rotmg/wiki/Skins/Drow Trickster.png"),
	new Item("Elder Wizard", "http://static.drips.pw/rotmg/wiki/Skins/Elder Wizard.png"),
	new Item("Eligible Bachelor", "http://static.drips.pw/rotmg/wiki/Skins/Eligible Bachelor.png"),
	new Item("Explorer", "http://static.drips.pw/rotmg/wiki/Skins/Explorer.png"),
	new Item("Father Time", "http://static.drips.pw/rotmg/wiki/Skins/Father Time.png"),
	new Item("Founding Father", "http://static.drips.pw/rotmg/wiki/Skins/Founding Father.png"),
	new Item("Frankenstein's Monster", "http://static.drips.pw/rotmg/wiki/Skins/Frankenstein's Monster.png"),
	new Item("Frimar Knight", "http://static.drips.pw/rotmg/wiki/Skins/Frimar Knight.png"),
	new Item("Frozen King", "http://static.drips.pw/rotmg/wiki/Skins/Frozen King.png"),
	new Item("Gentleman", "http://static.drips.pw/rotmg/wiki/Skins/Gentleman.png"),
	new Item("Ghost Huntress", "http://static.drips.pw/rotmg/wiki/Skins/Ghost Huntress.png"),
	new Item("Headless Rider", "http://static.drips.pw/rotmg/wiki/Skins/Headless Rider.png"),
	new Item("Heartseeker", "http://static.drips.pw/rotmg/wiki/Skins/Heartseeker.png"),
	new Item("Holy Avenger", "http://static.drips.pw/rotmg/wiki/Skins/Holy Avenger.png"),
	new Item("Hunchback", "http://static.drips.pw/rotmg/wiki/Skins/Hunchback.png"),
	new Item("Huntsman", "http://static.drips.pw/rotmg/wiki/Skins/Huntsman.png"),
	new Item("Ice King Priest", "http://static.drips.pw/rotmg/wiki/Skins/Ice King Priest.png"),
	new Item("Iceman", "http://static.drips.pw/rotmg/wiki/Skins/Iceman.png"),
	new Item("Icicle Dial Mystic", "http://static.drips.pw/rotmg/wiki/Skins/Icicle Dial Mystic.png"),
	new Item("Infected Assassin", "http://static.drips.pw/rotmg/wiki/Skins/Infected Assassin.png"),
	new Item("Inuit", "http://static.drips.pw/rotmg/wiki/Skins/Inuit.png"),
	new Item("Iron Maiden", "http://static.drips.pw/rotmg/wiki/Skins/Iron Maiden.png"),
	new Item("Jack the Ripper", "http://static.drips.pw/rotmg/wiki/Skins/Jack the Ripper.png"),
	new Item("Jester", "http://static.drips.pw/rotmg/wiki/Skins/Jester.png"),
	new Item("Juggernaut", "http://static.drips.pw/rotmg/wiki/Skins/Juggernaut.png"),
	new Item("Juliet", "http://static.drips.pw/rotmg/wiki/Skins/Juliet.png"),
	new Item("King Knifeula", "http://static.drips.pw/rotmg/wiki/Skins/King Knifeula.png"),
	new Item("Knight - Artist Extraordinaire", "http://static.drips.pw/rotmg/wiki/Skins/Knight - Artist Extraordinaire.png"),
	new Item("Knight - Future Seeker Tester", "http://static.drips.pw/rotmg/wiki/Skins/Knight - Future Seeker Tester.png"),
	new Item("Knight of the Round", "http://static.drips.pw/rotmg/wiki/Skins/Knight of the Round.png"),
	new Item("Knight- Dungeon Mastermind", "http://static.drips.pw/rotmg/wiki/Skins/Knight- Dungeon Mastermind.png"),
	new Item("Leprechaun Mystic", "http://static.drips.pw/rotmg/wiki/Skins/Leprechaun Mystic.png"),
	new Item("Lil Red", "http://static.drips.pw/rotmg/wiki/Skins/Lil Red.png"),
	new Item("Lil' Bo-Peep", "http://static.drips.pw/rotmg/wiki/Skins/Lil' Bo-Peep.png"),
	new Item("Little Helper", "http://static.drips.pw/rotmg/wiki/Skins/Little Helper.png"),
	new Item("Loki", "http://static.drips.pw/rotmg/wiki/Skins/Loki.png"),
	new Item("Mardi Gras Jester", "http://static.drips.pw/rotmg/wiki/Skins/Mardi Gras Jester.png"),
	new Item("Merlin", "http://static.drips.pw/rotmg/wiki/Skins/Merlin.png"),
	new Item("Mini Archmage", "http://static.drips.pw/rotmg/wiki/Skins/Mini Archmage.png"),
	new Item("Mini Geb", "http://static.drips.pw/rotmg/wiki/Skins/Mini Geb.png"),
	new Item("Mini Nut", "http://static.drips.pw/rotmg/wiki/Skins/Mini Nut.png"),
	new Item("Mini Oryx", "http://static.drips.pw/rotmg/wiki/Skins/Mini Oryx.png"),
	new Item("Mini Phylactery", "http://static.drips.pw/rotmg/wiki/Skins/Mini Phylactery.png"),
	new Item("Mini Rosen", "http://static.drips.pw/rotmg/wiki/Skins/Mini Rosen.png"),
	new Item("Mini Skuld", "http://static.drips.pw/rotmg/wiki/Skins/Mini Skuld.png"),
	new Item("Mini Stheno", "http://static.drips.pw/rotmg/wiki/Skins/Mini Stheno.png"),
	new Item("Mini Swoll", "http://static.drips.pw/rotmg/wiki/Skins/Mini Swoll.png"),
	new Item("Mini Thessal", "http://static.drips.pw/rotmg/wiki/Skins/Mini Thessal.png"),
	new Item("Mischievous Imp", "http://static.drips.pw/rotmg/wiki/Skins/Mischievous Imp.png"),
	new Item("Miss Santa", "http://static.drips.pw/rotmg/wiki/Skins/Miss Santa.png"),
	new Item("Miss Shamrock", "http://static.drips.pw/rotmg/wiki/Skins/Miss Shamrock.png"),
	new Item("Nexus no Miko", "http://static.drips.pw/rotmg/wiki/Skins/Nexus no Miko.png"),
	new Item("Nun", "http://static.drips.pw/rotmg/wiki/Skins/Nun.png"),
	new Item("Penguin Knight", "http://static.drips.pw/rotmg/wiki/Skins/Penguin Knight.png"),
	new Item("Pilgrim Father", "http://static.drips.pw/rotmg/wiki/Skins/Pilgrim Father.png"),
	new Item("Pilgrim Mother", "http://static.drips.pw/rotmg/wiki/Skins/Pilgrim Mother.png"),
	new Item("Platinum Knight", "http://static.drips.pw/rotmg/wiki/Skins/Platinum Knight.png"),
	new Item("Platinum Rogue", "http://static.drips.pw/rotmg/wiki/Skins/Platinum Rogue.png"),
	new Item("Platinum Warrior", "http://static.drips.pw/rotmg/wiki/Skins/Platinum Warrior.png"),
	new Item("Poltergeist", "http://static.drips.pw/rotmg/wiki/Skins/Poltergeist.png"),
	new Item("Puppet Master", "http://static.drips.pw/rotmg/wiki/Skins/Puppet Master.png"),
	new Item("Ranger", "http://static.drips.pw/rotmg/wiki/Skins/Ranger.png"),
	new Item("Robed Priest", "http://static.drips.pw/rotmg/wiki/Skins/Robed Priest.png"),
	new Item("Robin Hood", "http://static.drips.pw/rotmg/wiki/Skins/Robin Hood.png"),
	new Item("Romeo", "http://static.drips.pw/rotmg/wiki/Skins/Romeo.png"),
	new Item("Rudolph the Berzerk", "http://static.drips.pw/rotmg/wiki/Skins/Rudolph the Berzerk.png"),
	new Item("Santa", "http://static.drips.pw/rotmg/wiki/Skins/Santa.png"),
	new Item("Scarlett", "http://static.drips.pw/rotmg/wiki/Skins/Scarlett.png"),
	new Item("Seer", "http://static.drips.pw/rotmg/wiki/Skins/Seer.png"),
	new Item("Shadow", "http://static.drips.pw/rotmg/wiki/Skins/Shadow.png"),
	new Item("Sheep Archer", "http://static.drips.pw/rotmg/wiki/Skins/Sheep Archer.png"),
	new Item("Sheep Priest", "http://static.drips.pw/rotmg/wiki/Skins/Sheep Priest.png"),
	new Item("Sheep Rogue", "http://static.drips.pw/rotmg/wiki/Skins/Sheep Rogue.png"),
	new Item("Sheep Warrior", "http://static.drips.pw/rotmg/wiki/Skins/Sheep Warrior.png"),
	new Item("Sheep Wizard", "http://static.drips.pw/rotmg/wiki/Skins/Sheep Wizard.png"),
	new Item("Shoveguy", "http://static.drips.pw/rotmg/wiki/Skins/Shoveguy.png"),
	new Item("Skeleton Warrior", "http://static.drips.pw/rotmg/wiki/Skins/Skeleton Warrior.png"),
	new Item("Slime Archer", "http://static.drips.pw/rotmg/wiki/Skins/Slime Archer.png"),
	new Item("Slime Assassin", "http://static.drips.pw/rotmg/wiki/Skins/Slime Assassin.png"),
	new Item("Slime Huntress", "http://static.drips.pw/rotmg/wiki/Skins/Slime Huntress.png"),
	new Item("Slime Knight", "http://static.drips.pw/rotmg/wiki/Skins/Slime Knight.png"),
	new Item("Slime Mystic", "http://static.drips.pw/rotmg/wiki/Skins/Slime Mystic.png"),
	new Item("Slime Necromancer", "http://static.drips.pw/rotmg/wiki/Skins/Slime Necromancer.png"),
	new Item("Slime Ninja", "http://static.drips.pw/rotmg/wiki/Skins/Slime Ninja.png"),
	new Item("Slime Paladin", "http://static.drips.pw/rotmg/wiki/Skins/Slime Paladin.png"),
	new Item("Slime Priest", "http://static.drips.pw/rotmg/wiki/Skins/Slime Priest.png"),
	new Item("Slime Rogue", "http://static.drips.pw/rotmg/wiki/Skins/Slime Rogue.png"),
	new Item("Slime Sorcerer", "http://static.drips.pw/rotmg/wiki/Skins/Slime Sorcerer.png"),
	new Item("Slime Trickster", "http://static.drips.pw/rotmg/wiki/Skins/Slime Trickster.png"),
	new Item("Slime Warrior", "http://static.drips.pw/rotmg/wiki/Skins/Slime Warrior.png"),
	new Item("Slime Wizard", "http://static.drips.pw/rotmg/wiki/Skins/Slime Wizard.png"),
	new Item("Slurp Knight", "http://static.drips.pw/rotmg/wiki/Skins/Slurp Knight.png"),
	new Item("Snow Queen", "http://static.drips.pw/rotmg/wiki/Skins/Snow Queen.png"),
	new Item("Snowcloaked Rogue", "http://static.drips.pw/rotmg/wiki/Skins/Snowcloaked Rogue.png"),
	new Item("Sorceress", "http://static.drips.pw/rotmg/wiki/Skins/Sorceress.png"),
	new Item("Stanley the Spring Bunny", "http://static.drips.pw/rotmg/wiki/Skins/Stanley the Spring Bunny.png"),
	new Item("Stealth", "http://static.drips.pw/rotmg/wiki/Skins/Stealth.png"),
	new Item("The Flamingo", "http://static.drips.pw/rotmg/wiki/Skins/The Flamingo.png"),
	new Item("Tiny Avatar", "http://static.drips.pw/rotmg/wiki/Skins/Tiny Avatar.png"),
	new Item("Traditional", "http://static.drips.pw/rotmg/wiki/Skins/Traditional.png"),
	new Item("Vampire Hunter", "http://static.drips.pw/rotmg/wiki/Skins/Vampire Hunter.png"),
	new Item("Vampire Lord", "http://static.drips.pw/rotmg/wiki/Skins/Vampire Lord.png"),
	new Item("Vampiress", "http://static.drips.pw/rotmg/wiki/Skins/Vampiress.png"),
	new Item("Warlock", "http://static.drips.pw/rotmg/wiki/Skins/Warlock.png"),
	new Item("Wind Flower Ninja", "http://static.drips.pw/rotmg/wiki/Skins/Wind Flower Ninja.png"),
	new Item("Witch Doctor", "http://static.drips.pw/rotmg/wiki/Skins/Witch Doctor.png"),
	new Item("Witch", "http://static.drips.pw/rotmg/wiki/Skins/Witch.png"),
	new Item("Wizard Supreme", "http://static.drips.pw/rotmg/wiki/Skins/Wizard Supreme.png"),
	new Item("Yuki Onna Mystic", "http://static.drips.pw/rotmg/wiki/Skins/Yuki Onna Mystic.png"),
	new Item("Zombie Nurse", "http://static.drips.pw/rotmg/wiki/Skins/Zombie Nurse.png"),

	
	// dyes
	/*new Item("Alice Blue Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Alice Blue Accessory Dye.png"),
	new Item("Alice Blue Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Alice Blue Clothing Dye.png"),
	new Item("Antique White Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Antique White Accessory Dye.png"),
	new Item("Antique White Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Antique White Clothing Dye.png"),
	new Item("Aqua Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Aqua Accessory Dye.png"),
	new Item("Aqua Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Aqua Clothing Dye.png"),
	new Item("Aquamarine Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Aquamarine Accessory Dye.png"),
	new Item("Aquamarine Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Aquamarine Clothing Dye.png"),
	new Item("Azure Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Azure Accessory Dye.png"),
	new Item("Azure Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Azure Clothing Dye.png"),
	new Item("Beige Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Beige Accessory Dye.png"),
	new Item("Beige Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Beige Clothing Dye.png"),
	new Item("Bisque Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Bisque Accessory Dye.png"),
	new Item("Bisque Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Bisque Clothing Dye.png"),
	new Item("Black Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Black Accessory Dye.png"),
	new Item("Black Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Black Clothing Dye.png"),
	new Item("Blanched Almond Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Blanched Almond Accessory Dye.png"),
	new Item("Blanched Almond Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Blanched Almond Clothing Dye.png"),
	new Item("Blue Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Blue Accessory Dye.png"),
	new Item("Blue Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Blue Clothing Dye.png"),
	new Item("Blue Violet Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Blue Violet Accessory Dye.png"),
	new Item("Blue Violet Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Blue Violet Clothing Dye.png"),
	new Item("Brown Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Brown Accessory Dye.png"),
	new Item("Brown Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Brown Clothing Dye.png"),
	new Item("Burly Wood Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Burly Wood Accessory Dye.png"),
	new Item("Burly Wood Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Burly Wood Clothing Dye.png"),
	new Item("Cadet Blue Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Cadet Blue Accessory Dye.png"),
	new Item("Cadet Blue Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Cadet Blue Clothing Dye.png"),
	new Item("Chartreuse Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Chartreuse Accessory Dye.png"),
	new Item("Chartreuse Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Chartreuse Clothing Dye.png"),
	new Item("Chocolate Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Chocolate Accessory Dye.png"),
	new Item("Chocolate Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Chocolate Clothing Dye.png"),
	new Item("Coral Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Coral Accessory Dye.png"),
	new Item("Coral Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Coral Clothing Dye.png"),
	new Item("Cornflower Blue Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Cornflower Blue Accessory Dye.png"),
	new Item("Cornflower Blue Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Cornflower Blue Clothing Dye.png"),
	new Item("Cornsilk Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Cornsilk Accessory Dye.png"),
	new Item("Cornsilk Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Cornsilk Clothing Dye.png"),
	new Item("Crimson Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Crimson Accessory Dye.png"),
	new Item("Crimson Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Crimson Clothing Dye.png"),
	new Item("Cyan Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Cyan Accessory Dye.png"),
	new Item("Cyan Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Cyan Clothing Dye.png"),
	new Item("Dark Blue Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Blue Accessory Dye.png"),
	new Item("Dark Blue Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Blue Clothing Dye.png"),
	new Item("Dark Cyan Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Cyan Accessory Dye.png"),
	new Item("Dark Cyan Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Cyan Clothing Dye.png"),
	new Item("Dark Golden Rod Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Golden Rod Accessory Dye.png"),
	new Item("Dark Golden Rod Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Golden Rod Clothing Dye.png"),
	new Item("Dark Gray Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Gray Accessory Dye.png"),
	new Item("Dark Gray Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Gray Clothing Dye.png"),
	new Item("Dark Green Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Green Accessory Dye.png"),
	new Item("Dark Green Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Green Clothing Dye.png"),
	new Item("Dark Khaki Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Khaki Accessory Dye.png"),
	new Item("Dark Khaki Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Khaki Clothing Dye.png"),
	new Item("Dark Magenta Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Magenta Accessory Dye.png"),
	new Item("Dark Magenta Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Magenta Clothing Dye.png"),
	new Item("Dark Olive Green Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Olive Green Accessory Dye.png"),
	new Item("Dark Olive Green Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Olive Green Clothing Dye.png"),
	new Item("Dark Orange Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Orange Accessory Dye.png"),
	new Item("Dark Orange Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Orange Clothing Dye.png"),
	new Item("Dark Orchid Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Orchid Accessory Dye.png"),
	new Item("Dark Orchid Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Orchid Clothing Dye.png"),
	new Item("Dark Red Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Red Accessory Dye.png"),
	new Item("Dark Red Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Red Clothing Dye.png"),
	new Item("Dark Salmon Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Salmon Accessory Dye.png"),
	new Item("Dark Salmon Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Salmon Clothing Dye.png"),
	new Item("Dark Sea Green Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Sea Green Accessory Dye.png"),
	new Item("Dark Sea Green Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Sea Green Clothing Dye.png"),
	new Item("Dark Slate Blue Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Slate Blue Accessory Dye.png"),
	new Item("Dark Slate Blue Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Slate Blue Clothing Dye.png"),
	new Item("Dark Slate Gray Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Slate Gray Accessory Dye.png"),
	new Item("Dark Slate Gray Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Slate Gray Clothing Dye.png"),
	new Item("Dark Turquoise Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Turquoise Accessory Dye.png"),
	new Item("Dark Turquoise Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Turquoise Clothing Dye.png"),
	new Item("Dark Violet Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Violet Accessory Dye.png"),
	new Item("Dark Violet Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dark Violet Clothing Dye.png"),
	new Item("Deep Pink Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Deep Pink Accessory Dye.png"),
	new Item("Deep Pink Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Deep Pink Clothing Dye.png"),
	new Item("Deep Sky Blue Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Deep Sky Blue Accessory Dye.png"),
	new Item("Deep Sky Blue Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Deep Sky Blue Clothing Dye.png"),
	new Item("Dim Gray Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dim Gray Accessory Dye.png"),
	new Item("Dim Gray Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dim Gray Clothing Dye.png"),
	new Item("Dodger Blue Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dodger Blue Accessory Dye.png"),
	new Item("Dodger Blue Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Dodger Blue Clothing Dye.png"),
	new Item("Fire Brick Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Fire Brick Accessory Dye.png"),
	new Item("Fire Brick Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Fire Brick Clothing Dye.png"),
	new Item("Floral White Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Floral White Accessory Dye.png"),
	new Item("Floral White Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Floral White Clothing Dye.png"),
	new Item("Forest Green Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Forest Green Accessory Dye.png"),
	new Item("Forest Green Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Forest Green Clothing Dye.png"),
	new Item("Fuchsia Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Fuchsia Accessory Dye.png"),
	new Item("Fuchsia Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Fuchsia Clothing Dye.png"),
	new Item("Gainsboro Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Gainsboro Accessory Dye.png"),
	new Item("Gainsboro Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Gainsboro Clothing Dye.png"),
	new Item("Ghost White Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Ghost White Accessory Dye.png"),
	new Item("Ghost White Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Ghost White Clothing Dye.png"),
	new Item("Gold Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Gold Accessory Dye.png"),
	new Item("Gold Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Gold Clothing Dye.png"),
	new Item("Golden Rod Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Golden Rod Accessory Dye.png"),
	new Item("Golden Rod Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Golden Rod Clothing Dye.png"),
	new Item("Gray Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Gray Accessory Dye.png"),
	new Item("Gray Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Gray Clothing Dye.png"),
	new Item("Green Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Green Accessory Dye.png"),
	new Item("Green Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Green Clothing Dye.png"),
	new Item("Green Yellow Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Green Yellow Accessory Dye.png"),
	new Item("Green Yellow Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Green Yellow Clothing Dye.png"),
	new Item("Honey Dew Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Honey Dew Accessory Dye.png"),
	new Item("Honey Dew Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Honey Dew Clothing Dye.png"),
	new Item("Hot Pink Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Hot Pink Accessory Dye.png"),
	new Item("Hot Pink Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Hot Pink Clothing Dye.png"),
	new Item("Indian Red Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Indian Red Accessory Dye.png"),
	new Item("Indian Red Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Indian Red Clothing Dye.png"),
	new Item("Indigo Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Indigo Accessory Dye.png"),
	new Item("Indigo Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Indigo Clothing Dye.png"),
	new Item("Ivory Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Ivory Accessory Dye.png"),
	new Item("Ivory Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Ivory Clothing Dye.png"),
	new Item("Khaki Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Khaki Accessory Dye.png"),
	new Item("Khaki Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Khaki Clothing Dye.png"),
	new Item("Large Alchemist Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Alchemist Cloth.png"),
	new Item("Large American Flag Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large American Flag Cloth.png"),
	new Item("Large Bee Stripe Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Bee Stripe Cloth.png"),
	new Item("Large Big-Stripe Blue Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Big-Stripe Blue Cloth.png"),
	new Item("Large Big-Stripe Red Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Big-Stripe Red Cloth.png"),
	new Item("Large Black Striped Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Black Striped Cloth.png"),
	new Item("Large Blue Camo Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Blue Camo Cloth.png"),
	new Item("Large Blue Dragon Scale Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Blue Dragon Scale Cloth.png"),
	new Item("Large Blue Fireworks Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Blue Fireworks Cloth.png"),
	new Item("Large Blue Lace Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Blue Lace Cloth.png"),
	new Item("Large Blue Point Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Blue Point Cloth.png"),
	new Item("Large Blue Striped Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Blue Striped Cloth.png"),
	new Item("Large Blue USA Star Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Blue USA Star Cloth.png"),
	new Item("Large Blue Wave Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Blue Wave Cloth.png"),
	new Item("Large Bold Diamond Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Bold Diamond Cloth.png"),
	new Item("Large Bright Floral Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Bright Floral Cloth.png"),
	new Item("Large Bright Stripes Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Bright Stripes Cloth.png"),
	new Item("Large Brown Lined Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Brown Lined Cloth.png"),
	new Item("Large Brown Stitch Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Brown Stitch Cloth.png"),
	new Item("Large Cactus Zag Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Cactus Zag Cloth.png"),
	new Item("Large Celtic Knot Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Celtic Knot Cloth.png"),
	new Item("Large Chainmail Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Chainmail Cloth.png"),
	new Item("Large Clanranald Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Clanranald Cloth.png"),
	new Item("Large Cloud Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Cloud Cloth.png"),
	new Item("Large Colored Egg Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Colored Egg Cloth.png"),
	new Item("Large Cow Print Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Cow Print Cloth.png"),
	new Item("Large Crisscross Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Crisscross Cloth.png"),
	new Item("Large Crossbox Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Crossbox Cloth.png"),
	new Item("Large Dark Blue Stripe Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Dark Blue Stripe Cloth.png"),
	new Item("Large Dark Camo Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Dark Camo Cloth.png"),
	new Item("Large Dark Eyes Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Dark Eyes Cloth.png"),
	new Item("Large Diamond Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Diamond Cloth.png"),
	new Item("Large Egyptian Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Egyptian Cloth.png"),
	new Item("Large Egyption Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Egyption Cloth.png"),
	new Item("Large Flame Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Flame Cloth.png"),
	new Item("Large Flannel Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Flannel Cloth.png"),
	new Item("Large Floral Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Floral Cloth.png"),
	new Item("Large Futuristic Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Futuristic Cloth.png"),
	new Item("Large Glowthread Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Glowthread Cloth.png"),
	new Item("Large Green Dragon Scale Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Green Dragon Scale Cloth.png"),
	new Item("Large Green Weave Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Green Weave Cloth.png"),
	new Item("Large Grey Scaly Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Grey Scaly Cloth.png"),
	new Item("Large Heart Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Heart Cloth.png"),
	new Item("Large Heavy Chainmail Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Heavy Chainmail Cloth.png"),
	new Item("Large Hibiscus Beach Wrap Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Hibiscus Beach Wrap Cloth.png"),
	new Item("Large Intense Clovers Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Intense Clovers Cloth.png"),
	new Item("Large Ivory Dragon Scale Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Ivory Dragon Scale Cloth.png"),
	new Item("Large Jester Argyle Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Jester Argyle Cloth.png"),
	new Item("Large Jester Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Jester Cloth.png"),
	new Item("Large Lemon-Lime Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Lemon-Lime Cloth.png"),
	new Item("Large Leopard Print Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Leopard Print Cloth.png"),
	new Item("Large Loud Spotted Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Loud Spotted Cloth.png"),
	new Item("Large Lush Camo Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Lush Camo Cloth.png"),
	new Item("Large Midnight Dragon Scale Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Midnight Dragon Scale Cloth.png"),
	new Item("Large Mosaic Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Mosaic Cloth.png"),
	new Item("Large Nautical Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Nautical Cloth.png"),
	new Item("Large Party Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Party Cloth.png"),
	new Item("Large Pink Dot Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Pink Dot Cloth.png"),
	new Item("Large Pink Maze Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Pink Maze Cloth.png"),
	new Item("Large Pink Sparkly Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Pink Sparkly Cloth.png"),
	new Item("Large Plaid Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Plaid Cloth.png"),
	new Item("Large Purple Bones Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Purple Bones Cloth.png"),
	new Item("Large Purple Pinstripe Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Purple Pinstripe Cloth.png"),
	new Item("Large Purple Stripes Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Purple Stripes Cloth.png"),
	new Item("Large Rainbow Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Rainbow Cloth.png"),
	new Item("Large Red Diamond Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Red Diamond Cloth.png"),
	new Item("Large Red Dragon Scale Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Red Dragon Scale Cloth.png"),
	new Item("Large Red Lace Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Red Lace Cloth.png"),
	new Item("Large Red Spotted Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Red Spotted Cloth.png"),
	new Item("Large Red USA Star Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Red USA Star Cloth.png"),
	new Item("Large Red Weft Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Red Weft Cloth.png"),
	new Item("Large Relief Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Relief Cloth.png"),
	new Item("Large Robber Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Robber Cloth.png"),
	new Item("Large Shamrock Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Shamrock Cloth.png"),
	new Item("Large Skull Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Skull Cloth.png"),
	new Item("Large Smiley Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Smiley Cloth.png"),
	new Item("Large Spooky Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Spooky Cloth.png"),
	new Item("Large Spring Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Spring Cloth.png"),
	new Item("Large Starry Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Starry Cloth.png"),
	new Item("Large Starry Night Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Starry Night Cloth.png"),
	new Item("Large Stony Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Stony Cloth.png"),
	new Item("Large Sunburst Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Sunburst Cloth.png"),
	new Item("Large Sweater Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Sweater Cloth.png"),
	new Item("Large Tan Diamond Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Tan Diamond Cloth.png"),
	new Item("Large Teal Crystal Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Teal Crystal Cloth.png"),
	new Item("Large USA Flag Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large USA Flag Cloth.png"),
	new Item("Large USA Star Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large USA Star Cloth.png"),
	new Item("Large Vine Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Vine Cloth.png"),
	new Item("Large Viva Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Viva Cloth.png"),
	new Item("Large Western Stripe Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Western Stripe Cloth.png"),
	new Item("Large White Diamond Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large White Diamond Cloth.png"),
	new Item("Large Wind Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Wind Cloth.png"),
	new Item("Large Yellow Dot Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Yellow Dot Cloth.png"),
	new Item("Large Yellow Wire Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Yellow Wire Cloth.png"),
	new Item("Large Zebra Print Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Large Zebra Print Cloth.png"),
	new Item("Lavender Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Lavender Accessory Dye.png"),
	new Item("Lavender Blush Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Lavender Blush Accessory Dye.png"),
	new Item("Lavender Blush Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Lavender Blush Clothing Dye.png"),
	new Item("Lavender Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Lavender Clothing Dye.png"),
	new Item("Lawn Green Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Lawn Green Accessory Dye.png"),
	new Item("Lawn Green Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Lawn Green Clothing Dye.png"),
	new Item("Lemon Chiffon Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Lemon Chiffon Accessory Dye.png"),
	new Item("Lemon Chiffon Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Lemon Chiffon Clothing Dye.png"),
	new Item("Light Blue Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Blue Accessory Dye.png"),
	new Item("Light Blue Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Blue Clothing Dye.png"),
	new Item("Light Coral Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Coral Accessory Dye.png"),
	new Item("Light Coral Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Coral Clothing Dye.png"),
	new Item("Light Cyan Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Cyan Accessory Dye.png"),
	new Item("Light Cyan Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Cyan Clothing Dye.png"),
	new Item("Light Golden Rod Yellow Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Golden Rod Yellow Accessory Dye.png"),
	new Item("Light Golden Rod Yellow Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Golden Rod Yellow Clothing Dye.png"),
	new Item("Light Green Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Green Accessory Dye.png"),
	new Item("Light Green Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Green Clothing Dye.png"),
	new Item("Light Grey Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Grey Accessory Dye.png"),
	new Item("Light Grey Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Grey Clothing Dye.png"),
	new Item("Light Pink Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Pink Accessory Dye.png"),
	new Item("Light Pink Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Pink Clothing Dye.png"),
	new Item("Light Salmon Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Salmon Accessory Dye.png"),
	new Item("Light Salmon Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Salmon Clothing Dye.png"),
	new Item("Light Sea Green Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Sea Green Accessory Dye.png"),
	new Item("Light Sea Green Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Sea Green Clothing Dye.png"),
	new Item("Light Sky Blue Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Sky Blue Accessory Dye.png"),
	new Item("Light Sky Blue Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Sky Blue Clothing Dye.png"),
	new Item("Light Slate Gray Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Slate Gray Accessory Dye.png"),
	new Item("Light Slate Gray Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Slate Gray Clothing Dye.png"),
	new Item("Light Steel Blue Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Steel Blue Accessory Dye.png"),
	new Item("Light Steel Blue Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Steel Blue Clothing Dye.png"),
	new Item("Light Yellow Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Yellow Accessory Dye.png"),
	new Item("Light Yellow Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Light Yellow Clothing Dye.png"),
	new Item("Lime Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Lime Accessory Dye.png"),
	new Item("Lime Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Lime Clothing Dye.png"),
	new Item("Lime Green Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Lime Green Accessory Dye.png"),
	new Item("Lime Green Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Lime Green Clothing Dye.png"),
	new Item("Linen Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Linen Accessory Dye.png"),
	new Item("Linen Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Linen Clothing Dye.png"),
	new Item("Magenta Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Magenta Accessory Dye.png"),
	new Item("Magenta Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Magenta Clothing Dye.png"),
	new Item("Maroon Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Maroon Accessory Dye.png"),
	new Item("Maroon Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Maroon Clothing Dye.png"),
	new Item("Medium Aqua Marine Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Medium Aqua Marine Accessory Dye.png"),
	new Item("Medium Aqua Marine Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Medium Aqua Marine Clothing Dye.png"),
	new Item("Medium Blue Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Medium Blue Accessory Dye.png"),
	new Item("Medium Blue Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Medium Blue Clothing Dye.png"),
	new Item("Medium Orchid Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Medium Orchid Accessory Dye.png"),
	new Item("Medium Orchid Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Medium Orchid Clothing Dye.png"),
	new Item("Medium Purple Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Medium Purple Accessory Dye.png"),
	new Item("Medium Purple Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Medium Purple Clothing Dye.png"),
	new Item("Medium Sea Green Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Medium Sea Green Accessory Dye.png"),
	new Item("Medium Sea Green Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Medium Sea Green Clothing Dye.png"),
	new Item("Medium Slate Blue Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Medium Slate Blue Accessory Dye.png"),
	new Item("Medium Slate Blue Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Medium Slate Blue Clothing Dye.png"),
	new Item("Medium Spring Green Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Medium Spring Green Accessory Dye.png"),
	new Item("Medium Spring Green Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Medium Spring Green Clothing Dye.png"),
	new Item("Medium Turquoise Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Medium Turquoise Accessory Dye.png"),
	new Item("Medium Turquoise Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Medium Turquoise Clothing Dye.png"),
	new Item("Medium Violet Red Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Medium Violet Red Accessory Dye.png"),
	new Item("Medium Violet Red Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Medium Violet Red Clothing Dye.png"),
	new Item("Midnight Blue Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Midnight Blue Accessory Dye.png"),
	new Item("Midnight Blue Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Midnight Blue Clothing Dye.png"),
	new Item("Mint Cream Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Mint Cream Accessory Dye.png"),
	new Item("Mint Cream Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Mint Cream Clothing Dye.png"),
	new Item("Misty Rose Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Misty Rose Accessory Dye.png"),
	new Item("Misty Rose Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Misty Rose Clothing Dye.png"),
	new Item("Moccasin Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Moccasin Accessory Dye.png"),
	new Item("Moccasin Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Moccasin Clothing Dye.png"),
	new Item("Navajo White Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Navajo White Accessory Dye.png"),
	new Item("Navajo White Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Navajo White Clothing Dye.png"),
	new Item("Navy Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Navy Accessory Dye.png"),
	new Item("Navy Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Navy Clothing Dye.png"),
	new Item("Old Lace Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Old Lace Accessory Dye.png"),
	new Item("Old Lace Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Old Lace Clothing Dye.png"),
	new Item("Olive Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Olive Accessory Dye.png"),
	new Item("Olive Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Olive Clothing Dye.png"),
	new Item("Olive Drab Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Olive Drab Accessory Dye.png"),
	new Item("Olive Drab Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Olive Drab Clothing Dye.png"),
	new Item("Orange Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Orange Accessory Dye.png"),
	new Item("Orange Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Orange Clothing Dye.png"),
	new Item("Orange Red Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Orange Red Accessory Dye.png"),
	new Item("Orange Red Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Orange Red Clothing Dye.png"),
	new Item("Orchid Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Orchid Accessory Dye.png"),
	new Item("Orchid Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Orchid Clothing Dye.png"),
	new Item("Pale Golden Rod Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Pale Golden Rod Accessory Dye.png"),
	new Item("Pale Golden Rod Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Pale Golden Rod Clothing Dye.png"),
	new Item("Pale Green Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Pale Green Accessory Dye.png"),
	new Item("Pale Green Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Pale Green Clothing Dye.png"),
	new Item("Pale Turquoise Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Pale Turquoise Accessory Dye.png"),
	new Item("Pale Turquoise Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Pale Turquoise Clothing Dye.png"),
	new Item("Pale Violet Red Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Pale Violet Red Accessory Dye.png"),
	new Item("Pale Violet Red Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Pale Violet Red Clothing Dye.png"),
	new Item("Papaya Whip Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Papaya Whip Accessory Dye.png"),
	new Item("Papaya Whip Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Papaya Whip Clothing Dye.png"),
	new Item("Peach Puff Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Peach Puff Accessory Dye.png"),
	new Item("Peach Puff Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Peach Puff Clothing Dye.png"),
	new Item("Peru Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Peru Accessory Dye.png"),
	new Item("Peru Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Peru Clothing Dye.png"),
	new Item("Pink Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Pink Accessory Dye.png"),
	new Item("Pink Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Pink Clothing Dye.png"),
	new Item("Plum Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Plum Accessory Dye.png"),
	new Item("Plum Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Plum Clothing Dye.png"),
	new Item("Powder Blue Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Powder Blue Accessory Dye.png"),
	new Item("Powder Blue Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Powder Blue Clothing Dye.png"),
	new Item("Purple Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Purple Accessory Dye.png"),
	new Item("Purple Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Purple Clothing Dye.png"),
	new Item("Red Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Red Accessory Dye.png"),
	new Item("Red Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Red Clothing Dye.png"),
	new Item("Rosy Brown Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Rosy Brown Accessory Dye.png"),
	new Item("Rosy Brown Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Rosy Brown Clothing Dye.png"),
	new Item("Royal Blue Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Royal Blue Accessory Dye.png"),
	new Item("Royal Blue Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Royal Blue Clothing Dye.png"),
	new Item("Saddle Brown Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Saddle Brown Accessory Dye.png"),
	new Item("Saddle Brown Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Saddle Brown Clothing Dye.png"),
	new Item("Salmon Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Salmon Accessory Dye.png"),
	new Item("Salmon Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Salmon Clothing Dye.png"),
	new Item("Sandy Brown Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Sandy Brown Accessory Dye.png"),
	new Item("Sandy Brown Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Sandy Brown Clothing Dye.png"),
	new Item("Sea Green Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Sea Green Accessory Dye.png"),
	new Item("Sea Green Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Sea Green Clothing Dye.png"),
	new Item("Sea Shell Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Sea Shell Accessory Dye.png"),
	new Item("Sea Shell Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Sea Shell Clothing Dye.png"),
	new Item("Sienna Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Sienna Accessory Dye.png"),
	new Item("Sienna Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Sienna Clothing Dye.png"),
	new Item("Silver Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Silver Accessory Dye.png"),
	new Item("Silver Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Silver Clothing Dye.png"),
	new Item("Sky Blue Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Sky Blue Accessory Dye.png"),
	new Item("Sky Blue Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Sky Blue Clothing Dye.png"),
	new Item("Slate Blue Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Slate Blue Accessory Dye.png"),
	new Item("Slate Blue Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Slate Blue Clothing Dye.png"),
	new Item("Slate Gray Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Slate Gray Accessory Dye.png"),
	new Item("Slate Gray Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Slate Gray Clothing Dye.png"),
	new Item("Small Alchemist Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Alchemist Cloth.png"),
	new Item("Small American Flag Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small American Flag Cloth.png"),
	new Item("Small Bee Stripe Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Bee Stripe Cloth.png"),
	new Item("Small Big-Stripe Blue Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Big-Stripe Blue Cloth.png"),
	new Item("Small Big-Stripe Red Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Big-Stripe Red Cloth.png"),
	new Item("Small Black Striped Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Black Striped Cloth.png"),
	new Item("Small Blue Camo Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Blue Camo Cloth.png"),
	new Item("Small Blue Dragon Scale Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Blue Dragon Scale Cloth.png"),
	new Item("Small Blue Fireworks Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Blue Fireworks Cloth.png"),
	new Item("Small Blue Lace Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Blue Lace Cloth.png"),
	new Item("Small Blue Point Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Blue Point Cloth.png"),
	new Item("Small Blue Striped Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Blue Striped Cloth.png"),
	new Item("Small Blue USA Star Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Blue USA Star Cloth.png"),
	new Item("Small Blue Wave Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Blue Wave Cloth.png"),
	new Item("Small Bold Diamond Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Bold Diamond Cloth.png"),
	new Item("Small Bright Floral Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Bright Floral Cloth.png"),
	new Item("Small Bright Stripes Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Bright Stripes Cloth.png"),
	new Item("Small Brown Lined Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Brown Lined Cloth.png"),
	new Item("Small Brown Stitch Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Brown Stitch Cloth.png"),
	new Item("Small Cactus Zag Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Cactus Zag Cloth.png"),
	new Item("Small Celtic Knot Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Celtic Knot Cloth.png"),
	new Item("Small Chainmail Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Chainmail Cloth.png"),
	new Item("Small Clanranald Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Clanranald Cloth.png"),
	new Item("Small Cloud Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Cloud Cloth.png"),
	new Item("Small Colored Egg Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Colored Egg Cloth.png"),
	new Item("Small Cow Print Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Cow Print Cloth.png"),
	new Item("Small Crisscross Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Crisscross Cloth.png"),
	new Item("Small Crossbox Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Crossbox Cloth.png"),
	new Item("Small Dark Blue Stripe Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Dark Blue Stripe Cloth.png"),
	new Item("Small Dark Camo Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Dark Camo Cloth.png"),
	new Item("Small Dark Eyes Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Dark Eyes Cloth.png"),
	new Item("Small Diamond Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Diamond Cloth.png"),
	new Item("Small Egyptian Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Egyptian Cloth.png"),
	new Item("Small Egyption Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Egyption Cloth.png"),
	new Item("Small Flame Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Flame Cloth.png"),
	new Item("Small Flannel Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Flannel Cloth.png"),
	new Item("Small Floral Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Floral Cloth.png"),
	new Item("Small Futuristic Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Futuristic Cloth.png"),
	new Item("Small Glowthread Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Glowthread Cloth.png"),
	new Item("Small Green Dragon Scale Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Green Dragon Scale Cloth.png"),
	new Item("Small Green Weave Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Green Weave Cloth.png"),
	new Item("Small Grey Scaly Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Grey Scaly Cloth.png"),
	new Item("Small Heart Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Heart Cloth.png"),
	new Item("Small Heavy Chainmail Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Heavy Chainmail Cloth.png"),
	new Item("Small Hibiscus Beach Wrap Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Hibiscus Beach Wrap Cloth.png"),
	new Item("Small Intense Clovers Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Intense Clovers Cloth.png"),
	new Item("Small Ivory Dragon Scale Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Ivory Dragon Scale Cloth.png"),
	new Item("Small Jester Argyle Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Jester Argyle Cloth.png"),
	new Item("Small Jester Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Jester Cloth.png"),
	new Item("Small Lemon-Lime Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Lemon-Lime Cloth.png"),
	new Item("Small Leopard Print Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Leopard Print Cloth.png"),
	new Item("Small Loud Spotted Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Loud Spotted Cloth.png"),
	new Item("Small Lush Camo Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Lush Camo Cloth.png"),
	new Item("Small Midnight Dragon Scale Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Midnight Dragon Scale Cloth.png"),
	new Item("Small Mosaic Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Mosaic Cloth.png"),
	new Item("Small Nautical Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Nautical Cloth.png"),
	new Item("Small Party Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Party Cloth.png"),
	new Item("Small Pink Dot Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Pink Dot Cloth.png"),
	new Item("Small Pink Maze Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Pink Maze Cloth.png"),
	new Item("Small Pink Sparkly Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Pink Sparkly Cloth.png"),
	new Item("Small Plaid Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Plaid Cloth.png"),
	new Item("Small Purple Bones Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Purple Bones Cloth.png"),
	new Item("Small Purple Pinstripe Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Purple Pinstripe Cloth.png"),
	new Item("Small Purple Stripes Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Purple Stripes Cloth.png"),
	new Item("Small Rainbow Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Rainbow Cloth.png"),
	new Item("Small Red Diamond Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Red Diamond Cloth.png"),
	new Item("Small Red Dragon Scale Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Red Dragon Scale Cloth.png"),
	new Item("Small Red Lace Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Red Lace Cloth.png"),
	new Item("Small Red Spotted Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Red Spotted Cloth.png"),
	new Item("Small Red USA Star Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Red USA Star Cloth.png"),
	new Item("Small Red Weft Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Red Weft Cloth.png"),
	new Item("Small Relief Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Relief Cloth.png"),
	new Item("Small Robber Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Robber Cloth.png"),
	new Item("Small Shamrock Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Shamrock Cloth.png"),
	new Item("Small Skull Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Skull Cloth.png"),
	new Item("Small Smiley Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Smiley Cloth.png"),
	new Item("Small Spooky Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Spooky Cloth.png"),
	new Item("Small Spring Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Spring Cloth.png"),
	new Item("Small Starry Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Starry Cloth.png"),
	new Item("Small Starry Night Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Starry Night Cloth.png"),
	new Item("Small Stony Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Stony Cloth.png"),
	new Item("Small Sunburst Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Sunburst Cloth.png"),
	new Item("Small Sweater Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Sweater Cloth.png"),
	new Item("Small Tan Diamond Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Tan Diamond Cloth.png"),
	new Item("Small Teal Crystal Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Teal Crystal Cloth.png"),
	new Item("Small USA Flag Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small USA Flag Cloth.png"),
	new Item("Small USA Star Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small USA Star Cloth.png"),
	new Item("Small Vine Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Vine Cloth.png"),
	new Item("Small Viva Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Viva Cloth.png"),
	new Item("Small Western Stripe Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Western Stripe Cloth.png"),
	new Item("Small White Diamond Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small White Diamond Cloth.png"),
	new Item("Small Wind Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Wind Cloth.png"),
	new Item("Small Yellow Dot Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Yellow Dot Cloth.png"),
	new Item("Small Yellow Wire Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Yellow Wire Cloth.png"),
	new Item("Small Zebra Print Cloth", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Small Zebra Print Cloth.png"),
	new Item("Snow Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Snow Accessory Dye.png"),
	new Item("Snow Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Snow Clothing Dye.png"),
	new Item("Spring Green Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Spring Green Accessory Dye.png"),
	new Item("Spring Green Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Spring Green Clothing Dye.png"),
	new Item("St Patrick's Green Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/St Patrick's Green Accessory Dye.png"),
	new Item("St Patrick's Green Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/St Patrick's Green Clothing Dye.png"),
	new Item("Steel Blue Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Steel Blue Accessory Dye.png"),
	new Item("Steel Blue Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Steel Blue Clothing Dye.png"),
	new Item("Tan Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Tan Accessory Dye.png"),
	new Item("Tan Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Tan Clothing Dye.png"),
	new Item("Teal Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Teal Accessory Dye.png"),
	new Item("Teal Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Teal Clothing Dye.png"),
	new Item("Thistle Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Thistle Accessory Dye.png"),
	new Item("Thistle Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Thistle Clothing Dye.png"),
	new Item("Tomato Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Tomato Accessory Dye.png"),
	new Item("Tomato Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Tomato Clothing Dye.png"),
	new Item("Turquoise Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Turquoise Accessory Dye.png"),
	new Item("Turquoise Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Turquoise Clothing Dye.png"),
	new Item("Violet Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Violet Accessory Dye.png"),
	new Item("Violet Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Violet Clothing Dye.png"),
	new Item("Wheat Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Wheat Accessory Dye.png"),
	new Item("Wheat Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Wheat Clothing Dye.png"),
	new Item("White Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/White Accessory Dye.png"),
	new Item("White Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/White Clothing Dye.png"),
	new Item("White Smoke Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/White Smoke Accessory Dye.png"),
	new Item("White Smoke Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/White Smoke Clothing Dye.png"),
	new Item("Yellow Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Yellow Accessory Dye.png"),
	new Item("Yellow Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Yellow Clothing Dye.png"),
	new Item("Yellow Green Accessory Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Yellow Green Accessory Dye.png"),
	new Item("Yellow Green Clothing Dye", "http://static.drips.pw/rotmg/wiki/Consumable/Dyes/Yellow Green Clothing Dye.png"),
	*/
 
 ];
 
 var items = [
	new Item("Shaitan's Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Shaitan's Key.png"),
	new Item("Shatters Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Shatters Key.png"),
	new Item("Snake Pit Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Snake Pit Key.png"),
	new Item("Spider Den Key", "http://static.drips.pw/rotmg/wiki/Consumable/Keys/Spider Den Key.png"),
	
 ];
 
 function setTitle(title) {
	get("title").innerHTML = title;
 }
 
 function toggle(elementId) {
	get(elementId).classList.toggle("hide");
 }
 
 function get(elementId) {
	return document.getElementById(elementId);
 }
 
 function reset(id) {
	get(id).innerHTML = "";
	toggle(id);
 }
 
 function roll() {
	if (items.length == 0)
		return false;
	rolling = true;
	setTitle("Mystery Box");
	toggle("play-again");
	toggle("interface-footer");
	reset("item_names");
	reset("item_images");
	get("fidget").setAttribute("data", "null");
	processRoll();
 }
 
 function setItem(image) {
	get("current_item").innerHTML = '<img id="pot" width="45" height="45" src="'+image+'">';
 }
 
  var tick = 0;
 
 function processRoll() {
	 var time = 0;
	 setItem(items[0].getImage());
	 toggle("current_item");
	 tick = 300 / items.length / 4;
	 index = 0;
	 process(time);
 }
 
 var index = 0;
 
 function process(time) {
	setTimeout(function(){
		time++;
		if (tick > 0)
			tick--;
		else {
			if (index == items.length - 1)
				index = 0;
			else index++;
			setItem(items[index].getImage());
			tick = 300 / items.length / 4;
		}
		if (time < 300)
			process(time);
		else win(Math.floor((Math.random() * items.length)));
	}, 1);
 }
 
 function win(item) {
	setItem(items[item].getImage());
	animate(item, 45, 0, false);
 }
 
 var rolling = false;
 
 function animate(item, size, time, reverse) {
	setTimeout(function() {
		if (time < 10) {
			var e = get("pot");
			if (reverse) size--;
			else size++;
			e.setAttribute("width", size);
			e.setAttribute("height", size);
			time++;
			animate(item, size, time, reverse);
		} else if (time<12 && !reverse) {
			time++;
			animate(item, size, time, reverse);
		} else if (!reverse) {
			animate(item, size, 0, true);
		} else {
			setTitle("You Won!");
			toggle("play-again");
			toggle("interface-footer");
			toggle("current_item");
			toggle("item_names");
			toggle("item_images");
			setItems([items[item]]);
			get("fidget").setAttribute("data", "spin");
			rolling = false;
		}
	}, 35);
 }
 
 function setItems(array) {
	for(var i = 0; i < array.length; i++) {
		get("item_names").innerHTML += "<div>"+array[i].getName()+"</div>";
		get("item_images").innerHTML += '<img width="45" height="45" src="'+array[i].getImage()+'"/>';
	}
 }
 
 function removeItem(name) {
	var new_items = [];
	for(var i = 0; i < items.length; i++)
		if (items[i].getName() != name)
			new_items.push(items[i]);
	items = new_items;
 }
 
 function addItem(index) {
	 if (rolling || has(ALL_ITEMS[index].getName())) return false;
	 items.push(ALL_ITEMS[index]);
	 update();
 }
 
 function update_items() {
	loop(0);
 }
 
 function update() {
	get("item_pots_content").innerHTML = items.length == 0 ? "None, add items below" : "";
	for(var i = 0; i < items.length; i++) {
		get("item_pots_content").innerHTML += html_box(i, items[i]);
	}
 }
 
 function loop(i) {
	setTimeout(function() {
		get("all_items").innerHTML += html_add_box(i, ALL_ITEMS[i]);
		i++;
		setPercentage(Math.floor(i / ALL_ITEMS.length * 100) + 1, i);
		if (i < ALL_ITEMS.length-1)
			loop(i);
		else toggle("wallahu");
	}, 0);
 }
 
 function removeItemBox(index) {
	 if (rolling) return false;
	removeItem(items[index].getName()); 
	remove("item_" + index);
	update();
 }
 
 function remove(id) {
    var elem = get(id);
    return elem.parentNode.removeChild(elem);
}

function has(name) {
	var found = false;
	for(var i = 0; i < items.length; i++)
		if (items[i].getName() == name) {
			found = true;
			break;
		}
	return found;
}

function setPercentage(percentage, item) {
	get("percentage").innerHTML = percentage;
	get("bar").setAttribute("style", "width: " + percentage + "%");
	get("items_of").innerHTML = item + "/" + ALL_ITEMS.length;
}

function fix(string) {
	if (string.length > 18)
	{
		return string.substring(0, 18) + "..";
	}
	return string;
}

function html_box(id, item) {
	return '<div id="item_'+id+'" class="item_pot"><div class="pot_title">'+fix(item.getName())+'</div><div class="pot_image"><img src="'+item.getImage()+'"/></div><div class="remove"><span onclick="removeItemBox('+id+');" class="button">Remove</span></div></div>';
}

function html_add_box(id, item) {
	return '<div id="item_'+id+'" class="item_pot"><div class="pot_title">'+fix(item.getName())+'</div><div class="pot_image"><img src="'+item.getImage()+'"/></div><div class="remove"><span onclick="addItem('+id+');" class="button">Add</span></div></div>';
}