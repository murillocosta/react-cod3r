const { mongo } = require('mongoose');
const mongoose = require('mongoose');

//pega api de promises do node e atribui ao mongoose.Promise(deprecated)
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/mymoney', {
  useMongoClient: true,
});

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
mongoose.Error.messages.Number.min =
  "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.Number.max =
  "O '{VALUE}' informado é maior que o limite mínimo de '{MAX}'.";
mongoose.Error.messages.String.enum =
  "'{VALUE}' não é válido para o atributo '{PATH}'.";
