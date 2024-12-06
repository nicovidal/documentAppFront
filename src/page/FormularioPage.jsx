import React from 'react';
import { useEffect, useState } from "react";
import { useDocument } from "../hook/useDocument";

export const FormularioPage = () => {
  const { getDocument } = useDocument();

  const [formData, setFormData] = useState({
    fecha: new Date(),
    rut_cliente: "",
    numero_tarjeta: "",
    respaldo_solicitud: "",
    id_caja: 1,
    id_docto: 2,
    id_estado: 1,
    numeroCaja: "",
  });

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const data = await getDocument();
      setDocuments(data);
    };

    fetchDocuments();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fecha" className="form-label">
            Fecha
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rut_cliente" className="form-label">
            Rut Cliente
          </label>
          <input
            type="text"
            className="form-control"
            id="rut_cliente"
            value={formData.rut_cliente}
            onChange={handleChange}
            placeholder="Ej: 12345678-9"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="numero_tarjeta" className="form-label">
            Número de Tarjeta
          </label>
          <input
            type="text"
            className="form-control"
            id="numero_tarjeta"
            value={formData.numero_tarjeta}
            onChange={handleChange}
            placeholder="Ej: 1234-5678-9123-4567"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="respaldo_solicitud" className="form-label">
            Respaldo Solicitud
          </label>
          <input
            type="url"
            className="form-control"
            id="respaldo_solicitud"
            value={formData.respaldo_solicitud}
            onChange={handleChange}
            placeholder="URL del archivo respaldo"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="numeroCaja" className="form-label">
            Número de Caja
          </label>
          <input
            type="text"
            className="form-control"
            id="numeroCaja"
            value={formData.numeroCaja}
            onChange={handleChange}
            placeholder="Ej: Caja001"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      {/* Tabla para mostrar documentos */}
      <h2 className="mt-5">Documentos</h2>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Rut Cliente</th>
            <th>Número de Tarjeta</th>
            <th>Respaldo Solicitud</th>
            <th>Número de Caja</th>
          </tr>
        </thead>
        <tbody>
          {documents && documents.length > 0 ? (
            documents.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.id}</td>
                <td>{new Date(doc.fecha).toLocaleString()}</td>
                <td>{doc.rut_cliente}</td>
                <td>{doc.numero_tarjeta}</td>
                <td>
                  <a
                    href={doc.respaldo_solicitud}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {doc.respaldo_solicitud}
                  </a>
                </td>
                <td>{doc.numeroCaja}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                <strong>No hay documentos disponibles</strong>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
