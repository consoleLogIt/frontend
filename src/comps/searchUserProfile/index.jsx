import React, { useState } from "react";
import Card from "../card";
import axios from "axios";
import Searchbar from "../searchbar";
import Button from "../button";
import { WrapperStyled } from "./styled";
import Store from "../../store";
import { v4 as uuidv4 } from 'uuid';

export default function SearchUserProfile() {
  const [value, setValue] = useState("");
  const [userData, setUserData] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState(undefined);

  const handleGetUser = async () => {
    if (value.length === 0) {
      setError({ message: "Please enter a name" });
      setStatus("error");
      return;
    }

    setStatus("loading");
    setUserData("");
    setError(undefined);

    try {
      const response = await axios.get(`https://api.github.com/users/${value}`);

      setUserData(response.data);
      setStatus("success");

      // set the searched user to store;
      const history = Store.getHistory();

      //filter the user if already present

      const filterd = history.filter((d) => d.userName !== value);

      // place the current search result at top.
      Store.setHistory([
        {
          userName: value,
          data: response.data,
          id:uuidv4()
        },
        ...filterd,
      ]);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError({ message: "User not found" });

        const history = Store.getHistory();

        const filterd = history.filter((d) => d.userName !== value);

        Store.setHistory([
          {
            userName: value,
            id:uuidv4()
          },
          ...filterd,
        ]);
      } else {
        setError({ message: "Sorry, Something went wrong!" });
      }

      setStatus("error");
    }
  };

  const renderUserProfile = () => {
    switch (status) {
      case "loading":
        return <span style={{ fontSize: "1.5rem" }}>Loading...</span>;
      case "error":
        return <span style={{ fontSize: "1.5rem" }}>{error.message}</span>;
      case "success":
        return (
          <Card
            name={userData.name || userData.login}
            image={userData.avatar_url}
            linkTo={`https://github.com/${userData.login}`}
          ></Card>
        );
      default:
        return null;
    }
  };

  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTimeout(handleGetUser, 0);
    }
  };
  return (
    <WrapperStyled>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4rem",
          marginTop: "10rem",
        }}
      >
        <div style={{ fontSize: "2rem" }}>Search GitHub User</div>
        <Searchbar
          value={value}
          onChange={(value) => setValue(value)}
          onKeyDown={handlePressEnter}
        ></Searchbar>
        <Button
          onKeyDown={handlePressEnter}
          disabled={value.length === 0}
          onClick={handleGetUser}
        >
          Search
        </Button>

        {renderUserProfile()}
      </div>
    </WrapperStyled>
  );
}
