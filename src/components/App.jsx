import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createContact(contact) {
  return (
    <div>
      <Card
        key={contact.id}
        id={contact.id}
        name={contact.name}
        img={contact.imgURL}
        phone={contact.phone}
        email={contact.email}
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createContact)}
      
    </div>
  );
}

export default App;
