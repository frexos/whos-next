function sanitizeData(data) {
  const sanitizedData = [];
  for (const key in data) {
    const meetup = {
      id: key,
      ...data[key],
    };
    sanitizedData.push(meetup);
  }
  return sanitizedData;
}

export default sanitizeData;
