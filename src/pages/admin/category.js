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
  ImageInput,
  ImageField,
} from "react-admin";

const CategoryTitle = ({ record }) => {
  return <span>category {record ? `"${record.name}"` : ""}</span>;
};

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

export const CategoryEdit = (props) => {
  return (
    <Edit title={<CategoryTitle />} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="description" />
        <ImageField source="image" />
        <ImageInput source="image" label="Image" accept="image/*">
          <ImageField source="image" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};

export const CategoryCreate = (props) => (
  <Create title={<CategoryTitle />} {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <ImageInput source="image" label="Images" accept="image/*">
        <ImageField source="image" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
