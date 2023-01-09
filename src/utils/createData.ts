export const createData = (domain: string, time: string) => {
  return { domain, time, pages: [
      {
        url: 'https://mui.com/material-ui/material-icons/',
        time: '12 minutes',
      },
      {
        url: 'https://www.youtube.com/watch?v=o1chMISeTC0',
        time: '1 minute',
      },
    ]
  };
}
