const clientsArray = [
  {
    name: "weriks",
    lastname: "santos",
    email: "werikscs@email.com",
    phone: "22998026411",
    password: "12345678",
  },
  {
    name: "zezim",
    lastname: "pereira",
    email: "zezim@email.com",
    phone: "22911111111",
    password: "12345678",
  },
];

const contactsArray = [
  {
    name: "zezim",
    lastname: "generic",
    phone: "22911111111",
  },
  {
    name: "mariazin",
    lastname: "pereira",
    phone: "22911111111",
  },
  {
    name: "zezim",
    lastname: "generic",
    phone: "22911111111",
  },
  {
    name: "mariazin",
    lastname: "pereira",
    phone: "22911111111",
  },
  {
    name: "zezim",
    lastname: "generic",
    phone: "22911111111",
  },
  {
    name: "mariazin",
    lastname: "pereira",
    phone: "22911111111",
  },
];

const login = (email, password) => {
  return clientsArray.find(
    (client) => client.email === email && client.password === password
  );
};

const clientByEmail = (email) => {
  return clientsArray.find((client) => client.email === email);
};

//client
export const clientAPI = {
  GET: {
    allClients: clientsArray,
    byEmail: clientByEmail,
  },
  POST: {
    loginClient: login,
  },
};
//POST - create client
//POST - login client
//GET - client
//PATCH - edit client

const createContact = (newContact) => {
  contactsArray.push(newContact);
};

//contacts
export const contactsAPI = {
  GET: {
    allContacts: contactsArray,
  },
  POST: {
    createContacts: createContact,
  },
};
//POST - create contact
//GET - contact
//GET - all contacts
//PATCH - edit contact
//DELETE - delete contact
