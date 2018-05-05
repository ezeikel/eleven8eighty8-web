import React from 'react';
import SVG from 'react-inlinesvg';
import Loader from '../Loader/Loader';

const InlineSVG = ({ src }) => (
  <SVG 
    src={src}
    preloader={<Loader />} >
    <img src="../../assets/1188.png" />
  </SVG>
);

export default InlineSVG;