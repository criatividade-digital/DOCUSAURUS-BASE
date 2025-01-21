/*********************************************************
 * https://blog.apps.npr.org/pym.js/
 * https://github.com/davidjbradshaw/iframe-resizer
 * 
    <script
      src="../iframe-r-child.js"
      type="text/javascript"
      async
    ></script>
 */
import React, { useEffect, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import IframeResizer from '@iframe-resizer/react'

const ChatGPT = ({ src, style = {}, ...props }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    const injectScript = () => {
      if (iframe && iframe.contentWindow) {
        const script = iframe.contentWindow.document.createElement('script');
        script.textContent = `
            <script
              src="{useBaseUrl('/html/iframe-r-child.umd.js"
              type="text/javascript"
              async
            ></script>
        `;
        iframe.contentWindow.document.body.appendChild(script);
      }
    };

    iframe.onload = injectScript;

  }, [src]);

  return (
    <IframeResizer
      license="GPLv3"
      src={useBaseUrl('/html/exemplo-curitiba/index.html')}
      style={{ width: '100%',  height: '100vh' }}
      waitForLoad
    />
  );
};

export default ChatGPT;

