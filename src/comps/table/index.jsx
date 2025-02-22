import React from "react";
import {
  TableStyled,
  TableContainerStyled,
  ThStyled,
  TheadStyled,
  TrStyled,
  TdStyled,
  UserNameStyled,
  ImageContainerStyled
} from "./styled";

export default function Table({ data }) {
  return (
    <TableContainerStyled>
      <TableStyled>
        <TheadStyled>
          <TrStyled>
            <ThStyled>Search Term</ThStyled>
            <ThStyled>Search Results</ThStyled>
          </TrStyled>
        </TheadStyled>
        <tbody>
          {data.map((result, index) => (
            <TrStyled key={index}>
              <TdStyled>
                <UserNameStyled>{result.searchTerm}</UserNameStyled>
              </TdStyled>
              <TdStyled>
                {result.userImage !== null ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <ImageContainerStyled>
                      {result.userImage ? (
                        <img
                          src={result.userImage}
                          alt={result.githubUserName}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "0.375rem",
                          }}
                        />
                      ) : (
                        <span style={{ color: "#6b7280" }}>No Image</span>
                      )}
                    </ImageContainerStyled>
                    <UserNameStyled>{result.githubUserName}</UserNameStyled>
                  </div>
                ) : (
                  <span style={{ color: "#6b7280" }}>
                    {result.githubUserName}
                  </span>
                )}
              </TdStyled>
            </TrStyled>
          ))}
        </tbody>
      </TableStyled>
    </TableContainerStyled>
  );
}
