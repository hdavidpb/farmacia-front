import React, { useEffect, useState } from "react";
import { IDataList } from "./EntradasList";

import { useDispatch, useSelector } from "react-redux";
import {
  getAllMovementsForOutputs,
  getAllMovementsOfReasonForOutputs,
} from "../../redux/features/movements/services";
import * as sc from "./styles";
import { RootState } from "../../redux/store";
import GridLoader from "react-spinners/GridLoader";
import { LoaderContainer } from "../../components/Inventario/styles";

const SalidasList = () => {
  const [selectedItem, setSelectedItem] = useState<number>(-1);
  const dispatch = useDispatch();

  const {
    movementsOutputsData,
    loadingOutputs,
    filterDate,
    movementsForReason,
  } = useSelector((store: RootState) => store.movements);

  useEffect(() => {
    dispatch(getAllMovementsForOutputs(filterDate));
  }, []);

  const handleSelectItem = (index: number, reason: string) => {
    setSelectedItem(index);
    dispatch(getAllMovementsOfReasonForOutputs(reason));
  };

  return (
    <sc.EntradasSalidasContainer>
      <sc.ListContainer>
        {!loadingOutputs ? (
          movementsOutputsData.results.map((data, index: number) => (
            <sc.ListItemContainer
              key={index}
              onClick={() => handleSelectItem(index, data.movementReason)}
              // style={{
              //   background: selectedItem === index ? "#DCFFF2" : "#ffffff",
              // }}
              style={{
                background:
                  movementsForReason.results.length !== 0 &&
                  movementsForReason.results[0].reason === data.movementReason
                    ? "#DCFFF2"
                    : "#ffffff",
              }}
            >
              <sc.ListItem>{data.movementReason}</sc.ListItem>
              <sc.ListItem>{`$ ${new Intl.NumberFormat("de-DE").format(
                Number(data.total)
              )}`}</sc.ListItem>
            </sc.ListItemContainer>
          ))
        ) : (
          <LoaderContainer>
            <GridLoader color={"#CDCFFE"} size={50} />
          </LoaderContainer>
        )}
      </sc.ListContainer>
      <sc.TotalContainer>
        <sc.TotalItem>Total general</sc.TotalItem>
        <sc.TotalItem>{`$ ${new Intl.NumberFormat("de-DE").format(
          movementsOutputsData.results.reduce(
            (acc, data) => acc + data.total,
            0
          )
        )}`}</sc.TotalItem>
      </sc.TotalContainer>
    </sc.EntradasSalidasContainer>
  );
};

export default SalidasList;
