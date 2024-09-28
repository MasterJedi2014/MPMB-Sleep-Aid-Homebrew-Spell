/*	-INFORMATION-
	Subject:	Spell
	Effect:		This script adds a heavily altered version of the spell "Sleep" that instead aids targets in getting to sleep.
				This spell has been made by MasterJedi2014, based on the spell stated in the previous line.
	Code by:	MasterJedi2014, using MorePurpleMoreBetter's code as reference
	Date:		2023-8-20 (sheet v13.0.9)
*/

var iFileName = "Sleep Aid [by MasterJedi2014] V2.js";
RequiredSheetVersion("13.0.9");

SourceList["MJ:HB"] = {
	name : "MasterJedi2014's Homebrew",
	abbreviation : "MJ:HB",
	date : "2023/8/20",
};

SpellsList["sleep aid"] = {
	name : "Sleep Aid",
	regExpSearch : /^(?=.*sleep)(?=.*aid).*$/i,
	source : [["MJ:HB", 0]],
	defaultExcluded : true,
	classes : ["artificer", "bard", "sorcerer", "wizard"],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "90 ft",
	rangeMetric : "27m",
	components : "V,S,M",
	compMaterial : "a pinch of fine sand, rose petals, or a cricket.",
	duration : "Instantaneous",
	description : "Aids willing creatures in 20-ft rad in falling asleep; Can target self; Not a charm effect",
	descriptionMetric : "Aids willing creatures in 6m rad in falling asleep; Can target self; Not a charm effect",
	descriptionFull : "This heavily altered version of the Sleep spell aids willing creatures in falling asleep when they would otherwise have difficulty doing so. All willing creatures within 6 meters (20 feet) of a point you choose within range will fall asleep over the course of the next minute.\n   Creatures that physically cannot fall asleep or enter a similar state of being aren't affected by this spell. Creatures that are immune or resistant to being Charmed, but that do not meet the criteria of the previous sentence, are still affected by this spell if they are willing.",
};