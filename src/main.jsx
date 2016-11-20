var React = require('react');
var ReactDOM = require('React-dom');
var List = require('./components/List.jsx');

ReactDOM.render(<List/>, document.getElementById('ingredients'));
/* ReactDOM sirve para renderisar en pantalla el contenido.
  primero: se pone el nomre delcomponente que se usara
  segundo: con javascript vanila se una a un ID el contenido que se mostrara */
