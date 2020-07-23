'use strict'

let heathTeamAvg = (80 + 120 + 103/3)
let zaneTeamAvg = (116 + 94 + 123/3)
let mariaTeamAvg = (97 + 134 + 105/3)
console.log(heathTeamAvg)
console.log(zaneTeamAvg)
console.log(mariaTeamAvg)

if(heathTeamAvg > zaneTeamAvg){
    console.log('Heath\'s team wins and the average score is ' + heathTeamAvg)
}
else{
    console.log('Zane\'s team wins and the average score is ' + zaneTeamAvg)
}

if(heathTeamAvg > zaneTeamAvg && zaneTeamAvg > mariaTeamAvg) 
{
    console.log('Heath\'s team wins');
}
elseif (zaneTeamAvg > heathTeamAvg && zaneTeamAvg > mariaTeamAvg)
{
    console.log('Zane\'s team wins');
}
elseif (mariaTeamAvg > heathTeamAvg && mariaTeamAvg > zaneTeamAvg)
{
    console.log('Maria\'s team wins');
}
elseif (heathTeamAvg == zaneTeamAvg && heathTeamAvg > mariaTeamAvg)
{
    console.log('Heath and Zane\'s team have a tie');
}
elseif (heathTeamAvg == mariaTeamAvg && heathTeamAvg > zaneTeamAvg)
{
    console.log('Heath and Maria\'s team have a tie');
}
elseif (mariaTeamAvg == zaneTeamAvg && mariaTeamAvg > heathTeamAvg)
{
    console.log('Maria and Zane\'s team have a tie');
}
else{
    console.log('All the teams have a tie \n\n');
}
