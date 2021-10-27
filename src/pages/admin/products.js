import * as React from "react";
import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  EditButton,
  Create,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  ImageField,
  ImageInput,
  BooleanInput,
  BooleanField,
  SimpleList,
} from "react-admin";
import { useMediaQuery } from "react-responsive";

const ProductTitle = ({ record }) => {
  return <span>product {record ? `"${record.name}"` : ""}</span>;
};

export const ProductList = (props) => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 768px)",
  });
  return (
    <List {...props}>
      {!isTabletOrMobileDevice ? (
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          {/* <ReferenceField source="categoryId" reference="categories"> */}
            <TextField source="categoryId" />
          {/* </ReferenceField> */}
          <BooleanField source="hot" />
          <BooleanField source="featured" />
          <EditButton />
        </Datagrid>
      ) : (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.hot}
          tertiaryText={(record) => record.categoryId}
        />
      )}
    </List>
  );
};

export const ProductEdit = (props) => (
  <Edit title={<ProductTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="description" />
      {/* <ReferenceInput source="categoryId" reference="categories"> */}
        <TextInput source="categoryId" />
      {/* </ReferenceInput> */}
      <TextInput source="material" />
      <TextInput source="dimensions" />
      <TextInput source="weight" />
      <BooleanInput label="hot" source="hot" />
      <BooleanInput label="featured" source="featured" />
      {/* <ImageInput source="image" label="Images" accept="image/*"> */}
      <ImageField source="image" />
      {/* </ImageInput> */}
    </SimpleForm>
  </Edit>
);

export const ProductCreate = (props) => (
  <Create title={<ProductTitle />} {...props}>
    <SimpleForm>
      <TextInput required source="name" />
      <TextInput required source="description" />
      {/* <ReferenceInput source="categoryId" reference="categories"> */}
        <TextInput source="categoryId" />
      {/* </ReferenceInput> */}
      <TextInput source="material" />
      <TextInput source="dimensions" />
      <TextInput source="weight" />
      <BooleanInput label="Hot" source="hot" initialValue={true} />
      <BooleanInput label="Featured" source="featured" initialValue={true} />
      <ImageInput required source="image" label="Images" accept="image/*">
        <ImageField source="image" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
