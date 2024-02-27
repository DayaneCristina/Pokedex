import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(false);

  const handleLogin = async () => {
    setDisabledBtn(true);
    setLoading(true);

    if (!email | !senha) {
      setError("Preencha todos os campos");
      setDisabledBtn(false);
      setLoading(false);
      return;
    }

    const res = await signin(email, senha);

    if (res) {
      setError(res);
      setLoading(false);
      setDisabledBtn(false);
      return;
    }

    navigate("/home");
  };

  const buttonText = loading ? "Entrando..." : "Entrar";

  return (
    <C.Container>
      <C.Wrapper>
        <C.Content>
          <Input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <Input
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          <C.labelError>{error}</C.labelError>
          <C.ButtonWrapper>
            <Button
              Text={buttonText}
              Disabled={disabledBtn}
              onClick={handleLogin}
            />
            <C.LabelSignup>
              Não tem uma conta?
              <C.Strong>
                <Link to="/signup">&nbsp;Registre-se</Link>
              </C.Strong>
            </C.LabelSignup>
          </C.ButtonWrapper>
        </C.Content>
      </C.Wrapper>
    </C.Container>
  );
};

export default Signin;
