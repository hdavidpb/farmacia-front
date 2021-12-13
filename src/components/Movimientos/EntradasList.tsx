import React, { useEffect, useState } from "react";
import * as sc from "./styles";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllMovementsForEntries,
  getAllMovementsOfReasonForEntries,
} from "../../redux/features/movements/services";
import { RootState } from "../../redux/store";
import { LoaderContainer } from "../../components/Inventario/styles";
import GridLoader from "react-spinners/GridLoader";
export interface IDataList {
  descTrans: string;
  total: string;
}
const EntradasList = () => {
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState<number>(-1);
  const { movementsEntriesData, loadingEntries, filterDate } = useSelector(
    (store: RootState) => store.movements
  );

  useEffect(() => {
    dispatch(getAllMovementsForEntries(filterDate));
  }, []);

  const handleSelectItem = (index: number, reason: string) => {
    setSelectedItem(index);
    dispatch(getAllMovementsOfReasonForEntries(reason));
  };

  return (
    <sc.EntradasSalidasContainer>
      <sc.ListContainer>
        {!loadingEntries ? (
          movementsEntriesData.results.map((data, index: number) => (
            <sc.ListItemContainer
              key={index}
              onClick={() => handleSelectItem(index, data.movementReason)}
              style={{
                background: selectedItem === index ? "#DCFFF2" : "#ffffff",
              }}
            >
              <sc.ListItem>{data.movementReason}</sc.ListItem>
              <sc.ListItem>
                $ {new Intl.NumberFormat("de-DE").format(data.total)}
              </sc.ListItem>
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
        <sc.TotalItem>
          {`$ ${new Intl.NumberFormat("de-DE").format(
            movementsEntriesData.results.reduce(
              (acc, data) => acc + data.total,
              0
            )
          )}`}
        </sc.TotalItem>
      </sc.TotalContainer>
    </sc.EntradasSalidasContainer>
  );
};

export default EntradasList;
