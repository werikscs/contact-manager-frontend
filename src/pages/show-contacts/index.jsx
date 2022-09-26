import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { contactsAPI } from "../../api";
import { BasicWrapper } from "../../components/basic-wrapper";
import { Header } from "../../components/header";
import { themeMainPages } from "../../styles/theme";
import { UlStyled } from "./style";

export const ShowContactsPage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(contactsAPI.GET.allContacts);
  }, []);

  return (
    <ThemeProvider theme={themeMainPages}>
      <Header />
      <BasicWrapper>
        <h1>Meus Contatinhos</h1>
        <UlStyled>
          {contacts.map((contact, i) => (
            <li key={i}>
              <div className="data">
                <p>
                  Nome:{" "}
                  <span>
                    {contact.name} {contact.lastname}
                  </span>
                </p>
                <p>
                  Telefone: <span>{contact.phone}</span>
                </p>
              </div>
              <div className="options">
                <button className="edit-btn">editar</button>
                <button className="delete-btn">excluir</button>
              </div>
            </li>
          ))}
        </UlStyled>
      </BasicWrapper>
    </ThemeProvider>
  );
};
