import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
	notes,
	addNote,
	deleteNote,
}) => {
	return (
		<div className='notesList'>
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					deleteNote={deleteNote}
				/>
			))}
			<AddNote addNote={addNote} />
		</div>
	);
};

export default NotesList;
