import { LoaderContainer } from "@components/Inventario/styles";
import {
  getAllAlertDetail,
  getAllAlerts,
} from "@redux/features/crashcarts/services";
import { RootState } from "@redux/store";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { GridLoader } from "react-spinners";
import CarrosButtonsLink from "./CarrosButtonsLink";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import updateLocale from "dayjs/plugin/updateLocale";
import { months } from "./const/const";
dayjs.extend(customParseFormat);
dayjs.extend(updateLocale);
dayjs.updateLocale("en", { months });
import * as sc from "./styles";
const Alertas = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { alerts, loadingAlerts } = useSelector(
    (store: RootState) => store.crashCarts.alertsData
  );

  useEffect(() => {
    dispatch(getAllAlerts());
  }, []);

  const handleGetAlertDetail = (id: string) => {
    history.push(`/farmacia/carros-paro/alertas/${id}`);
    dispatch(getAllAlertDetail(id));
  };

  return (
    <sc.CarrosParoContainer>
      <CarrosButtonsLink view={1} />
      <sc.HeaderMessage>
        Aquí se muestran los carros que han sido abiertos y los medicamentos
        faltantes en cada uno de ellos
      </sc.HeaderMessage>
      <sc.TableTitlesContainer columns={"3"}>
        <sc.TitleDescItem>Carro</sc.TitleDescItem>

        <sc.TitleDescItem>Día y hora de uso</sc.TitleDescItem>
        <sc.TitleDescItem>Estado</sc.TitleDescItem>
      </sc.TableTitlesContainer>
      <sc.TableContainer columns={"3"}>
        {!loadingAlerts ? (
          alerts.map((alert) => (
            <sc.ListItem
              key={alert.alertId}
              onClick={() => handleGetAlertDetail(alert.alertId)}
              columns={"3"}
            >
              <sc.DescItem>{alert.crashCartName}</sc.DescItem>

              <sc.DescItem>
                {`${dayjs(alert.date).format("MMMM DD")}  a las ${dayjs(
                  alert.date
                ).format("hh:mm a")}`}
              </sc.DescItem>
              <sc.DescStateItem>
                {/* <sc.CircleStateColor></sc.CircleStateColor> */}
                <p>Faltan {alert.missingProductsCount} artículos</p>
              </sc.DescStateItem>
            </sc.ListItem>
          ))
        ) : (
          <LoaderContainer>
            <GridLoader color={"#CDCFFE"} size={50} />
          </LoaderContainer>
        )}
      </sc.TableContainer>
    </sc.CarrosParoContainer>
  );
};

export default Alertas;
