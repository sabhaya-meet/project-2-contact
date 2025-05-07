import { useState } from "react";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import ContactHeader from "./components/contactHeader/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </>
  );
}

export default App;
