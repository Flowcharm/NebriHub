import axios from 'axios';

// Function to get the JWT token
const getJwtToken = async () => {
  try {
    const response = await axios.post('http://localhost:3005/auth/login', {
      email: 'your-email@example.com',
      password: 'your-password',
    });
    return response.data.token; // Ensure token is returned in response body
  } catch (error) {
    console.error('Error fetching JWT token:', error);
  }
};

const fetchInstitutions = async () => {
  try {
    const token = await getJwtToken();
    if (!token) {
      throw new Error('Failed to retrieve JWT token');
    }
    const response = await axios.get('http://localhost:3005/institutions', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('Institutions:', response.data);
  } catch (error) {
    console.error('Error fetching institutions:', error);
  }
};

fetchInstitutions();
