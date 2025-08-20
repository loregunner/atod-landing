import React, { useState } from "react";
import { WrapperForm } from "./Form.style";
import Input from "@/ui/Input/Input";
import { Select } from "@/ui/Select/Select";
import Switch from "@/ui/Switch/Switch";
import Button from "@/ui/Button/Button";

const Form = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <WrapperForm>
      <div className="banner">
        <div className="banner-background"></div>
      </div>
      <div className="content-title">
        <hr className="hr-right" />
        <h2>Agendamiento</h2>
        <hr className="hr-left" />
      </div>
      <div className="container-form">
        <form>
          <p>Datos personales</p>
          <Input label="Nombres" placeholder="Agrega nombre" />

          <Input label="Apellidos" placeholder="Agregar apellidos" />
          <Select
            value={selectedValue}
            label="Tipo de identificación"
            onChange={(e) => setSelectedValue(e.target.value)}
            options={[
              { value: "1", label: "Opción 1" },
              { value: "2", label: "Opción 2" },
            ]}
          />
          <Input
            label="Número de identificación"
            placeholder="Agregar número de identificación"
          />
          <Input
            label="Correo electrónico"
            placeholder="Agregar correo electrónico"
          />
          <Input
            label="Número de celular"
            placeholder="Agregar número de celular"
          />
          <p>Datos del vehículo</p>
          <Input label="Marca del vehículo" placeholder="Agregar marca" />
          <Input label="Modelo" placeholder="Agregar modelo" />
          <Input label="Placa" placeholder="Agregar placa" />
          <p>Agendamiento</p>
          <Input
            type="date"
            label="Fecha de diagnóstico"
            placeholder="Seleccionar fecha"
          />
          <Input
            type="time"
            label="Hora del diagnóstico"
            placeholder="Seleccionar hora"
          />

          <Select
            value={selectedValue}
            label="Tipo de falla"
            onChange={(e) => setSelectedValue(e.target.value)}
            options={[
              { value: "1", label: "Opción 1" },
              { value: "2", label: "Opción 2" },
            ]}
          />
          <div className="switch-wrapper">
            <Switch label="¿Solicito escaneo para mi vehículo?" />
          </div>
          <div></div>
          <Button size="extralarge" color="primary" type="submit">
            <span>Agendar</span>
          </Button>
        </form>
      </div>
    </WrapperForm>
  );
};

export default Form;
