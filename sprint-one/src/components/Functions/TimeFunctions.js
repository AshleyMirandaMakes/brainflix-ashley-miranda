
let timestamp = 1545162149000;

function NumericMonthDayYearConverter(timestamp) {
  timestamp = new Date(timestamp).toLocaleDateString("en-US", { month: '2-digit', day: '2-digit', year: 'numeric'}).replaceAll(","," ");
  return timestamp
}
//might need to remove .replaceAll

console.log(NumericMonthDayYearConverter(timestamp));

export default NumericMonthDayYearConverter;

