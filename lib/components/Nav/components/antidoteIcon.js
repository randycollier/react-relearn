import React from 'react';
import styled from 'styled-components';

const Antidote = styled.svg`


`;

const AntidoteIcon = (props) => {
  return (
    <Antidote
      width="4rem"
      height="4rem"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:svg="http://www.w3.org/2000/svg"
    >
      <g id='antidoteIcon'>
        <rect id="antidoteIcon_top" y="-34.58853" x="-113.13477" rx="8" strokeWidth="0.90805" fill="#000000" height="15" width="130" transform="matrix(1,0,0,1,180.135,50) "/>
        <path id="antidoteIcon_base" d="m83.86467,113.4279l96.73125,0c4.41828,0 8,3.58173 8,8l63.40445,163.59871c0,4.41828 -3.58172,8 -8,8l-224,0c-4.41828,0 -8,-3.58172 -8,-8l63.8643,-163.59871c0,-4.41827 3.58172,-8 8,-8" fill="#000000" strokeWidth="0.91"/>
      </g>
    </Antidote>
  );
};

export default AntidoteIcon;