import React from "react";
import Evento from "../Evento";
import Filtro from "../Filtro";
import style from "./ListaDeEventos.module.scss";
import useListaDeEventos from "../../state/hooks/useListaDeEventos";

const ListaDeEventos: React.FC = () => {
  // importando a lista de eventos do atom
  const eventos = useListaDeEventos();

  return (
    <section>
      <Filtro />
      <div className={style.Scroll}>
        {eventos.map((evento) => (
          <Evento evento={evento} key={evento.id} />
        ))}
      </div>
    </section>
  );
};

export default ListaDeEventos;
