import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import './assets/reset.css';

function App() {

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [service, setService] = useState();
  const [payment, setPayment] = useState();
  const [city, setCity] = useState();
  const [unit, setUnit] = useState();

  function submitForm(e) {
    e.preventDefault();

    const validName = name.length >= 4 && name.length <= 40;
    const validPhone = phone.length === 11;
    const validSelect = service !== null || payment !== null || unit !== null;

    if (!validName) return alert("Insira um nome entre 4 e 40 caracteres.");
    else if (!validPhone) return alert("O número de telefone precisa ter 11 dígitos.");
    else if (!validSelect) return alert("A opção selecionada é inválida.");

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
    <Background>
    <Container>
      <Form onSubmit={submitForm}>
        <Label>Nome Completo</Label>
        <Input type="text" id="name" placeholder="Seu nome" required minLength={4} maxLength={40}
        value={name} onChange={e => setName(e.target.value)} />
        <Label>Número de Telefone</Label>
        <Input type="text" id="phone" placeholder="Seu telefone" required minLength={11} maxLength={11}
        value={phone} onChange={e => setPhone(e.target.value)} />
        <Label htmlFor="service">Tipo de Serviço</Label>
        <Select name="service" id="service" required 
        value={service} onChange={e => setService(e.target.value)}>
          <option value={null}>--selecione--</option>
          <option value="haircut">Cabelo</option>
          <option value="beard">Barba</option>
          <option value="both">Cabelo e Barba</option>
        </Select>
        <Label htmlFor="payment">Forma de Pagamento</Label>
        <Select name="payment" id="payment" required 
        value={payment} onChange={e => setPayment(e.target.value)}>
          <option value={null}>--selecione--</option>
          <option value="credit-card">Cartão de Crédito</option>
          <option value="debit-card">Cartão de Débito</option>
          <option value="pix">Pix</option>
          <option value="cash">Dinheiro</option>
        </Select>
        <Label>Cidade</Label>
        <Input type="text" id="city" placeholder="Sua cidade" required
        value={city} onChange={e => setCity(e.target.value)} />
        <Label htmlFor="unit">Filial do Agendamento</Label>
        <Select name="unit" id="unit" required 
        value={unit} onChange={e => setUnit(e.target.value)}>
          <option value={null}>--selecione--</option>
          <option value="1">1</option>
        </Select>
        <Button type="submit">
          Enviar
        </Button>
      </Form>
      <Link onClick={getData}>Buscar dados do servidor.</Link>
    </Container>
    </Background>
  );
}

const Background = styled.div`
  background-color: ${({ theme }) => theme.COLORS.YELLOW};
  width: 100vw;
  height: 100vh;

  display: flex;
`;

const Container = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;

  padding: 40px;
  margin: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

const Label = styled.label`
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

const Input = styled.input`
  width: 280px;
  height: 28px;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_GREY};
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_GREY};
  border-radius: 10px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  padding: 8px;

  &:focus {
      outline: none;
  }
`;

const Select = styled.select`
  width: 280px;
  height: 28px;

  background-color: ${({ theme }) => theme.COLORS.LIGHT_GREY};
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_GREY};
  border-radius: 10px;
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
  font-weight: 700;
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

const Link = styled.p`
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.PURPLE};
  margin-top: 10px;

  cursor: pointer;
`;

export default App;
