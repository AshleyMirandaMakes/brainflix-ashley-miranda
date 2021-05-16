
function NumericMonthDayYearConverter(timestamp) {
  timestamp = new Date(timestamp).toLocaleDateString("en-US", { month: '2-digit', day: '2-digit', year: 'numeric'})
  return timestamp
}

export default NumericMonthDayYearConverter;

