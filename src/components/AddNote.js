import { useState } from 'react';

const AddNote = ({ addNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		} else {
			alert('Please do not exceed the character limit.');
		}
	};

	const handleSave = () => {
		if (noteText.trim().length > 0) {
			addNote(noteText);
			setNoteText('');
		}
	};

	return (
		<div className='note newNote'>
			<textarea
				rows='10'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='noteFooter'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button className='noteSave' onClick={handleSave}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;
