import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ProfileManager from './ProfileManager';
import axios from 'axios';

jest.mock('axios');

describe('ProfileManager Component', () => {
    test('renders Create Profile section', () => {
        render(<ProfileManager />);
        expect(screen.getByText(/Create Profile/i)).toBeInTheDocument();
    });

    test('allows profile creation', async () => {
        axios.post.mockResolvedValue({ data: { message: "Profile created!" } });
        
        render(<ProfileManager />);
        
        fireEvent.change(screen.getByPlaceholderText(/Name/i), { target: { value: 'John' } });
        fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByPlaceholderText(/Age/i), { target: { value: '25' } });
        
        fireEvent.click(screen.getByText(/Create Profile/i));
        
        expect(axios.post).toHaveBeenCalledWith('http://localhost/backend/index.php?action=create', {
            name: 'John',
            email: 'john@example.com',
            age: '25'
        });
    });
});
