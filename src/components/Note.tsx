import { Note as NoteModel } from "../models/note";

interface NoteProps {
    note: NoteModel,
}

const Note = ({ note }: NoteProps) => {
    console.log(note);
    const {
        title,
        text,
        createdAt,
        updatedAt
    } = note;
    return (
        <div className="elf">
            <p>
                {note.title}
                <p>
                    {note.text}
                </p>
            </p>
        </div>
    )


}

export default Note;