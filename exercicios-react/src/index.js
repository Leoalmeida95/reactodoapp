import React from 'react';
import ReactDOM from 'react-dom';
// import Familia from './componentes/Familia';
// import Membro from './componentes/Membro';
// import ComponenteComFuncao from './componentes/ComponenteComFuncao';
// import Pai from './componentes/Pai'; 
import ComponenteClasse from './componentes/ComponenteClasse';
import Contador from './componentes/Contador';

const elemento = document.getElementById('root');

ReactDOM.render(
    <div>
        <Contador numero={0}></Contador>
        {/* <ComponenteClasse valor="Componente classe"></ComponenteClasse> */}
        {/* {<Pai></Pai>} */}
        {/* <ComponenteComFuncao></ComponenteComFuncao> */}
        {/* <Familia sobrenome="Silva"> 
            <Membro nome="Leo"/>
            <Membro nome="Luana"/>
        </Familia> */}
    </div>  
, elemento)
  