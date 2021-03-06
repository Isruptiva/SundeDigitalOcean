const { Schema, model } = require("mongoose");

const ClientesSchema = new Schema({
  Cuenta: {
    type: String
  },
  RazonSocial: {
    type: String
  },
  Domicilio: {
    type: String
  },
  CodigoPostal: {
    type: String
  },
  Localidad: {
    type: String
  },
  Provincia: {
    type: String
  },
  Telefono: {
    type: String
  },
  CondicionIVA: {
    type: String
  },
  CUIT: {
    type: String
  }
});

module.exports = model("Clientes", ClientesSchema);
