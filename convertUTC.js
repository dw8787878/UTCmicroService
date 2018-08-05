exports.convertUTC = (dateString) => {
  let yrMonthDay = dateString.split('-');
  let UTCResult = `${yrMonthDay[2]} ${convertMonth(yrMonthDay[1])} ${yrMonthDay[0]}`;
  let event = new Date(UTCResult);
  UTCResult = event.toUTCString();
  return UTCResult;
};

function convertMonth(month){
  switch (month) {
    case '1' : return 'Jan';
    case '2' : return 'Feb';
    case '3' : return 'Mar';
    case '4' : return 'Apr';
    case '5' : return 'May';
    case '6' : return 'Jun';
    case '7' : return 'Jul';
    case '8' : return 'Aug';
    case '9' : return 'Sep';
    case '10' : return 'Oct';
    case '11' : return 'Nov';
    case '12' : return 'Dec';
    default : console.log('Something went very wrong in converting to UTC Month');
  }
};
