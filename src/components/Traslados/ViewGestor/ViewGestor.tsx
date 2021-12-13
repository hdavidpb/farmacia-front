import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import * as sc from "../styles";
import { TitleViewGestorTable } from "../TrasladosView.tsx/const";
const ViewGestor = () => {
  return (
    <sc.TrasladosContainer viewGestor={true}>
      <sc.FilterContainer mTop={true}>
        <sc.FielterFieldsBox>
          <h6>Filtrar por medicamento</h6>
          <sc.InputContainer>
            <sc.IconSeacrhContainer>
              <BiSearchAlt />
            </sc.IconSeacrhContainer>
            <input type="text" placeholder="Buscar" />
          </sc.InputContainer>
        </sc.FielterFieldsBox>
        <sc.FielterFieldsBox>
          <h6>Filtrar por Fecha</h6>
          <sc.InputContainer>
            <sc.IconSeacrhContainer>
              <BiSearchAlt />
            </sc.IconSeacrhContainer>
            <input type="date" />
          </sc.InputContainer>
        </sc.FielterFieldsBox>
      </sc.FilterContainer>
      <sc.TableContainer viewGestor={true}>
        <sc.TitlesTableContainer viewGestor={true}>
          {TitleViewGestorTable.map((title, index) => (
            <sc.DescTitleItem key={index}>{title}</sc.DescTitleItem>
          ))}
        </sc.TitlesTableContainer>
        <sc.TableListContainer viewGestor={true}>
          <sc.ItemListTable viewGestor={true}>
            <sc.DescItemList viewGestor={true}>
              01 / Julio / 2020
            </sc.DescItemList>
            <sc.DescItemList>En proceso</sc.DescItemList>
            <sc.DescItemList>MC000468</sc.DescItemList>
            <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.BtnsContainerList>
              <sc.BtnOption background="#86E97F">Aprobar</sc.BtnOption>
              <sc.BtnOption background="#FF5A5A">Ignorar</sc.BtnOption>
            </sc.BtnsContainerList>
          </sc.ItemListTable>
          <sc.ItemListTable viewGestor={true}>
            <sc.DescItemList viewGestor={true}>
              01 / Julio / 2020
            </sc.DescItemList>
            <sc.DescItemList>En proceso</sc.DescItemList>
            <sc.DescItemList>MC000468</sc.DescItemList>
            <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.BtnsContainerList>
              <sc.BtnOption background="#86E97F">Aprobar</sc.BtnOption>
              <sc.BtnOption background="#FF5A5A">Ignorar</sc.BtnOption>
            </sc.BtnsContainerList>
          </sc.ItemListTable>
          <sc.ItemListTable viewGestor={true}>
            <sc.DescItemList viewGestor={true}>
              01 / Julio / 2020
            </sc.DescItemList>
            <sc.DescItemList>En proceso</sc.DescItemList>
            <sc.DescItemList>MC000468</sc.DescItemList>
            <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.BtnsContainerList>
              <sc.BtnOption background="#86E97F">Aprobar</sc.BtnOption>
              <sc.BtnOption background="#FF5A5A">Ignorar</sc.BtnOption>
            </sc.BtnsContainerList>
          </sc.ItemListTable>
          <sc.ItemListTable viewGestor={true}>
            <sc.DescItemList viewGestor={true}>
              01 / Julio / 2020
            </sc.DescItemList>
            <sc.DescItemList>En proceso</sc.DescItemList>
            <sc.DescItemList>MC000468</sc.DescItemList>
            <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.BtnsContainerList>
              <sc.BtnOption background="#86E97F">Aprobar</sc.BtnOption>
              <sc.BtnOption background="#FF5A5A">Ignorar</sc.BtnOption>
            </sc.BtnsContainerList>
          </sc.ItemListTable>
          <sc.ItemListTable viewGestor={true}>
            <sc.DescItemList viewGestor={true}>
              01 / Julio / 2020
            </sc.DescItemList>
            <sc.DescItemList>En proceso</sc.DescItemList>
            <sc.DescItemList>MC000468</sc.DescItemList>
            <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.BtnsContainerList>
              <sc.BtnOption background="#86E97F">Aprobar</sc.BtnOption>
              <sc.BtnOption background="#FF5A5A">Ignorar</sc.BtnOption>
            </sc.BtnsContainerList>
          </sc.ItemListTable>
          <sc.ItemListTable viewGestor={true}>
            <sc.DescItemList viewGestor={true}>
              01 / Julio / 2020
            </sc.DescItemList>
            <sc.DescItemList>En proceso</sc.DescItemList>
            <sc.DescItemList>MC000468</sc.DescItemList>
            <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.BtnsContainerList>
              <sc.BtnOption background="#86E97F">Aprobar</sc.BtnOption>
              <sc.BtnOption background="#FF5A5A">Ignorar</sc.BtnOption>
            </sc.BtnsContainerList>
          </sc.ItemListTable>
          <sc.ItemListTable viewGestor={true}>
            <sc.DescItemList viewGestor={true}>
              01 / Julio / 2020
            </sc.DescItemList>
            <sc.DescItemList>En proceso</sc.DescItemList>
            <sc.DescItemList>MC000468</sc.DescItemList>
            <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.BtnsContainerList>
              <sc.BtnOption background="#86E97F">Aprobar</sc.BtnOption>
              <sc.BtnOption background="#FF5A5A">Ignorar</sc.BtnOption>
            </sc.BtnsContainerList>
          </sc.ItemListTable>
          <sc.ItemListTable viewGestor={true}>
            <sc.DescItemList viewGestor={true}>
              01 / Julio / 2020
            </sc.DescItemList>
            <sc.DescItemList>En proceso</sc.DescItemList>
            <sc.DescItemList>MC000468</sc.DescItemList>
            <sc.DescItemList>PIPERACILINA TAZOBACTAM</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.DescItemList>450mg</sc.DescItemList>
            <sc.BtnsContainerList>
              <sc.BtnOption background="#86E97F">Aprobar</sc.BtnOption>
              <sc.BtnOption background="#FF5A5A">Ignorar</sc.BtnOption>
            </sc.BtnsContainerList>
          </sc.ItemListTable>
        </sc.TableListContainer>
      </sc.TableContainer>
    </sc.TrasladosContainer>
  );
};

export default ViewGestor;
