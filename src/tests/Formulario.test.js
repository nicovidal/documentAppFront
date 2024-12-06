import React from 'react';
import { render, screen } from "@testing-library/react";
import { FormularioPage} from '../page/FormularioPage'

jest.mock("../hook/useDocument", () => ({
  useDocument: () => ({
    getDocument: jest.fn().mockResolvedValue([]), 
  }),
}));

test("muestra mensaje 'No hay documentos disponibles' cuando no hay documentos", async () => {
  render(<FormularioPage />);

  // Espera que el mensaje aparezca en la tabla
  const noDocumentsMessage = await screen.findByText(/no hay documentos disponibles/i);
  expect(noDocumentsMessage).toBeInTheDocument();
});
