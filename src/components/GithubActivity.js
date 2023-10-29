import React, { useEffect, useState } from 'react';

const TOKEN = '';

const query = `
query($userName: String!, $startDate: DateTime!, $endDate: DateTime!) {
  user(login: $userName) {
    contributionsCollection(from: $startDate, to: $endDate) {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`;

export default function GithubHeatMap() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1; // Month is 0-based, so we add 1

      const startDate = `${year}-${month.toString().padStart(2, '0')}-01T00:00:00Z`;
      const nextMonth = month === 12 ? 1 : month + 1;
      const nextYear = month === 12 ? year + 1 : year;
      const endDate = `${nextYear}-${nextMonth.toString().padStart(2, '0')}-01T00:00:00Z`;

      try {
        const response = await retrieveContributionData('sudipme', startDate, endDate);
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>GitHub Contribution Data for the Current Month</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

async function retrieveContributionData(userName, startDate, endDate) {
  const variables = `
  {
    "userName": "${userName}",
    "startDate": "${startDate}",
    "endDate": "${endDate}"
  }
  `;

  const body = {
    query,
    variables,
  };

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(body),
  });

  return res.json();
}
