// WAP to check if year is leap year or not using switch condition statemet

let = checkLeapYear = function(year)
{
  if(year==null|| year == "string"|| year == undefined|| isNaN(year)==true)
  {console.log(`${year} :Invalid data, Please enter correct data`);}

  else if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) )
   {console.log(`Given year ${year} is a leap year`);} 

else {console.log(`${year}:Not a leap year`);}
}
checkLeapYear(2020)
checkLeapYear(1999)
checkLeapYear(1600)
checkLeapYear(2022)
checkLeapYear(1945)
checkLeapYear(null)
checkLeapYear('twenty twenty')
checkLeapYear(undefined)
checkLeapYear(1750)
checkLeapYear(NaN)



