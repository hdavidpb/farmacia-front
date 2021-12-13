import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { RiArrowLeftSLine } from "react-icons/ri";
import CarrosButtonsLink from "./CarrosButtonsLink";
import * as sc from "./styles";
import AlertTableDetail from "./AlertTableDetail";
import { RootState } from "@redux/store";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import updateLocale from "dayjs/plugin/updateLocale";
import { months } from "./const/const";
import {
  getAllAlertDetail,
  putLockCode,
} from "@redux/features/crashcarts/services";
import { LoaderContainer } from "@components/Inventario/styles";
import { ClipLoader, GridLoader } from "react-spinners";
import { detectReadyElement } from "@redux/features/crashcarts/crashcartsSlice";
import { ILockData } from "@redux/features/crashcarts/interfaces";

dayjs.extend(customParseFormat);
dayjs.extend(updateLocale);
dayjs.updateLocale("en", { months });
const AlertasDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const { headerDetail, loadingAlertDetail, alertDetail, lockOk, lockLoading } =
    useSelector(
      (store: RootState) => store.crashCarts.alertsData.alertDetailData
    );
  const [padLockCode, setPadLockCode] = useState<string>("");

  useEffect(() => {
    const readyElement = alertDetail?.some((alert) => !alert.ready);

    dispatch(detectReadyElement(readyElement!));
  }, [alertDetail]);

  useEffect(() => {
    if (headerDetail) {
      return;
    } else {
      dispatch(getAllAlertDetail(id));
    }
  }, [headerDetail]);

  useEffect(() => {
    if (lockOk) dispatch(getAllAlertDetail(id));
  }, [lockOk]);

  const hadlePutPadLockCode = (crashCartId: string, padlockCode: string) => {
    const data: ILockData = {
      crashCartId,
      padlockCode,
    };

    if (padlockCode.trim()) {
      dispatch(putLockCode(data));
    } else {
      alert("No hay código!");
    }
  };

  return alertDetail?.length !== 0 ? (
    <sc.CarrosParoContainer>
      {!loadingAlertDetail ? (
        <>
          <CarrosButtonsLink view={1} />

          <sc.HeaderDetails>
            <sc.IconHeaderBox to="/farmacia/carros-paro/alertas">
              <RiArrowLeftSLine />
            </sc.IconHeaderBox>
            <sc.InfoContainer>
              <sc.DescInfo>{headerDetail?.crashCartName}</sc.DescInfo>

              <sc.DescInfo>
                {`${dayjs(headerDetail?.date).format("MMMM DD")}  a las ${dayjs(
                  headerDetail?.date
                ).format("hh:mm a")}`}
              </sc.DescInfo>
              <sc.DescInfo statusColor={true}>{`Faltan ${
                !lockOk ? headerDetail?.missingProductsCount : 0
              } artículos`}</sc.DescInfo>
            </sc.InfoContainer>
            {lockLoading ? (
              <ClipLoader size={30} />
            ) : (
              <sc.LockContainer>
                <sc.IConLockContainer
                  disabled={lockOk ? true : false}
                  locked={lockOk!}
                  onClick={() =>
                    hadlePutPadLockCode(headerDetail?.crashCartId!, padLockCode)
                  }
                >
                  {lockOk ? <FaLock /> : <FaLockOpen />}
                </sc.IConLockContainer>
                {lockOk === false ? (
                  <input
                    onChange={(e) => setPadLockCode(e.target.value)}
                    value={padLockCode}
                    type="text"
                    placeholder="código del candado"
                  />
                ) : null}
              </sc.LockContainer>
            )}
          </sc.HeaderDetails>
          <sc.FooterTablesContainer>
            <sc.TablesMessage>
              Aquí se muestran los medicamentos faltantes según su tipo
            </sc.TablesMessage>
            <sc.TablesContainer>
              {alertDetail?.map((med, index) => (
                <AlertTableDetail key={index} medicaments={med} />
              ))}
            </sc.TablesContainer>
          </sc.FooterTablesContainer>
        </>
      ) : (
        <LoaderContainer>
          <GridLoader color={"#CDCFFE"} size={50} />
        </LoaderContainer>
      )}
    </sc.CarrosParoContainer>
  ) : (
    <sc.CarrosParoContainer>
      <LoaderContainer>
        <GridLoader color={"#CDCFFE"} size={50} />
      </LoaderContainer>
    </sc.CarrosParoContainer>
  );
};

export default AlertasDetail;
