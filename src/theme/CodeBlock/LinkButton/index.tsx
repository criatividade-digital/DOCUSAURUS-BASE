import React from 'react';
import IconExternalLink from '@theme/Icon/ExternalLink';
import clsx from 'clsx';
import styles from './styles.module.css';

// Define the Props type
type Props = {
  link: string;
  className?: string;
};

export default function LinkButton({link, className, wordWrap}: Props): JSX.Element {
  let temLink = false;
  let linkMatch, linkValue: string;

  if (typeof link !== 'undefined') {
    // Regular expression to match the `link` key and capture its value
    linkMatch = link.match(/link=['"]([^'"]+)['"]/);
    if (linkMatch) {
      linkValue = linkMatch[1];
      temLink = true;
    }
  }

  // Return null if there is no valid link
  if (!temLink) {
    return null;
  }
  const handleOpenLink = () => {
    if (temLink) //alert(linkValue);
      window.open(linkValue, '_blank');
  };

  return (
    <button
      type="button"
      aria-label = 'Link com a resposta do ChatGPT'
      title = 'Resposta ChatGPT'
      onClick={handleOpenLink}
      className={clsx(
        'clean-btn',
        className,
        styles.linkButton,        
      )}
      >
         <IconExternalLink className={styles.linkButtonIcon}/>
    </button>
  );
}
