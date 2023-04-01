import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, deleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='noteFooter'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => deleteNote(id)}
					className='noteDeleteIcon'
					size='20px'
				/>
			</div>
		</div>
	);
};

export default Note;
