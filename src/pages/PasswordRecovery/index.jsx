import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Logo } from "../../components/Logo";
import {
  Container,
  ContainerFlex,
  ContainerHeaderLogin,
  ContainerImage,
  ContentContainer,
  ContainerAccount,
} from "./styles";
import passwordRecoveryImg from "/src/images/undraw_forgot_password_re_hxwm 1.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useUser from "../../providers/User";

export const PasswordRecovery = () => {
  document.title = "Recuperar senha - BoraRachar";

  const { changePassword } = useUser();
  const passwordRecoverySchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    newPassword: yup
      .string()
      .matches(
        /.*[a-zA-Z].*/,
        "Precisa conter pelo menos uma letra, podendo ser maiúscula"
      )
      .matches(/^^(?=.*[0-9])/, "Precisa conter pelo menos um número")
      .matches(
        /(?=.*[!@#$%^&*])/,
        "Precisa conter pelo menos um símbolo: @,%,#, etc"
      )
      .matches(
        /[a-zA-Z0-9!@#$%^&*]{8,}$/,
        "Precisa conter pelo menos 8 caracteres"
      )
      .required("Nova senha obrigatória"),
    newPassword_confirm: yup
      .string()
      .oneOf([yup.ref("newPassword")], "As senhas não são idênticas")
      .required("Confirmação de nova senha obrigatória"),
    cpf: yup.string().required("CPF obrigatório"),
    phone: yup.string().required("Celular obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordRecoverySchema),
  });

  const history = useHistory();
  return (
    <Container>
      <ContentContainer>
        <ContainerFlex>
          <ContainerHeaderLogin>
            <Logo darkLogo />
            <h2>Recuperar senha</h2>
          </ContainerHeaderLogin>
          <form onSubmit={handleSubmit(changePassword)}>
            <Input
              inputName={
                errors.email === undefined ? "Email" : errors.email?.message
              }
              isErrored={errors.email === undefined ? false : true}
              name="email"
              register={register}
            />
            <Input
              inputName={errors.cpf === undefined ? "CPF" : errors.cpf?.message}
              isErrored={errors.cpf === undefined ? false : true}
              name="cpf"
              register={register}
              type="number"
            />
            <Input
              inputName={
                errors.phone === undefined ? "Celular" : errors.phone?.message
              }
              isErrored={errors.phone === undefined ? false : true}
              name="phone"
              register={register}
              type="number"
            />
            <Input
              inputName={
                errors.password === undefined
                  ? "Nova senha"
                  : errors.newPassword?.message
              }
              isErrored={errors.newPassword === undefined ? false : true}
              name="newPassword"
              register={register}
              type="password"
            />
            <Input
              inputName={
                errors.newPassword_confirm === undefined
                  ? "Confirmar nova senha"
                  : errors.newPassword_confirm?.message
              }
              isErrored={
                errors.newPassword_confirm === undefined ? false : true
              }
              name="newPassword_confirm"
              register={register}
              type="password"
            />
            <Button colour={"blue"} hover type="submit">
              Confirmar
            </Button>
          </form>
          <ContainerAccount>
            <h3>Não precisa mais?</h3>
            <h4>
              <a onClick={() => history.push("/login")}>Clique aqui</a> para
              entrar!
            </h4>
          </ContainerAccount>
        </ContainerFlex>

        <ContainerImage src={passwordRecoveryImg} />
      </ContentContainer>
    </Container>
  );
};
