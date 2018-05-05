import React from 'react';
import SVG from 'react-inlinesvg';
import Loader from '../Loader/Loader';

const InlineSVG = ({ src }) => (
  <SVG 
    src={src}
    preloader={<Loader />} >
    <img alt="" src={src.replace(/svg/i, 'png')} />
  </SVG>
);

export default InlineSVG;