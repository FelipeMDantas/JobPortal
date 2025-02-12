import { useEffect, useRef, useState } from "react";
import Quill from "quill";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Washington");
  const [category, setCategory] = useState("Programming");
  const [level, setLevel] = useState("Senior level");
  const [salary, setSalary] = useState(0);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    <form>
      <div>
        <p>Job Title</p>
        <input
          type="text"
          placeholder="Type Here"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
      </div>

      <div>
        <p>Job Description</p>
        <div ref={editorRef}></div>
      </div>

      <div>
        <div>
          <p>Job Category</p>
          <select onChange={(e) => setCategory(e.target.value)}></select>
        </div>
      </div>
    </form>
  );
};

export default AddJob;
