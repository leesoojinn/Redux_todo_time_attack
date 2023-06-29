import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

export const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (!title || !body) {
          alert("글을 추가하세요.");
        }

        dispatch({
          type: "ADD_TODO",
          payload: {
            id: shortid.generate(),
            title,
            body,
            isDone: false,
          },
        });

        setTitle("");
        setBody("");
      }}
    >
      <div>
        <label>제목</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>내용</label>
        <input
          type="text"
          name="body"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </div>
      <button>추가</button>
    </form>
  );
};
