import React from "react";
import { adidasArr } from "./Adidas";
import { useParams } from "react-router-dom";
import { S } from "./_styles";
import { Error404 } from "./Error404";

export const Model = () => {
  const params = useParams();
  const currentModel = adidasArr.find((el) => el.id === Number(params.id));

  return (
    <S.ModelWrapper>
      {currentModel ? (
        <>
          <h2>{currentModel.model}</h2>
          <h3>{currentModel.collection}</h3>
          <h3>{currentModel.price}</h3>
          <img src={currentModel.picture} alt="" />
        </>
      ) : (
        <h2>Такой модели не существует</h2>
      )}
    </S.ModelWrapper>
  );
};
