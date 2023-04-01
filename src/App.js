import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Header from './components/Header';
import Search from './components/Search';
import NotesList from './components/NotesList';

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'Web Development Notes',
			date: '10/10/2022',
		},
		{
			id: nanoid(),
			text: 'Algorithm Design and Analysis Notes',
			date: '10/12/2022',
		},
		{
			id: nanoid(),
			text: 'Machine Learning Notes',
			date: '10/14/2022',
		},
		{
			id: nanoid(),
			text: 'Data Structures Notes',
			date: '10/16/2022',
		},
		{
			id: nanoid(),
			text: 'Software Engineering Notes',
			date: '10/18/2022',
		},
	]);

	const [searchText, setSearchText] = useState('');

	const [mode, setMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${mode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleMode={setMode} />
				<Search handleSearch={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					addNote={addNote}
					deleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;
