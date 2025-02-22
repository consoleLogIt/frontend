import React, { useEffect, useState } from "react";
import {
  HeaderStyled,
  HistoryItemStyled,
  HistoryContainerStyled,
  WrapperStyled,
} from "./styled";
import Button from "../button";
import Card from "../card";
import Store from "../../store";

// const SearchData = [
//   {
//     userName: "consoleLogIt",
//     data: {
//       login: "consoleLogIt",
//       id: 67229376,
//       node_id: "MDQ6VXNlcjY3MjI5Mzc2",
//       avatar_url: "https://avatars.githubusercontent.com/u/67229376?v=4",
//       gravatar_id: "",
//       url: "https://api.github.com/users/consoleLogIt",
//       html_url: "https://github.com/consoleLogIt",
//       followers_url: "https://api.github.com/users/consoleLogIt/followers",
//       following_url:
//         "https://api.github.com/users/consoleLogIt/following{/other_user}",
//       gists_url: "https://api.github.com/users/consoleLogIt/gists{/gist_id}",
//       starred_url:
//         "https://api.github.com/users/consoleLogIt/starred{/owner}{/repo}",
//       subscriptions_url:
//         "https://api.github.com/users/consoleLogIt/subscriptions",
//       organizations_url: "https://api.github.com/users/consoleLogIt/orgs",
//       repos_url: "https://api.github.com/users/consoleLogIt/repos",
//       events_url: "https://api.github.com/users/consoleLogIt/events{/privacy}",
//       received_events_url:
//         "https://api.github.com/users/consoleLogIt/received_events",
//       type: "User",
//       user_view_type: "public",
//       site_admin: false,
//       name: "Kishan Singh",
//       company: null,
//       blog: "",
//       location: null,
//       email: null,
//       hireable: null,
//       bio: null,
//       twitter_username: null,
//       public_repos: 33,
//       public_gists: 0,
//       followers: 0,
//       following: 0,
//       created_at: "2020-06-21T13:05:52Z",
//       updated_at: "2025-02-16T07:08:29Z",
//     },
//   },

//   {
//     userName: "consoleLogIt",
//     data: {
//       login: "consoleLogIt",
//       id: 67229376,
//       node_id: "MDQ6VXNlcjY3MjI5Mzc2",
//       avatar_url: "https://avatars.githubusercontent.com/u/67229376?v=4",
//       gravatar_id: "",
//       url: "https://api.github.com/users/consoleLogIt",
//       html_url: "https://github.com/consoleLogIt",
//       followers_url: "https://api.github.com/users/consoleLogIt/followers",
//       following_url:
//         "https://api.github.com/users/consoleLogIt/following{/other_user}",
//       gists_url: "https://api.github.com/users/consoleLogIt/gists{/gist_id}",
//       starred_url:
//         "https://api.github.com/users/consoleLogIt/starred{/owner}{/repo}",
//       subscriptions_url:
//         "https://api.github.com/users/consoleLogIt/subscriptions",
//       organizations_url: "https://api.github.com/users/consoleLogIt/orgs",
//       repos_url: "https://api.github.com/users/consoleLogIt/repos",
//       events_url: "https://api.github.com/users/consoleLogIt/events{/privacy}",
//       received_events_url:
//         "https://api.github.com/users/consoleLogIt/received_events",
//       type: "User",
//       user_view_type: "public",
//       site_admin: false,
//       name: "Kishan Singh",
//       company: null,
//       blog: "",
//       location: null,
//       email: null,
//       hireable: null,
//       bio: null,
//       twitter_username: null,
//       public_repos: 33,
//       public_gists: 0,
//       followers: 0,
//       following: 0,
//       created_at: "2020-06-21T13:05:52Z",
//       updated_at: "2025-02-16T07:08:29Z",
//     },
//   },

//   //   {
//   //     userName: "hello",
//   //   },
// ];

// const searchData = [
//   {
//     searchTerm: "Ethan Linker",
//     userImage: "", // Add image URL if available
//     githubUserName: "Ethan Linker",
//   },
//   {
//     searchTerm: "Peter Thiel",
//     userImage: null,
//     githubUserName: "Search result not found",
//   },
// ];

export default function SearchHistory() {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const history = Store.getHistory();

    if (history) {
      setHistoryData(history);
    }
  }, []);

  const handleClearHistory = () => {
    Store.clearHistory();

    setHistoryData([]);
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
        <div style={{ fontSize: "2rem" }}>Your Search History</div>

        {historyData.length === 0 ? (
          <span style={{ fontSize: "1.5rem" }}>No history</span>
        ) : (
          <HistoryContainerStyled>
            <HeaderStyled key="header">
              <span style={{ minWidth: "10rem", color: "rgb(185 187 202)" }}>
                Search Term
              </span>
              <div style={{ flex: 1 }}>
                <span
                  style={{ padding: "1rem 2rem", color: "rgb(185 187 202)" }}
                >
                  Search Results
                </span>
              </div>
            </HeaderStyled>
            <div
              style={{
                height: "50rem",
                overflow: "scroll",
                scrollbarWidth: "none",
                width: "100%",
              }}
            >
              {historyData.map((d) => (
                <HistoryItemStyled key={d.id}>
                  <b style={{ minWidth: "10rem" }}>{d.userName}</b>
                  {d.data ? (
                    <Card
                      noBorder
                      name={d.data.name || d.data.login}
                      image={d.data.avatar_url}
                      linkTo={`https://github.com/${d.data.login}`}
                    ></Card>
                  ) : (
                    <span
                      style={{
                        padding: "0rem 2rem",
                        color: "rgb(185 187 202)",
                      }}
                    >
                      Search result not found
                    </span>
                  )}
                </HistoryItemStyled>
              ))}
            </div>
          </HistoryContainerStyled>
        )}

        <Button
          onClick={handleClearHistory}
          disabled={historyData.length === 0}
        >
          Clear Search History
        </Button>
      </div>
    </WrapperStyled>
  );
}
