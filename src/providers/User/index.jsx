import { createContext, useContext, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const history = useHistory();
  const location = useLocation();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@DivideComigo:user")) || {}
  );

  const saveData = (data) => {
    localStorage.setItem("@DivideComigo:user", JSON.stringify(data));
    setUser(data);
  };

  const submitLogin = async (data) => {
    try {
      const response = await api.post("/login", data);
      toast.success("Login efetuado com sucesso!");
      saveData(response.data);
      history.push("/dashboard");
    } catch (error) {
      toast.error("Erro ao efetuar o login");
    }
  };

  const submitRegister = async (data) => {
    delete data.password_confirm;
    data.cpf = Number(data.cpf);
    data.phone = Number(data.phone);

    try {
      const response = await api.post("/register", data);
      toast.success("Conta criada com sucesso!");
      saveData(response.data);
      history.push("/dashboard");
    } catch (error) {
      toast.error("Erro ao criar a sua conta");
    }
  };

  const getUserInfo = async () => {
    try {
      return await api
        .get(`/users/${user.id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((response) => {
          return response.data;
        });
    } catch (error) {
      toast.error("Algo deu errado ao pegar usuário");
    }
  };

  const patchUser = async (data) => {
    try {
      await api.patch(`/users/${user.id}`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
    } catch (error) {
      toast.error("Erro ao atualizar informações");
    }
  };

  const changePassword = async (data) => {
    delete data.newPassword_confirm;

    try {
      await api.patch("/recovery/password", data);
      toast.success("Senha alterada com sucesso!");
      history.push("/login");
    } catch (error) {
      toast.error(
        error.response.data.error || "Erro ao tentar alterar a senha"
      );
    }
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("@DivideComigo:user")) || {});
  }, [location.pathname]);

  return (
    <UserContext.Provider
      value={{
        user,
        saveData,
        submitLogin,
        getUserInfo,
        submitRegister,
        patchUser,
        changePassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default function useUser() {
  return useContext(UserContext);
}
