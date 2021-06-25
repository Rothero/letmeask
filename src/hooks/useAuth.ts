import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function useAuth() {
  const value = useContext(AuthContext)

  return value;
}

/*este arquivo foi feito para reduzir o tamanho de imports de Contexts feito, colocando o useContext  e AuthContext
em uma função só o AuthContext()
*/