import ArrowIconRight from "@assets/Icons/ArrowIconRight";
import { SmallIconCaontainer } from "../../globalStyles";
import React, { useState } from "react";
import * as sc from "./styles";
import ArrowDown from "@assets/Icons/ArrowDown";
import { BiExit } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import "../../index.css";
const Sidebar = () => {
  const [colorOption, setColorOption] = useState<number>(-1);

  const handleColorOption = (index: number) => {
    setColorOption(index);
  };

  return (
    <sc.SideBarContainer>
      <sc.ListModules>
        <sc.CoupleModuleBox>
          <NavLink
            className="modules__titem"
            activeClassName="farmacia_active_link"
            to="/farmacia"
            exact
          >
            <sc.TitleModule>Bodegas</sc.TitleModule>
            <SmallIconCaontainer>
              <ArrowDown />
            </SmallIconCaontainer>
          </NavLink>
          <NavLink
            className="coupleItemModule"
            activeClassName="farmacia_active_link"
            to="/farmacia/bodegas/movimientos"
          >
            <p>Movimientos</p>
            <SmallIconCaontainer heightWidth={"13px"}>
              <ArrowIconRight />
            </SmallIconCaontainer>
          </NavLink>
          <NavLink
            className="coupleItemModule"
            activeClassName="farmacia_active_link"
            to="/farmacia/bodegas/inventario"
          >
            <p>Inventario</p>
            <SmallIconCaontainer heightWidth={"13px"}>
              <ArrowIconRight />
            </SmallIconCaontainer>
          </NavLink>
        </sc.CoupleModuleBox>
        <NavLink
          className="modules__titem"
          activeClassName="farmacia_active_link"
          to="/farmacia/productos"
        >
          <sc.TitleModule>Productos</sc.TitleModule>
          <SmallIconCaontainer>
            <ArrowIconRight />
          </SmallIconCaontainer>
        </NavLink>
        <NavLink
          className="modules__titem"
          activeClassName="farmacia_active_link"
          to="/farmacia/proveedores"
        >
          <sc.TitleModule>Proveedores</sc.TitleModule>
          <SmallIconCaontainer>
            <ArrowIconRight />
          </SmallIconCaontainer>
        </NavLink>
        <NavLink
          className="modules__titem"
          activeClassName="farmacia_active_link"
          to="/farmacia/ordenes-compra"
        >
          <sc.TitleModule>Ordenes Compras</sc.TitleModule>
          <SmallIconCaontainer>
            <ArrowIconRight />
          </SmallIconCaontainer>
        </NavLink>
        <NavLink
          className="modules__titem"
          activeClassName="farmacia_active_link"
          to="/farmacia/carros-paro/carros"
        >
          <sc.TitleModule>Carros Paro</sc.TitleModule>
          <SmallIconCaontainer>
            <ArrowIconRight />
          </SmallIconCaontainer>
        </NavLink>
        {/* <NavLink
          className="modules__titem"
          activeClassName="farmacia_active_link"
          to="/farmacia/traslados"
        >
          <sc.TitleModule>Traslados</sc.TitleModule>
          <SmallIconCaontainer>
            <ArrowIconRight />
          </SmallIconCaontainer>
        </NavLink> */}
        <NavLink
          className="modules__titem"
          activeClassName="farmacia_active_link"
          to="/farmacia/inventario-fisico"
        >
          <sc.TitleModule>Inventario físico</sc.TitleModule>
          <SmallIconCaontainer>
            <ArrowIconRight />
          </SmallIconCaontainer>
        </NavLink>
      </sc.ListModules>
      <sc.Footer>
        <sc.ExitHeader to="/hygea">
          <p>Salir</p>
          <sc.CloseIconContainer>
            <BiExit />
          </sc.CloseIconContainer>
        </sc.ExitHeader>
        <sc.WaterMarc>Developed by LYA ELECTRONIC v:0.0.1</sc.WaterMarc>
      </sc.Footer>
    </sc.SideBarContainer>
  );
};

export default Sidebar;
