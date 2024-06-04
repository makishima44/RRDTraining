import React from "react";
import { AdidasItem, adidasArr } from "./Adidas";
import { PumaItem, pumaArr } from "./Puma";
import { useParams } from "react-router-dom";
import { S } from "./_styles";

type CrossModels = {
  [key: string]: AdidasItem[] | PumaItem[];
};

const crossModel: CrossModels = {
  adidas: adidasArr,
  puma: pumaArr,
};

export const Model = () => {
  const { model, id } = useParams();

  console.log(model);

  const currentModel = model
    ? crossModel[model].find((el) => el.id === Number(id))
    : null;

  // const currentModel = crossModel[model as string].find(
  //   (el) => el.id === Number(id)
  // );

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
