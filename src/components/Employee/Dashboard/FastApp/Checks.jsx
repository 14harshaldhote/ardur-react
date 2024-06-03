import React from 'react';

const comments = {
  'Cost': [
    'It must be 14 billion dollars or above.',
    'It must have tax less than 18%.'
  ],
  'Address': [
    'Address must be complete and accurate.',
    'Include street, city, state, and ZIP code.'
  ],
  'Property Area': [
    'Property area must be measured in square feet.',
    'Include a detailed layout of the property.'
  ],
  'Ownership': [
    'Ownership details must be verified with legal documents.',
    'Include names of all owners and their respective shares.'
  ],
  'Supplemental Addendum': [
    'Supplemental addendum must be signed by all parties.',
    'Include any additional terms agreed upon.'
  ],
  'Building Sketch': [
    'Building sketch must be drawn to scale.',
    'Include all floors and major structural elements.'
  ],
  'E&O Insurance': [
    'E&O insurance policy must be valid for the current year.',
    'Include the policy number and coverage details.'
  ],
  'Flood Certificate': [
    'Flood certificate must be issued by a certified surveyor.',
    'Include the flood zone designation and any applicable risks.'
  ]
};

const Checks = () => {
  const allComments = Object.values(comments).flat();

  return (
    <div style={{ padding: '20px' }} className='border-2'>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className='text-2xl font-semibold'>Checks</h2>
        <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Total Comments ({allComments.length})</span>
      </div>
      <div style={{ maxHeight: '300px', overflowY: 'auto', paddingLeft: '20px' }}>
        <ol>
          {Object.entries(comments).map(([section, sectionComments], index) => (
            <li key={index} style={{ marginBottom: '10px', fontSize: '16px' }}>
              <strong>{section}</strong>
              <ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
                {sectionComments.map((comment, i) => (
                  <li key={i} style={{ marginBottom: '5px', fontSize: '14px' }}>
                    {comment}
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Checks;
