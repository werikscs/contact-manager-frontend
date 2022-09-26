import { ThemeProvider } from "styled-components";
import { contactsAPI } from "../../api";
import { BasicDivider } from "../../components/basic-divider";
import { BasicForm } from "../../components/basic-form";
import { BasicWrapper } from "../../components/basic-wrapper";
import { Header } from "../../components/header";
import { createContactFormSchema } from "../../schemas/create-contact";
import { themeMainPages } from "../../styles/theme";
import { formInputs } from "../../utils/form-inputs";

export const CreateContactPage = () => {
  const createContactPageComponents = [
    formInputs.name,
    formInputs.lastname,
    formInputs.phone,
  ];

  const handleCreateContact = (data) => {
    contactsAPI.POST.createContacts(data);
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
