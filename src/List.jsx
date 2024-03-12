import React from "react";
import { MdDelete } from "react-icons/md";

function List({ listdata, setlist }) {
  const Remove = (i) => {
    const result = listdata.filter((ele, id) => {
      if (id != i) {
        return ele;
      }
    });
    setlist(result);
  };
  //
  return (
    <div>
      {listdata.map((value, i) => {
        return (
          <div
            key={i}
            className="sm:grid sm:grid-flow-col-dense sm:w-[100vw] lg:w-[80%] lg:grid lg:grid-cols-[100px_200px_00px]  bg-slate-500 w-[60%] m-auto gap-10 justify-center h-10 rounded-sm items-center mb-3 border-2 text-neutral-50"
          >
            <div className="">
              <h1>{value.name}</h1>
            </div>
            <div className="">
              <h1>{value.email}</h1>
            </div>

            <MdDelete onClick={() => Remove(i)} />
          </div>
        );
      })}
    </div>
  );
}

export default List;
