import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../../atom";
import { IEvento } from "../../../interfaces/IEvento";

export const eventosFiltradosState = selector({
  key: "eventosFiltradosState",
  get: ({ get }) => {
    const filtro = get(filtroDeEventos);
    const todosOsEventos = get(listaDeEventosState);
    const eventos = todosOsEventos.filter((event) => {
      if (!filtro.data) {
        return true;
      }

      const ehOMesmoDia =
        filtro.data.toISOString().slice(0, 10) ===
        event.inicio.toISOString().slice(0, 10);

      return ehOMesmoDia;
    });
    return eventos;
  },
});

export const eventosAsync = selector({
  key: "eventosAsync",
  get: async () => {
    const respHttp = await fetch("http://localhost:8080/eventos");

    const eventoJson: IEvento[] = await respHttp.json();

    return eventoJson.map((evento) => ({
      ...evento,
      inicio: new Date(evento.inicio),
      fim: new Date(evento.fim),
    }));
  },
});
