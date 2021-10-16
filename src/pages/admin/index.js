import * as React from "react";
import { Admin, Resource, } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import { CategoryList, CategoryCreate, CategoryEdit } from "./category";
import { ProductList, ProductCreate, ProductEdit } from "./products";
import { myDataProvider } from "./dataProvider";

const AdminPage = () => (
  <Admin
    authProvider={authProvider}
    dashboard={Dashboard}
    dataProvider={myDataProvider}
  >
    <Resource
      name="categories"
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
    />
    <Resource
      name="products"
      list={ProductList}
      edit={ProductEdit}
      create={ProductCreate}
    />
  </Admin>
);

export default AdminPage;
