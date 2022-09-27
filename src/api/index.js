const clientsArray = [];

let contactsArray = [];

const login = (email, password) => {
  return clientsArray.find(
    (client) => client.email === email && client.password === password
  );
};

const createClient = (data) => {
  clientsArray.push(data);
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
    createClient: createClient,
    loginClient: login,
  },
};
//POST - create client
//POST - login client
//GET - client
//PATCH - edit client

const createContact = (newContact) => {
  let lastID = contactsArray.length ? contactsArray[0].id : 0;

  for (let i = 1; i < contactsArray.length; i++) {
    if (contactsArray[i].id > lastID) {
      lastID = contactsArray[i].id;
    }
  }

  lastID++;

  contactsArray.push({ ...newContact, id: lastID });
};

const contactById = (id) => {
  return contactsArray.find((contact) => contact.id === id);
};

const deleteContactById = (id) => {
  contactsArray = contactsArray.filter((contact) => contact.id !== id);
  return contactsArray;
};

//contacts
export const contactsAPI = {
  GET: {
    allContacts: contactsArray,
    byId: contactById,
  },
  POST: {
    createContacts: createContact,
  },
  DELETE: {
    byId: deleteContactById,
  },
};
//POST - create contact
//GET - contact
//GET - all contacts
//PATCH - edit contact
//DELETE - delete contact
