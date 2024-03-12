import React, { useState } from "react";

function Form({ adddata }) {
  const [data, setdata] = useState({ name: "", email: "" });
  console.log(data);
  const handlefunc = (e) => {
    if (e.target.name == "name") {
      setdata({ ...data, name: e.target.value });
    } else {
      setdata({ ...data, email: e.target.value });
    }
  };
  const Add = () => {
    if (data.name == "" || data.email == "") {
      alert("Please Fill Input");
    } else adddata(data);
    setdata({ name: "", email: "" });
  };

  return (
    <main className="flex flex-col gap-10 justify-center items-center h-60 ">
      <div className="flex flex-row gap-8">
        <label htmlFor="">Name:</label>
        <input
          type="text"
          className="outline-none border-slate-800"
          placeholder="Enter Your Name"
          name="name"
          value={data.name}
          onChange={handlefunc}
          maxLength={10}
        />
      </div>
      <div className="flex flex-row gap-8">
        <label htmlFor="">Email:</label>
        <input
          type="text"
          className="outline-none border-slate-800"
          placeholder="Enter Your Email"
          name="email"
          value={data.email}
          onChange={handlefunc}
          maxLength={30}
        />
      </div>
      <button
        onClick={Add}
        className="bg-slate-900 text-amber-50 p-3 rounded-sm"
      >
        Add Contact{" "}
      </button>
    </main>
  );
}

export default Form;
