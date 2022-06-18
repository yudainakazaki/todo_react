import React, { useState } from "react";

function CreateArea(props) {
	const [note, setNote] = useState({
		title: "",
		content: ""
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value
			};
		});
	}

	function submitNote(event) {
		event.preventDefault();
		if (note.title !== "" && note.content !== "") {
			props.onAdd(note);
			setNote({
				title: "",
				content: ""
			});
		}
	}

	return (
		<div>
			<form>
				<input
					name="title"
					onChange={handleChange}
					placeholder="Note title"
					value={note.title}
				/>
				<textarea
					name="content"
					onChange={handleChange}
					placeholder="Take a note..."
					value={note.content}
					rows="3"
				/>
				<button onClick={submitNote}>+</button>
			</form>
		</div>
	);
}

export default CreateArea;
