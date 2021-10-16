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
} from "react-admin";
// import { useMediaQuery } from "react-responsive";

const ProductTitle = ({ record }) => {
  return <span>product {record ? `"${record.name}"` : ""}</span>;
};

export const ProductList = (props) => {
  // const isTabletOrMobileDevice = useMediaQuery({
  //   query: "(max-device-width: 768px)",
  // });
  return (
    <List {...props}>
      {/* {!isTabletOrMobileDevice ? ( */}
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <ReferenceField source="categoryId" reference="categories">
          <TextField source="id" />
        </ReferenceField>
        <TextField source="image" />
        <EditButton />
      </Datagrid>
    </List>
  );
  // : (
  //   <SimpleList
  //     primaryText={(record) => record.id}
  //     secondaryText={(record) => record.name}
  //     tertiaryText={(record) => record.description}
  //   />
  // )}

  // );
};

export const ProductEdit = (props) => (
  <Edit title={<ProductTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput source="categoryId" reference="categories">
        <SelectInput optionText="name" />
      </ReferenceInput>
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
      <ReferenceInput source="categoryId" reference="categories">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ImageInput required source="image" label="Images" accept="image/*">
        <ImageField source="image" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
