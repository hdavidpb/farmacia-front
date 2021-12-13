import React, { useEffect } from "react";
import * as sc from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllProviders } from "../../redux/features/providers/services";
import { RootState } from "../../redux/store";
import { LoaderContainer } from "../Inventario/styles";
import GridLoader from "react-spinners/GridLoader";

const Table = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, providers } = useSelector(
    (store: RootState) => store.providers.providersData
  );

  useEffect(() => {
    dispatch(getAllProviders());
  }, []);

  const handleGoToDetails = (id: number) => {
    history.push(`/farmacia/proveedores/details/${id}`);
  };

  return (
    <>
      <sc.TableTitlesContainer>
        <sc.TitleDescItem>NIT</sc.TitleDescItem>
        <sc.TitleDescItem>Nombre</sc.TitleDescItem>
        <sc.TitleDescItem>Dirección</sc.TitleDescItem>
        <sc.TitleDescItem>Teléfono</sc.TitleDescItem>
        <sc.TitleDescItem>Correo</sc.TitleDescItem>
      </sc.TableTitlesContainer>
      <sc.ProveedoresTableListContainer>
        {!loading ? (
          providers.results.map((prov) => (
            <sc.ProveedoresListItem
              key={prov.id}
              onClick={() => handleGoToDetails(prov.id)}
            >
              <sc.DescItem>{prov.providerCode}</sc.DescItem>
              <sc.DescItem>
                {prov.providerName !== null ? prov.providerName.trim() : "N/A"}
              </sc.DescItem>
              <sc.DescItem>
                {prov.providerAddress === null ? "N/A" : prov.providerAddress}
              </sc.DescItem>
              <sc.DescItem>
                {prov.providerPhone === null ? "N/A" : prov.providerPhone}
              </sc.DescItem>
              <sc.DescItem>
                {prov.providerEmail ? prov.providerEmail : "N/A"}
              </sc.DescItem>
            </sc.ProveedoresListItem>
          ))
        ) : (
          <LoaderContainer>
            <GridLoader color={"#CDCFFE"} size={50} />
          </LoaderContainer>
        )}
      </sc.ProveedoresTableListContainer>
    </>
  );
};

export default Table;
