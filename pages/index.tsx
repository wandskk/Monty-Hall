import styles from '../styles/Formulario.module.css'
import Cartao from '../components/Cartao'
import Link from 'next/link'
import EntradaNumerica from '../components/EntradaNumerica';
import { useState } from 'react';

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  const validaQtdePortas = (novaQtde) => {
    setQtdePortas(novaQtde)              
    if(novaQtde < 3) {
      setQtdePortas(3)  
    }
    if(novaQtde > 100) {                
        setQtdePortas(100)
      }
  }

  const validaComPresente = (novaPortaComPresente) => {
    if(novaPortaComPresente <= qtdePortas) {
        setComPresente(novaPortaComPresente)              
        if(novaPortaComPresente <= 1) {                
          setComPresente(1)
        }
    }
  }
  
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica 
            text="Qtde Portas?" 
            value={qtdePortas} 
            onChange={novaQtde => validaQtdePortas(novaQtde)}  
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica 
            text="Porta com Presente?" 
            value={comPresente} 
            onChange={novaPortaComPresente => validaComPresente(novaPortaComPresente)} 
          />
        </Cartao>
        <Cartao bgcolor="#28A085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
