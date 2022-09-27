import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { clientAPI, contactsAPI } from "../../api";
import { BasicDivider } from "../../components/basic-divider";
import { BasicForm } from "../../components/basic-form";
import { BasicWrapper } from "../../components/basic-wrapper";
import { Header } from "../../components/header";
import { createContactFormSchema } from "../../schemas/create-contact";
import { themeMainPages } from "../../styles/theme";
import { formInputs } from "../../utils/form-inputs";

export const ClientProfilePage = () => {
  const [clientData, setClientData] = useState([]);

  const { state } = useLocation();

  const clientEmail = sessionStorage.getItem("@email");

  useEffect(() => {
    // window.location.reload();
    const data = state
      ? contactsAPI.GET.byId(state?.contactID)
      : clientAPI.GET.byEmail(clientEmail);

    setClientData([
      { ...formInputs.name, text: data.name },
      { ...formInputs.lastname, text: data.lastname },
      { ...formInputs.phone, text: data.phone },
    ]);
  }, [state]);

  const handleClientProfile = (data) => {
    console.log(data);
  };

  return (
    <ThemeProvider theme={themeMainPages}>
      <Header />
      <BasicWrapper>
        {state?.contactID ? <h1>Editar contato</h1> : <h1>Meu Perfil</h1>}
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
