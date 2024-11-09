import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const divStyle = {
  width: '100%',
  display: 'inline-block',
  textAlign: 'center'
};

const paragrafo = {
  marginLeft: '20px', /* Define a margem esquerda como 20 pixels */
  marginRight:'20px', /* Define a margem direita como 20 pixels */
  maxWidth: '640px',
  margin: '0 auto',
  padding: '0 30px 0 30px'
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container" style={paragrafo}>
        {/* Adicionando o novo recurso "Alo mundo" diretamente */}
        <div className="row" >
            <p>Olá! Sou Parahuari Branco, especialista em tecnologia e educação, e dou as boas-vindas ao
            <b> Desmistificando o ChatGPT: <i>guia essencial para uso do ChatGPT</i></b>. 
            Meu objetivo com este guia é esclarecer de maneira objetiva e acessível o funcionamento do ChatGPT, 
            mostrando como você pode aproveitar ao máximo essa ferramenta de forma segura e responsável.
            </p>
            <p>            
            <center>
                <b><a href="docs/apresentacao">Clique aqui para iniciar o guia.</a></b>
            </center>
            </p>            

        </div>
        <center>
          <div className="row" style={divStyle}>
              <br />
          </div>
          <b><i>[Futura imagem com o roteiro do guia]</i></b>
        </center>
      </div>
    </section>
  );
}
