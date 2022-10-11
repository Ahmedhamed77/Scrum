import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {COLORS} from '../../styles';

interface ArrowLeftProps extends Omit<SvgProps, 'fill' | 'viewBox'> {
  size?: number;
  color?: string;
}

export const ArrowLeft: React.FC<ArrowLeftProps> = ({
  size = 24,
  color = COLORS.dark,
}) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M12.26 18.35a1 1 0 01-1.52 1.3l1.52-1.3zm-1.52-14a1 1 0 011.52 1.3l-1.52-1.3zM5.5 12l-.76.65a1 1 0 010-1.3l.76.65zm5.24 7.65l-6-7 1.52-1.3 6 7-1.52 1.3zm-6-8.3l6-7 1.52 1.3-6 7-1.52-1.3z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2"
        d="M5.5 12H19"
      />
    </Svg>
  );
};
