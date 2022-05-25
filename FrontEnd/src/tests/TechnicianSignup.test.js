import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import TechnicianSignup from '../pages/TechnicianSignup';

test('Check all interaction labels', async () => {

    <Router>
        render(<TechnicianSignup />);
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(screen.getByLabelText('Address')).toBeInTheDocument();
        expect(screen.getByLabelText('Password')).toBeInTheDocument();
        expect(screen.getByLabelText('Mobile number')).toBeInTheDocument();
        expect(screen.getByLabelText('Date of Birth')).toBeInTheDocument();
        expect(screen.getByLabelText('Police Check')).toBeInTheDocument();
        expect(screen.getByLabelText('Qualification Certificate')).toBeInTheDocument();
        expect(screen.getByLabelText('Account Number')).toBeInTheDocument();
        expect(screen.getByLabelText('BSB')).toBeInTheDocument();
    </Router>

});

/*test("", () =>{
seperate yaml file for seperate tests

});*/