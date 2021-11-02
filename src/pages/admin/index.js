import * as React from "react";
import { Admin, Resource } from "react-admin";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import { ProductList, ProductCreate, ProductEdit } from "./product";
// import { CategoryList, CategoryCreate, CategoryEdit } from "./category";
import { myDataProvider } from "./dataProvider";

const AdminPage = () => (
  <Admin
    authProvider={authProvider}
    dashboard={Dashboard}
    dataProvider={myDataProvider}
  >
    <Resource
      name="product"
      list={ProductList}
      edit={ProductEdit}
      create={ProductCreate}
    />
    {/* <Resource
      name="category"
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
    /> */}
  </Admin>
);

export default AdminPage;
