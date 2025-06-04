import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { List, ListItem, ListItemText, Paper } from '@mui/material';

export const Index = () => {
  const navigate = useNavigate();

  const titles = [
    'Palindrome', 'String Palindrome', 'Prime Number',
    'Factorial', 'Fibonacci', 'Even or Odd', 'Armstrong Number',
    'Perfect Number', 'Reverse Number', 'Anagram',
    'LCM & HCF', 'Binary to Decimal', 'Decimal to Binary'
  ];
  const routes = [
    '/palindrome', '/stringpalindrome', '/primenumber',
    '/factorial', '/fibonacci', '/evenodd', '/armstrong',
    '/perfect', '/reverse', '/anagram',
    '/lcmhcf', '/bintodec', '/dectobin'
  ];

  const itemsPerPage = 10;
  const [page, setPage] = useState(1);

  const handleClick = (route) => {
    navigate(route);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '700px', margin: '30px auto' }}>
      <h2 style={{ textAlign: 'center' }}>Simple Programs</h2>
      <List>
        {titles.slice(startIndex, endIndex).map((item, index) => (
          <ListItem
            key={startIndex + index}
            button
            onClick={() => handleClick(routes[startIndex + index])}
            style={{
              borderBottom: '1px solid #ddd',
              cursor: 'pointer'
            }}
          >
            <ListItemText primary={`${startIndex + index + 1}. ${item}`} />
          </ListItem>
        ))}
      </List>

      <Stack spacing={2} alignItems="center" mt={3}>
        <Pagination
          count={Math.ceil(titles.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </Stack>
    </Paper>
  );
};
