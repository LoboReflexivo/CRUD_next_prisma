"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function NoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  return (
    <form
      onSubmit={async (e) => {
        try {
          e.preventDefault();

          console.log("title", title);
          console.log("content", content);
          const data = await axios.post("http://localhost:3000/api/notes", {
            title: title,
            content: content,
          });
          console.log("los datos son:", data.data);
          router.refresh();
        } catch (error) {
          console.log(error);
        }
      }}
    >
      <input
        type="text"
        name="title"
        autoFocus
        placeholder="Title"
        className="w-full px-4 py-2 text-black bg-white rounded-md focus-within:outline-none focus:ring-2 focus:ring-blue-600 my-2"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name="content"
        autoFocus
        placeholder="Content"
        className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-2"
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="px-5 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
        Create
      </button>
    </form>
  );
}
