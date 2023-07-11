import { useSetRecoilState } from "recoil";
import { listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";
import { obterId } from "../../util";

const useAdicionarEvento = () => {
  const setListaDeEventos = useSetRecoilState(listaDeEventosState);

  return (event: IEvento) => {
    const hoje = new Date();
    if (event.inicio < hoje) {
      throw new Error("Eventos não podem ser cadastrados com data menor que a atual.");
    }

    event.id = obterId();
    return setListaDeEventos((listaAntiga) => [...listaAntiga, event]);
  };
};

export default useAdicionarEvento;
