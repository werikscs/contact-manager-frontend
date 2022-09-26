import { ThemeProvider } from "styled-components";
import { BasicDivider } from "../../components/basic-divider";
import { BasicForm } from "../../components/basic-form";
import { BasicWrapper } from "../../components/basic-wrapper";
import { Header } from "../../components/header";
import { createContactFormSchema } from "../../schemas/create-contact";
import { themeMainPages } from "../../styles/theme";

export const CreateContactPage = () => {
  const createContactPageComponents = [
    {
      label: "Nome",
      type: "text",
      name: "name",
      placeholder: "Digite seu nome",
    },
    {
      label: "Sobrenome",
      type: "text",
      name: "lastname",
      placeholder: "Digite seu sobrenome",
    },
    {
      label: "Telefone",
      type: "number",
      name: "phone",
      placeholder: "Digite um telefone",
    },
  ];

  const handleCreateContact = (data) => {
    console.log(data);
  };

  return (
    <ThemeProvider theme={themeMainPages}>
      <Header />
      <BasicWrapper>
        <h1>Criar Contatinho</h1>
        <BasicDivider />
        <BasicForm
          headerText="Entrar"
          inputComponents={createContactPageComponents}
          schema={createContactFormSchema}
          submitButtonText="Criar"
          onSubmit={handleCreateContact}
        />
      </BasicWrapper>
    </ThemeProvider>
  );
};
