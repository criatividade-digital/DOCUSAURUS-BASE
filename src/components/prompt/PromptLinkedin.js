import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import IconCopy from '@theme/Icon/Copy';
import IconSuccess from '@theme/Icon/Success'; // Supondo que você tenha um ícone de carregamento
import TurndownService from 'turndown';
import Combo from './Combo';
import CheckBox from './CheckBox';
import './PromptLinkedin.css';

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

  const publicoAlvo = '<li><span class="highlight-text lightgreen">Público-alvo:</span> Profissionais de RH leigos em IA.</li>';
  const tomEAbordagem = '<li><span class="highlight-text D8BFD8">Tom e abordagem:</span> Simples, acessível e envolvente. Evite jargões técnicos.</li>';
  const callToAction = '<li><span class="highlight-text red">Call to action:</span> Encoraje o leitor a ler o artigo completo no link.</li>'
  const hashtags = '<li><span class="highlight-text lightblue">Hashtags relevantes:</span> Inclua hashtags estratégicas relacionadas ao conteúdo do artigo.</li>'
  const estruturaPost = `
  <li>Estrutura do post:</li>
  <ul>
    <li><span class="highlight-text orange">Abertura impactante:</span> Comece com uma pergunta provocativa para despertar curiosidade.</li>
    <li><span class="highlight-text orange">Resumo rápido:</span> Destaque o principal aprendizado do artigo em 2 frases.</li>
    <li><span class="highlight-text orange">Formatação estratégica:</span>
      <ul>
        <li>Parágrafos curtos para facilitar a leitura.</li>
        <li>Use emojis para destacar pontos importantes.</li>
        <li>Palavras em negrito para atrair a atenção.</li>
      </ul>
    </li>
  </ul>
`;

  const promptText = `
  Crie um post para o LinkedIn divulgando o artigo publicado no link https://criatividade.digital/blog/maquina-falar-nossa-lingua/.<br />
  <b>Instruções detalhadas para o post:</b><br />
  <li>Acesse e leia atentamente o artigo disponível no link fornecido.</li>
  ${selectedTexts.join('')}
  <li>Os elementos descritos na "Estrutura do post" devem ser organizados de forma a criar um texto coeso e bem estruturado.</li>
  `;

  return (
    <div style={{ paddingLeft: '10px' }}>
      <CheckBox checkedColor='lightgreen' label='Público alvo.' onChange={() => handleCheckboxChange(publicoAlvo)} />
      <CheckBox checkedColor='#D8BFD8' label='Tom e abordagem.' onChange={() => handleCheckboxChange(tomEAbordagem)} />
      <CheckBox checkedColor='orange' label='Definir estrutura.' onChange={() => handleCheckboxChange(estruturaPost)} />
      <CheckBox checkedColor='red' label='<i>Call to action</i>.' onChange={() => handleCheckboxChange(callToAction)} />
      <CheckBox checkedColor='lightblue' label='<i>Hashtags.</i>' onChange={() => handleCheckboxChange(hashtags)} />

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