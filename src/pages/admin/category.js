import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  EditButton,
  SimpleForm,
  Create,
  TextInput,
} from "react-admin";

export const CategoryList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="image" />
      {/* <TextField source="description" /> */}
      <EditButton />
    </Datagrid>
  </List>
);

export const CategoryEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="image" />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);

export const CategoryCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="image" />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);
