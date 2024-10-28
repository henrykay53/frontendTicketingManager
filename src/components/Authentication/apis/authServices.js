// src/services/authService.js
import axios from 'axios';

// Base URL for your backend API
const API_URL = 'https://api.sleekinventionsltd.co.uk/api/v1'; 


// Login User Function
export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data; // Return the response data
    } catch (error) {
        throw error.response ? error.response.data.message : 'Network error, please try again.';
    }
};


// Register User Function
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data; // Return response data for further handling
    } catch (error) {
        // Throw error to be caught by the component
        throw error.response ? error.response.data.message : 'Network error, please try again.';
    }
};
