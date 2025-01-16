import React from 'react';
import Layout from '@theme/Layout';
import CodeDiffViewer from '@site/src/components/Diferenca';
import styles from './checkdiff.module.css'; // Importa o CSS local

export default function CustomPage() {
  return (
    <Layout title="Comparação de texto">
      <div className={styles.customContainer}>
        <h1>Comparação de texto</h1>
        <p>Se você não tiver acesso a um comparador de textos, disponibilizei um abaixo. Essa ferramenta pode ser útil para verificar as alterações realizadas em uma revisão de texto feita pelo ChatGPT. Basta inserir o texto original na primeira caixa e o texto revisado na segunda. O resultado da comparação será exibido logo abaixo dessas caixas, apresentando os textos lado a lado: o original à esquerda e o revisado à direita. As partes destacadas em vermelho indicam trechos removidos, enquanto as em verde mostram as inclusões feitas na revisão. </p>
        <CodeDiffViewer />
      </div>

    </Layout>
  );
}
