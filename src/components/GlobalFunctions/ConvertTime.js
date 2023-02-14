function ConvertTime(time) {
  const date = new Date().getTime();
  let unit = "milliseconds";
  time = date - time * 1000;
  if (time >= 1000) {
    unit = "second";
    time /= 1000;
    if (time >= 2) unit += "s";
    if (time >= 60) {
      unit = "minute";
      time /= 60;
      if (time >= 2) unit += "s";
      if (time >= 60) {
        unit = "hour";
        time /= 60;
        if (time >= 2) unit += "s";
        if (time >= 24) {
          unit = "day";
          time /= 24;
          if (time >= 2) unit += "s";
          if (time >= 30) {
            unit = "month";
            time /= 30;
            if (time >= 2) unit += "s";
            if (time >= 12) {
              unit = "year";
              time /= 12;
              if (time >= 2) unit += "s";
            }
          }
        }
      }
    }
  }

  return parseInt(time) + " " + unit;
}

export default ConvertTime;
