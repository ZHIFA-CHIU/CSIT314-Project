import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import CreateAccountTechnician from './CreateAccountTechnician';

test('renders log in link', async () => {

    render(<CreateAccountTechnician />);

    const inputNode1 = screen.getByLabelText('BSB')

    expect(inputNode1)

});

/*test("", () =>{
seperate yaml file for seperate tests

});*/