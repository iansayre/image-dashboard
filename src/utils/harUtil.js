const harUtil = (data) => {
  const harResults = data;
  let harEntries;

  for (let i = 0; i < harResults.length; i++) {
    const result = harResults[i];

    for (let key in result) {
      if (key === 'harDetails') {
        const details = JSON.parse(result[key]);

        for (let detail in details) {
          if (detail === 'log') {
            const logs = details[detail];

            for (let log in logs) {
              if (log === 'entries') {
                harEntries = logs[log];
              }
              continue;
            }
          }
          continue;
        }
        continue;
      }
    }
  }

  if (harEntries) {
    return harEntries;
  }
}

export default harUtil;
