import { LoaderContainer } from "@components/Inventario/styles";
import { getAllShelfs } from "@redux/features/physical-inventory/services";
import { RootState } from "@redux/store";
import React, { useEffect } from "react";
import { BiDownload } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { GridLoader } from "react-spinners";
import * as sc from "./styles";

const Table = () => {
  const dispatch = useDispatch();
  const { loading, shelf } = useSelector(
    (store: RootState) => store.physicalInventorie
  );

  useEffect(() => {
    dispatch(getAllShelfs());
  }, []);

  return (
    <sc.TableContainer>
      <sc.TitleContainer>
        <sc.TitleDesc>Nombre</sc.TitleDesc>
        <sc.TitleDesc>Cantidad</sc.TitleDesc>
      </sc.TitleContainer>
      <sc.ProductTableListContainer>
        {!loading ? (
          shelf.map((shelf) => (
            <sc.TableListContainer key={shelf.shelfId}>
              <sc.ListDesc>{shelf.shelfName}</sc.ListDesc>
              <sc.ListDesc>{`${shelf.quantity} productos`}</sc.ListDesc>
              <sc.ListDesc>
                <sc.DownloadBtn onClick={() => window.open(shelf.QRUrl)}>
                  <sc.IconContainer>
                    <BiDownload size={25} color="#ffffff" />
                  </sc.IconContainer>
                  <p>Descargar QR</p>
                </sc.DownloadBtn>
              </sc.ListDesc>
            </sc.TableListContainer>
          ))
        ) : (
          <LoaderContainer>
            <GridLoader color={"#CDCFFE"} size={50} />
          </LoaderContainer>
        )}
      </sc.ProductTableListContainer>
    </sc.TableContainer>
  );
};

export default Table;
