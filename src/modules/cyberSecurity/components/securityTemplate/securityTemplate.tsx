'use client';
import { useState } from 'react';
// components
import UnSecureForm from '../unSecureForm/unSecureForm';
import SecureForm from '../secureForm/secureForm';
// styles
import './securityTemplate.scss';

const SecurityTemplate = () => {
  // states
  const [mark, setMark] = useState('');

  return (
    <section className='security-template'>
      <div dangerouslySetInnerHTML={{ __html: mark }} />
      <div className='security-template--forms'>
        <section>
          <h2>Sin Sanitizar</h2>
          <UnSecureForm setMark={setMark} />
        </section>
        <section>
          <h2>Sanitizado</h2>
          <SecureForm setMark={setMark} />
        </section>
      </div>
    </section>
  );
};

export default SecurityTemplate;
