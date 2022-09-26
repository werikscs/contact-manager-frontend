import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { contactsAPI } from "../../api";
import { BasicWrapper } from "../../components/basic-wrapper";
import { Header } from "../../components/header";
import { themeMainPages } from "../../styles/theme";
import { UlStyled } from "./style";

export const ShowContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setContacts(contactsAPI.GET.allContacts);
  }, []);

  const handleEditContact = (contactID) => {
    return navigate("/profile", { state: { contactID } });
  };

  const handleDeleteContact = (contactID) => {
    const newContacts = contactsAPI.DELETE.byId(contactID);
    setContacts([...newContacts]);
  };

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
                <button
                  onClick={() => handleEditContact(contact.id)}
                  className="edit-btn">
                  editar
                </button>
                <button
                  onClick={() => handleDeleteContact(contact.id)}
                  className="delete-btn">
                  excluir
                </button>
              </div>
            </li>
          ))}
        </UlStyled>
      </BasicWrapper>
    </ThemeProvider>
  );
};
