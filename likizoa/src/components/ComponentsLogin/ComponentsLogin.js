import React, { useEffect, useState } from "react";
import styles from "./ComponentsLogin.module.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Configuração Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para carregar dados do Firestore
async function carregarDados() {
  try {
    const clientesSnapshot = await getDocs(collection(db, "clientes"));
    const funcionariosSnapshot = await getDocs(collection(db, "funcionarios"));

    const clientes = clientesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const funcionarios = funcionariosSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return { clientes, funcionarios };
  } catch (error) {
    console.error("Erro ao buscar dados do Firestore:", error);
    throw new Error("Erro ao buscar dados. Tente novamente.");
  }
}

// Função para limpar CNPJ/CPF
function limparCNPJCPF(valor) {
  return valor.replace(/\D/g, ""); // Remove todos os caracteres que não são dígitos
}

// Função para validar CPF
function validarCPF(cpf) {
  cpf = limparCNPJCPF(cpf); // Remove caracteres especiais
  return cpf.length === 11; // CPF deve ter 11 dígitos
}

// Função para validar CNPJ
function validarCNPJ(cnpj) {
  cnpj = limparCNPJCPF(cnpj);
  return cnpj.length === 14; // CNPJ deve ter 14 dígitos
}

function ComponentsLogin() {
  const [userType, setUserType] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [cpfValido, setCpfValido] = useState(false);
  const [clientes, setClientes] = useState([]);
  const [cnpjValido, setCnpjValido] = useState(false);
  const [clienteLink, setClienteLink] = useState(""); // Armazena o link do cliente
  const [clientePlanilha, setClientePlanilha] = useState(""); //Armazena as planilhas refentes ao cliente
  const [cpfPlanilhas, setCpfPlanilhas] = useState([]); //Armazena as planilhas refentes ao cliente

  const handleCpfChange = async (e) => {
    const cpf = limparCNPJCPF(e.target.value);

    if (validarCPF(cpf)) {
      try {
        const dados = await carregarDados();
        const funcionario = dados.funcionarios.find((f) => f.cpf === cpf);

        if (funcionario) {
          setCpfValido(true); // CPF validado
          setClientes(funcionario.clientes); // Define os clientes vinculados ao funcionário
          setCpfPlanilhas(funcionario.planilhas);
        } else {
          setCpfValido(false); // CPF não encontrado
          setClientes([]);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do Firestore:", error);
        alert("Erro ao buscar dados. Tente novamente.");
      }
    } else {
      setCpfValido(false); // CPF inválido
      setClientes([]);
    }
  };

  const handleCnpjChange = async (e) => {
    const cnpj = limparCNPJCPF(e.target.value);

    if (validarCNPJ(cnpj)) {
      try {
        const dados = await carregarDados();
        const cliente = dados.clientes.find((c) => c.cnpj === cnpj);

        if (cliente) {
          setCnpjValido(true); // CNPJ validado
          setClienteLink(cliente.link); // Armazena o link relacionado ao CNPJ
          setClientePlanilha(cliente.planilha); // Armazena a planilha relacionado ao CNPJ
        } else {
          setCnpjValido(false); // CNPJ não encontrado
          setClienteLink(""); // Limpa o link
          setClientePlanilha(""); // Limpa a planilha
        }
      } catch (error) {
        console.error("Erro ao buscar dados do Firestore:", error);
        alert("Erro ao buscar dados. Tente novamente.");
      }
    } else {
      setCnpjValido(false); // CNPJ inválido
      setClienteLink(""); // Limpa o link
    }
  };

  const handleSubmitCliente = async (e) => {
    const testePost = "https://temp.jornadatrabalho3.com.br/teste.php"

    e.preventDefault();
    if (!cnpjValido) {
      setShowAlert(true);
      return;
    }
    try {
        // Fazendo a requisição POST
        const response = await fetch(testePost, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ variavel: `${testePost}` }),
        });

        if (response.ok) {
            window.location.href = testePost; // Redireciona após o POST
        } else {
            console.error('Erro ao enviar dados ao sistema:', response.statusText);
            alert('Erro ao acessar o sistema. Tente novamente.');
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Erro ao acessar o sistema. Tente novamente.');
    }
  };

  const handleSubmitPlanilha = (e) => {
    e.preventDefault();
    if (!cnpjValido) {
      setShowAlert(true);
      return;
    }
    window.location.href = clientePlanilha; // Redireciona para o link do cliente
  };

  // Função para submissão de funcionário
  const handleSubmitFuncionario = async (e) => {
    e.preventDefault();
    const clienteLink = document.getElementById("cliente-vinculado").value;

    if (!clienteLink) {
      setShowAlert(true);
      return;
    }

    try {
        // Fazendo a requisição POST
        const response = await fetch(clienteLink, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ variavel: `${clienteLink}` }),
        });

        if (response.ok) {
            window.location.href = clienteLink; // Redireciona após o POST
        } else {
            console.error('Erro ao enviar dados ao sistema:', response.statusText);
            alert('Erro ao acessar o sistema. Tente novamente.');
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Erro ao acessar o sistema. Tente novamente.');
    }

    window.location.href = clienteLink; // Redireciona para o link do cliente selecionado
  };

  // Função para submissão de funcionário planilha
  const handleSubmitFuncionarioPlanilha = (e) => {
    e.preventDefault();
    const clientePlanilha = document.getElementById("planilha-vinculada").value;

    if (!clientePlanilha) {
      setShowAlert(true);
      return;
    }

    window.location.href = clientePlanilha; // Redireciona para o link do cliente selecionado
  };

  useEffect(() => {
    const clienteSection = document.getElementById("cliente-section");
    const funcionarioSection = document.getElementById("funcionario-section");

    if (userType === "cliente") {
      clienteSection.style.display = "block";
      funcionarioSection.style.display = "none";
    } else if (userType === "funcionario") {
      clienteSection.style.display = "none";
      funcionarioSection.style.display = "block";
    } else {
      clienteSection.style.display = "none";
      funcionarioSection.style.display = "none";
    }
  }, [userType]);

  return (
    <div className={styles.main}>
      <div className={styles.reflection}></div>
      <h1>Área de Login</h1>
      <form className={styles.login_form}>
        {/* Seleção de tipo de login */}
        <label htmlFor="user-type">Selecione o tipo de login:</label>
        <select
          id="user-type"
          name="user-type"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          required
        >
          <option value="">Escolha...</option>
          <option value="cliente">Cliente</option>
          <option value="funcionario">Colaborador</option>
        </select>

        {/* Seção de Cliente */}
        <div id="cliente-section" style={{ display: "none" }}>
          <label htmlFor="cnpj">Digite o CNPJ:</label>
          <input
            className={styles.input_txt}
            type="text"
            id="cnpj"
            placeholder="Digite o CNPJ"
            onChange={handleCnpjChange} // Validação do CNPJ
          />
          {cnpjValido && (
            <>
              {" "}
              <button
                className={styles.submit_btn}
                onClick={handleSubmitCliente}
              >
                Acessar Sistema
              </button>
              {clientePlanilha && (
                <button
                  className={styles.submit_btn}
                  onClick={handleSubmitPlanilha}
                >
                  Acessar Planilha
                </button>
              )}
            </>
          )}
        </div>

        {/* Seção de Funcionário */}
        <div id="funcionario-section" style={{ display: "none" }}>
          <label htmlFor="cpf">Digite o CPF:</label>
          <input
            className={styles.input_txt}
            type="text"
            id="cpf"
            placeholder="Digite o CPF"
            onChange={handleCpfChange} // Validação em tempo real
          />
          {cpfValido && (
            <>
              <label htmlFor="cliente-vinculado">
                Selecione o Cliente Vinculado:
              </label>
              <select id="cliente-vinculado">
                <option value="">Escolha um cliente...</option>
                {clientes.map((cliente, index) => (
                  <option key={index} value={cliente.link}>
                    {cliente.nome}
                  </option>
                ))}
              </select>
              <button
                className={styles.submit_btn_fun}
                onClick={handleSubmitFuncionario}
              >
                Acessar Sistema
              </button>

              {cpfPlanilhas && (
                <>
                  <label
                    className={styles.planilhaLabel}
                    htmlFor="planilha-vinculada"
                  >
                    Selecione a Planilha do Cliente:
                  </label>
                  <select id="planilha-vinculada">
                    <option value="">Escolha um cliente...</option>
                    {cpfPlanilhas.map((planilha, index) => (
                      <option key={index} value={planilha.link}>
                        {planilha.cliente}
                      </option>
                    ))}
                  </select>
                  <button
                    className={styles.submit_btn_fun}
                    onClick={handleSubmitFuncionarioPlanilha}
                  >
                    Acessar Planilha
                  </button>
                </>
              )}
            </>
          )}
        </div>

        {/* Alertas */}
        {showAlert && (
          <div id="alert" className={styles.alert}>
            <p className={styles.alertMessage}>
              Por favor, preencha corretamente os dados.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default ComponentsLogin;
