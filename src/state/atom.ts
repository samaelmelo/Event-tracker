import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroEventos } from "../interfaces/IFiltroEventos";
import { eventosAsync } from "./hooks/seletores";

// passando o estado da minha lista de eventos

export const listaDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: eventosAsync,
});

export const filtroDeEventos = atom<IFiltroEventos>({
  key: "filtroDeEventos",
  default: {},
});
