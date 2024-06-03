import React from 'react';

const sections = [
  'Address',
  'Cost',
  'Flood Certificate',
  'E&O Insurance',
  'Building Sketch',
  'Supplemental Addendum',
  'Ownership',
  'Property Area',
  'Ramp ID'
];

const Section = ({ disabled }) => {
  return (
    <div style={{ padding: '20px', opacity: disabled ? 0.5 : 1 }} className='border-2'>
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
