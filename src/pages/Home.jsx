import React from "react";
import { Header } from "../components/ui/Header";
import { Form } from "../components/todos/Form";
import { List } from "../components/todos/List";

export const Home = () => {
  return (
    <div>
      <Header />
      <Form />
      <List />
    </div>
  );
};
