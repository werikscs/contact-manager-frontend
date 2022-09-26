import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { clientAPI } from "../../api";
import { BasicDivider } from "../../components/basic-divider";
import { BasicForm } from "../../components/basic-form";
import { BasicWrapper } from "../../components/basic-wrapper";
import { Header } from "../../components/header";
import { createContactFormSchema } from "../../schemas/create-contact";
import { themeMainPages } from "../../styles/theme";
import { formInputs } from "../../utils/form-inputs";

export const ClientProfilePage = () => {
  const [clientData, setClientData] = useState([]);

  useEffect(() => {
    const data = clientAPI.GET.byEmail("werikscs@email.com");

    setClientData([
      { ...formInputs.name, text: data.name },
      { ...formInputs.lastname, text: data.lastname },
      { ...formInputs.phone, text: data.phone },
    ]);
  }, []);

  // console.log(clientProfilePage);

  const handleClientProfile = (data) => {
    console.log(data);
  };

  return (
    <ThemeProvider theme={themeMainPages}>
      <Header />
      <BasicWrapper>
        <h1>Meu Perfil</h1>
        <BasicDivider />
        {clientData && (
          <BasicForm
            headerText="Entrar"
            inputComponents={clientData}
            schema={createContactFormSchema}
            submitButtonText="Salvar Alterações"
            onSubmit={handleClientProfile}
          />
        )}
      </BasicWrapper>
    </ThemeProvider>
  );
};
