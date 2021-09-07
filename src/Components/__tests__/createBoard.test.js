import {render, screen} from '@testing-library/react'
import CreateBoard from '../CreateBoard/createBoard';
import "@testing-library/jest-dom/extend-expect"

test('Should render CreateBoard component', () => {
    render(<CreateBoard currentUser={{userId: 1029}}/>);
    const CreateBoardElement  = screen.getByTestId('createBoard-1');
    expect(CreateBoardElement).toBeInTheDocument();
})
