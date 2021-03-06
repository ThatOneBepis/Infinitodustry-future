//mechanics part made by younggam
const multiLib=require("infinitodustry/mechanics/multi-lib");
//you can use GenericSmelter instead GenericCrafter
//also GenericSmelter.SmelterBuild instead GenericCrafter.GenericCrafterBuild
//                                                                          			 ▼this has to be same with .json file name
//
const alphamixer=multiLib.MultiCrafter(GenericSmelter,GenericSmelter.SmelterBuild,"alphamixer",[
    /*default form for each recipes. You can change values.
    Stuff naming guidelines
	Modded Item:  "mod-name-item-name/amount", Vanilla Item: "item-name/amount"
	Modded Liquid:  "mod-name-liquid-name/amount",  Vanilla liquid: "liquid-name/amount"
    */
{
  //input is null as to make this be it's "idle" state
  output:{
    power: 5.25,
  },
  craftTime:60
},
{
  input:{
    liquids:["slag/12"],
    power:6,
  },
  output:{
    items:["copper/10","lead/3","thorium/1","titanium/2"],
  },
  craftTime:95
},
{
  input:{
    liquids:["oil/5"],
    power:5.2,
  },
  output:{
    items:["coal/1"],
  },
  craftTime:12
},
{
  input:{
    items:["coal/25"],
    power:10.5,
  },
  output:{
    items:["spore-pod/50"],
  },
  craftTime:327
},
{
  input:{
    items:["scrap/20"],
    power:6,
  },
  output:{
    items:["sand/25"],
  },
  craftTime:69
},
{
  input:{
    items:["silicon/10"],
    power:2,
  },
  output:{
    items:["scrap/12","graphite/8"],
  },
  craftTime:156
},
{
  input:{
    items:["scrap/40","coal/25"],
    power:8,
  },
  output:{
    items:["pyratite/25"],
  },
  craftTime:200
},
{
  input:{
    items:["sand/50","spore-pod/50","lead/50"],
    power:10,
  },
  output:{
    items:["blast-compound/50"],
  },
  craftTime:599
},
{
  input:{
    items:["infinitodustry-vector/65","thorium/40","sand/100"],
    power:50,
  },
  output:{
    items:["phase-fabric/50"],
  },
  craftTime:2000
},
{
  input:{
    items:["copper/60","lead/80","titanium/40","silicon/100","infinitodustry-infiar/50"],
    power:50,
  },
  output:{
    items:["surge-alloy/40"],
  },
  craftTime:3999
},
{
  input:{
    items:["sand/40","coal/40","infinitodustry-vector/15","copper/50"],
    power:5,
  },
  output:{
    items:["silicon/15","infinitodustry-toughitinum/10"],
  },
  craftTime:599
},
{
  input:{
    items:["titanium/15","infinitodustry-stone/10","graphite/5"],
    liquids:["oil/40"],
    power:3.9,
  },
  output:{
    items:["plastanium/3","infinitodustry-tau-plate/5"],
  },
  craftTime:215
},
{
  input:{
    items:["sand/25"],
    liquids:["slag/45"],
    power:5,
  },
  output:{
    items:["metaglass/6","infinitodustry-visionary-glass/6"],
  },
  craftTime:267
},
{
  input:{
    liquids:["water/25"],
    power:1,
  },
  output:{
    items:["infinitodustry-snowball/8"],
  },
  craftTime:40
},
{
  input:{
    liquids:["cryofluid/50"],
    power:2,
  },
  output:{
    items:["infinitodustry-snowball-but-colder/3"],
  },
  craftTime:10
},
{
  input:{
    items:["titanium/50","infinitodustry-snowball/25","spore-pod/45"],
    liquids:["oil/50"],
    power:6,
  },
  output:{
    items:["infinitodustry-catrige/5"],
  },
  craftTime:10
},
{
  input:{
    items:["blast-compound/5","plastanium/10"],
    power:10,
  },
  output:{
    items:["infinitodustry-blast-fabric/9"],
  },
  craftTime:71
},
{
  input:{
    items:["infinitodustry-scalar/5"],
    power:1.5,
  },
  output:{
    items:["infinitodustry-stone/10"],
  },
  craftTime:200
},
{
  input:{
    items:["copper/3","infinitodustry-snowball/3","infinitodustry-stone/2"],
    power:1,
  },
  output:{
    items:["infinitodustry-scalar/3"],
  },
  craftTime:100
},
{
  input:{
    items:["infinitodustry-scalar/3"],
    power:3,
  },
  output:{
    items:["infinitodustry-vector/2"],
  },
  craftTime:150
},
{
  input:{
    items:["infinitodustry-vector/4"],
    power:6
  },
  output:{
    items:["infinitodustry-matrix/2"],
  },
  craftTime:200
},
{
  input:{
    items:["infinitodustry-matrix/3"],
    power:11
  },
  output:{
    items:["infinitodustry-tensor/1"],
  },
  craftTime:250
},
{
  input:{
    items:["infinitodustry-tensor/4"],
    power:17
  },
  output:{
    items:["infinitodustry-infiar/1"],
  },
  craftTime:300
},
{
  input:{
    items:["infinitodustry-snowball/50","spore-pod/10"],
    liquids:["water/50"],
    power:5
  },
  output:{
    items:["infinitodustry-lemon/50"],
  },
  craftTime:675
},
{
  input:{
    items:["infinitodustry-tau-plate/85","infinitodustry-toughitinum/40"],
    power:5
  },
  output:{
    items:["infinitodustry-stonks/350"],
  },
  craftTime:2100
},
{
    input:{
        items:["infinitodustry-snowball/8"],
        power:1.1
    },
    output:{
        liquids:["water/25"],
    },
    craftTime:30
},
{
    input:{
        items:["titanium/5"],
        liquids:["water/50"],
        power:1.5
    },
    output:{
        liquids:["cryofluid/50"],
    },
    craftTime:60
},
{
    input:{
        items:["spore-pod/50"],
        power:3
    },
    output:{
        liquids:["oil/50"],
    },
    craftTime:60
},
{
    input:{
        items:["scrap/25"],
        power:0.5
    },
    output:{
        liquids:["slag/50"],
    },
    craftTime:85
},
{
    input:{
        items:["pyratite/5"],
        liquids:["infinitodustry-ion-matter/25"],
        power:1.65
    },
    output:{
        liquids:["infinitodustry-ion-matter/35"],
    },
    craftTime:20
},
{
    input:{
        liquids:["water/50","oil/30"],
        power:2
    },
    output:{
        liquids:["infinitodustry-ink/25"],
    },
    craftTime:57
},
{
    input:{
        items:["infinitodustry-lemon/20","spore-pod/10"],
        liquids:["water/30"],
        power:2
    },
    output:{
        liquids:["infinitodustry-lemon-acid/50"],
    },
    craftTime:100
}
],{
    /*
    you can customize block here. ex) load()
    not used here as it isn't needed
    */
},
/*this is Object constructor. This way is much better than literal way{a:123}
you can replace this with {} if you don't want to modify entity*/
function Extra(){
    /*

	How to exclude the coin recipe/items with crafters that are either campaignOnly or sandboxOnly outside of campaign

	Also how to include crafted items from other mods, and estimate their craft requirements, time and what multiplier to apply. Items without any crafters are excluded as output

    */
});
/*
YOU MUST NOT MODIFY VALUE OF THESE
configurable
outputsPower
hasItems
hasLiquids
hasPower
*/
alphamixer.itemCapacity= 350
alphamixer.liquidCapacity= 100;
alphamixer.size= 5;
alphamixer.health= 500;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
alphamixer.dumpToggle = true;