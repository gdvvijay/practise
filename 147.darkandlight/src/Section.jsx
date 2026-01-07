import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Section() {
  const [theme] = useContext(ThemeContext);

  return (
    <section className={`section theme-${theme}`}>
      <p>This is a content section. It should change color when you toggle the theme.</p>
      <p>Current theme according to this component: <strong>{theme}</strong></p>
    </section>
  );
}

export default Section;