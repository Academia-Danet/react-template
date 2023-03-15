import React from "react";

export const Container = ({ tema, children }) => {
  console.log(tema);
  let idade = 12;
  return (
    <>
      <p>{idade}</p>
      <div>{children}</div>
    </>
  );
};
