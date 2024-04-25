import NoteForm from "@/components/NoteForm";
import axios from "axios";

async function loadNotes() {
  const data = await axios.get("http://localhost:3000/api/notes");
  return data;
}

export default async function Home() {
  const res = await loadNotes();
  const data = res.data;
  console.log("Estos son los datos: ", data);

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <NoteForm />
        {data.map((note: any) => (
          <div key={note.id} className="bg-slate-400 p-4 my-2">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
