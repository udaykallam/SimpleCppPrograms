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
    'LCM', 'HCF', 'Sum of matrix elements', 'Sum of digits until single digit',
  ];

  const routes = [
    '/palindrome', '/stringpalindrome', '/primenumber',
    '/factorial', '/fibonacci', '/evenodd', '/armstrong',
    '/perfect', '/reverse', '/anagram',
    '/lcm','/hcf', '/sumofmatrix', 'sumofdigitsuntilsingledigit',
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
    <Paper
      elevation={4}
      style={{
        padding: '30px',
        maxWidth: '800px',
        margin: '40px auto',
        borderRadius: '15px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
      }}
    >
      <h2 style={{
        textAlign: 'center',
        color: '#1976d2',
        marginBottom: '25px',
        fontWeight: '600'
      }}>
        Simple Programs
      </h2>

      <List>
        {titles.slice(startIndex, endIndex).map((item, index) => (
          <ListItem
            key={startIndex + index}
            button
            onClick={() => handleClick(routes[startIndex + index])}
            style={{
              borderBottom: '1px solid #eee',
              borderRadius: '8px',
              marginBottom: '8px',
              transition: 'background 0.2s ease-in-out',
              backgroundColor: '#fff',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f8ff'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
          >
            <ListItemText
              primary={`${startIndex + index + 1}. ${item}`}
              primaryTypographyProps={{ fontSize: '16px' }}
            />
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
