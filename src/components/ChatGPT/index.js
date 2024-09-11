import React, { useEffect, useRef, useState } from 'react';
/*********************************************************
 * https://blog.apps.npr.org/pym.js/
 * https://github.com/davidjbradshaw/iframe-resizer
 * 
 */
const ChatGPT = ({ src, style = {}, ...props }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    const injectScript = () => {
      if (iframe && iframe.contentWindow) {
        const script = iframe.contentWindow.document.createElement('script');
        script.textContent = `
          function sendHeight() {
            console.log('body:' + document.body.scrollHeight);
            console.log('offsetHeight:' + document.body.offsetHeight);
            console.log('documentelement:' + document.documentElement.scrollHeight);
            document.body.widht = document.body.scrollHeight;
            /*num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            console.log('sendheight: '+ document.readyState);
            window.parent.postMessage(document.body.scrollHeight, window.location.origin);*/
          }
          window.addEventListener('load', sendHeight);
          window.addEventListener('resize', sendHeight);
          sendHeight(); // Initial height send
        `;
        iframe.contentWindow.document.body.appendChild(script);
      }
    };

    iframe.onload = injectScript;

  }, [src]);

  return (
    <div
      style={{ border: 'none',  display: 'block',  height: '100%',  ...style }}
    >
    <iframe
      id = 'teste'
      ref={iframeRef}
      src={src}
      width="100%"
      style={{ border: 'none',  overflow: 'hidden', height: '100vh', ...style }}
      {...props}
    />
    </div>
  );
};

export default ChatGPT;

