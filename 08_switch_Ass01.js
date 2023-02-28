function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`${monthNumber}: it is Januanry`);
      break;
    case 2:
      console.log(`${monthNumber}: it is February`);
      break;
    case 3:
      console.log(`${monthNumber}: it is March`);
      break;
    case 4:
      console.log(`${monthNumber}: it is April`);
      break;
    case 5:
      console.log(`${monthNumber}: it is May`);
      break;
    case 6:
      console.log(`${monthNumber}: it is June`);
      break;
    case 7:
      console.log(`${monthNumber}: it is July`);
      break;
    case 8:
      console.log(`${monthNumber}: it is August`);
      break;
    case 9:
      console.log(`${monthNumber}: it is September`);
      break;
    case 10:
      console.log(`${monthNumber}: it is October`);
      break;
    case 11:
      console.log(`${monthNumber}: it is November`);
      break;
      case 12:
        console.log(`${monthNumber}: it is December`);
        break;
      
      default:
      console.log(`Invalid Month : ${monthNumber}`);
      break;
  }
//   console.log(`End of Switch case for ${monthNumber}`);
}
monthOfYear(2)
monthOfYear(5)
monthOfYear(12)
monthOfYear(15)
monthOfYear(null)
monthOfYear(undefined)

