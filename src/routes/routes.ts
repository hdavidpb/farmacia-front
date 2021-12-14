import Bodegas from "@components/Bodegas/Bodegas";
import Alertas from "@components/CarrosParo/Alertas";
import AlertasDetail from "@components/CarrosParo/AlertasDetail";
import Carros from "@components/CarrosParo/Carros";
import InventarioFisico from "@components/Inventario-fisico/InventarioFisico";
import Inventario from "@components/Inventario/Inventario";
import Movimientos from "@components/Movimientos/Movimientos";
import DetailsOrders from "@components/OrdenesCompra/Details/DetailsOrders";
import Signing from "@components/OrdenesCompra/Details/Signing";
import { ListaCompras } from "@components/OrdenesCompra/ListaCompras/ListaCompras";
import OrdenesTable from "@components/OrdenesCompra/Ordenes/OrdenesTable";
import OrdenesCompra from "@components/OrdenesCompra/OrdenesCompra";
import FichaTecnica from "@components/Productos/FichaTecnica/FichaTecnica";
import Productos from "@components/Productos/Productos";
import Proveedores from "@components/Proveedores/Proveedores";
import ProviderDetails from "@components/Proveedores/ProviderDetails/ProviderDetails";
import Traslados from "@components/Traslados/TrasladosView.tsx/Traslados";
import ViewGestor from "@components/Traslados/ViewGestor/ViewGestor";
export const bodegasPath = "/farmacia";
export const movementsPath = "/farmacia/bodegas/movimientos";
export const inventoryPath = "/farmacia/bodegas/inventario";
export const productsPath = "/farmacia/productos";
export const providersPath = "/farmacia/proveedores";
export const ordernesCompraPath = "/farmacia/ordenes-compra";
export const crashscartsCarsPath = "/farmacia/carros-paro/carros";
export const crashcarstAlertsPath = "/farmacia/carros-paro/alertas";
export const crashcarsAlertDetailPath = "/farmacia/carros-paro/alertas/:id";
export const shopingListPath = "/farmacia/ordenes-compra/lista-compras";
export const ordersTablePath = "/farmacia/ordenes-compra/ordenes-table";
export const ordersDetailsPath =
  "/farmacia/ordenes-compra/ordenes-table/detalles/:id";
export const fichaTecnicaPath = "/farmacia/productos/ficha-tecnica/:id";
export const providerDetailspath = "/farmacia/proveedores/details/:id";
export const ApproveOrderSignPath = "/farmacia/orders/sign/:id";
export const trasladosPath = "/farmacia/traslados";
export const gestorViewPath = "/farmacia/traslados/gestor-view";
export const physicalInventoryPath = "/farmacia/inventario-fisico";
export const publicRoutes = [
  { component: Bodegas, path: bodegasPath, exact: true },
  { component: Movimientos, path: movementsPath, exact: true },
  { component: Inventario, path: inventoryPath, exact: true },
  { component: Productos, path: productsPath, exact: true },
  { component: Proveedores, path: providersPath, exact: true },
  { component: ProviderDetails, path: providerDetailspath, exact: true },
  { component: OrdenesCompra, path: ordernesCompraPath, exact: true },
  { component: Carros, path: crashscartsCarsPath, exact: true },
  { component: Alertas, path: crashcarstAlertsPath, exact: true },
  { component: Traslados, path: trasladosPath, exact: true },
  { component: AlertasDetail, path: crashcarsAlertDetailPath, exact: true },
  { component: ListaCompras, path: shopingListPath, exact: true },
  { component: OrdenesTable, path: ordersTablePath, exact: true },
  { component: DetailsOrders, path: ordersDetailsPath, exact: true },
  { component: FichaTecnica, path: fichaTecnicaPath, exact: true },
  { component: ViewGestor, path: gestorViewPath, exact: true },
  { component: InventarioFisico, path: physicalInventoryPath, exact: true },
  { component: Signing, path: ApproveOrderSignPath, exact: true },
];
