import { useState } from "react";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Washington");
  const [category, setCategory] = useState("Programming");
  const [level, setLevel] = useState("Senior level");
  const [salary, setSalary] = useState(0);

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
    </form>
  );
};

export default AddJob;
