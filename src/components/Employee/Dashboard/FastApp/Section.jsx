import React from 'react';

const sections = [
  'Address',
  'Cost',
  'Personal Details',
  'Ramp ID'
];

const Section = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 className='text-2xl font-semibold'>Sections</h2>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        {sections.map((section, index) => (
          <li key={index} style={{ marginBottom: '5px', fontSize: '16px' }}>
            {section}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Section;
