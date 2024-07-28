import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function App() {
  //useState with objects?

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [service, setService] = useState();
  const [payment, setPayment] = useState();
  const [city, setCity] = useState();
  const [unit, setUnit] = useState();

  function submitForm(e) {
    e.preventDefault();

    const data = {
      name, phone, service, payment, city, unit
    };

    axios.post('http://localhost:5000', data)
      .then(response => console.log(response.data))
      .catch(error => console.log(error.message))
  }

  function getData() {
    axios.get('http://localhost:5000')
      .then(response => console.log(response.data))
      .catch(error => console.log(error.message))
  }

  return (
    <form onSubmit={submitForm}>
      <label>Nome Completo</label>
      <input type="text" placeholder="Seu nome" required minLength={4} maxLength={40}
      value={name} onChange={e => setName(e.target.value)} />

      <label>Número de Telefone</label>
      <input type="text" placeholder="Seu telefone" required minLength={11} maxLength={11}
      value={phone} onChange={e => setPhone(e.target.value)} />

      <label htmlFor="service">Tipo de Serviço</label>
      <select name="service" id="service" required onChange={e => setService(e.target.value)}>
        <option value={service}>--selecione--</option>
        <option value="haircut">Cabelo</option>
        <option value="beard">Barba</option>
        <option value="both">Cabelo e Barba</option>
      </select>

      <label htmlFor="payment">Forma de Pagamento</label>
      <select name="payment" id="payment" required onChange={e => setPayment(e.target.value)}>
        <option value={payment}>--selecione--</option>
        <option value="credit-card">Cartão de Crédito</option>
        <option value="debit-card">Cartão de Débito</option>
        <option value="pix">Pix</option>
        <option value="cash">Dinheiro</option>
      </select>

      <label>Cidade</label>
      <input type="text" placeholder="Sua cidade" required
      value={city} onChange={e => setCity(e.target.value)} />

      <label htmlFor="unit">Filial do Agendamento</label>
      <select name="unit" id="unit" required onChange={e => setUnit(e.target.value)}>
        <option value={unit}>--selecione--</option>
        <option value="1">1</option>
      </select>


      <button type="submit">
        Enviar
      </button>

      <button type="button" onClick={getData}>Buscar</button>
    </form>
  );
}

const Container = styled.section`

`;

export default App;
