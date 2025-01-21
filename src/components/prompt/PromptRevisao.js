import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import IconCopy from '@theme/Icon/Copy';
import IconSuccess from '@theme/Icon/Success'; // Supondo que você tenha um ícone de carregamento
import TurndownService from 'turndown';
import Combo from './Combo';
import CheckBox from './CheckBox';
import './PromptRevisao.css';

const PromptLinkedin = () => {
  const [selectedTexts, setSelectedTexts] = useState([]);
  const [promptTextMarkdown, setTextMarkdown] = useState([]);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = (label) => {
    setSelectedTexts((prevSelectedTexts) => {
      if (prevSelectedTexts.includes(label)) {
        return prevSelectedTexts.filter((text) => text !== label);
      } else {
        return [...prevSelectedTexts, label];
      }
    });
  };
  useEffect(() => {
    const markdownText = turndownService.turndown(promptText);
    setTextMarkdown(markdownText);
  }, [selectedTexts]);

  const handleCopy = () => {
    setLoading(true);
    setTimeout(() => {
      setCopied(true);
      setLoading(false);
    }, 800); // Simula um pequeno atraso para o ícone de carregamento
  };

  const turndownService = new TurndownService();

  const correcaoGramatical = '<li><span class="highlight-text lightgreen">Correção gramatical:</span> ortografia correta, gramática precisa, pontuação adequada, uso adequado de conectivos e sintaxe correta.</li>';
  const fluidezECoesao = '<li><span class="highlight-text D8BFD8">Fluidez e coesão:</span> melhorar a clareza, coesão e ritmo, garantindo transições lógicas entre os parágrafos.</li>';
  const riquesa = '<li><span class="highlight-text orange">Riqueza de linguagem:</span> substituir palavras repetidas por sinônimos mais adequados, introduzir variação no uso de adjetivos, verbos e advérbios para enriquecer o texto.</li>';
  const clarezaEObjetividade = '<li><span class="highlight-text lightblue">Clareza e objetividade:</span> o texto deve ser direto, objetivo e conciso sem rodeios ou informações supérfluas eliminando ambiguidades, evitando jargões desnecessários e palavras difíceis para que o propósito e a mensagem sejam facilmente compreendidos.</li>'

  const promptText = `
  Assuma o papel de um revisor experiente e revise o texto a seguir, priorizando os seguintes aspectos:<br />
  ${selectedTexts.join('')}
  ---<br />
  [coloque seu texto aqui]
  `;

  return (
    <div style={{ paddingLeft: '10px' }}>
      <CheckBox checkedColor='lightgreen' label='Correção Gramatical.' onChange={() => handleCheckboxChange(correcaoGramatical)} />
      <CheckBox checkedColor='#D8BFD8' label='Fluidez e coesão.' onChange={() => handleCheckboxChange(fluidezECoesao)} />
      <CheckBox checkedColor='orange' label='Riqueza de linguagem.' onChange={() => handleCheckboxChange(riquesa)} />
      <CheckBox checkedColor='lightblue' label='Clareza e objetividade.' onChange={() => handleCheckboxChange(clarezaEObjetividade)} />

      <div style={{ position: 'relative', marginTop: '10px' }}>
        <div id='prompt' style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px', overflowX: 'auto' }}>
          <span dangerouslySetInnerHTML={{ __html: promptText }} />
        </div>
        <CopyToClipboard text={promptTextMarkdown} onCopy={handleCopy}>
          <button style={{ position: 'absolute', top: '5px', right: '0px', background: 'none', border: 'none', cursor: 'pointer' }}>
            {loading ? <IconSuccess style={{ color: 'green', width: '14', height: '14' }} /> : (copied ? <IconCopy style={{  color: 'gray', width: '14', height: '14' }} /> : <IconCopy style={{ color: 'gray', width: '14', height: '14' }}/>)}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default PromptLinkedin;

/*
<IconCopy style={{ width: '14', height: '14' }}
Para quem estamos escrevendo este post? <Combo options={['Escolha uma das opções', 'Profissionais de RH leigos em IA', 'Empreendedores']} />

Qual o estilo do texto? <Combo options={['Escolha uma das opções', 'Profissionais de RH leigos em IA', 'Empreendedores']} />

      <Combo options={['Escolha uma das opções', 'Profissionais de RH leigos em IA', 'Empreendedores']} onChange={handleChange} />
*/