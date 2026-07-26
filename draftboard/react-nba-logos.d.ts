import * as React from 'react';
import { ReactNode } from 'react'
import { IconBaseProps } from 'react-icons'

declare module 'react-nba-logos' {
  export interface NBASVGProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
  }

  export const ATL: React.FC<NBASVGProps>;
  export const BKN: React.FC<NBASVGProps>;
  export const BOS: React.FC<NBASVGProps>;
  export const CHA: React.FC<NBASVGProps>;
  export const CHI: React.FC<NBASVGProps>;
  export const CLE: React.FC<NBASVGProps>;
  export const DAL: React.FC<NBASVGProps>;
  export const DEN: React.FC<NBASVGProps>;
  export const DET: React.FC<NBASVGProps>;
  export const GSW: React.FC<NBASVGProps>;
  export const HOU: React.FC<NBASVGProps>;
  export const IND: React.FC<NBASVGProps>;
  export const LAC: React.FC<NBASVGProps>;
  export const LAL: React.FC<NBASVGProps>;
  export const MEM: React.FC<NBASVGProps>;
  export const MIA: React.FC<NBASVGProps>;
  export const MIL: React.FC<NBASVGProps>;
  export const MIN: React.FC<NBASVGProps>;
  export const NOP: React.FC<NBASVGProps>;
  export const NYK: React.FC<NBASVGProps>;
  export const OKC: React.FC<NBASVGProps>;
  export const ORL: React.FC<NBASVGProps>;
  export const PHI: React.FC<NBASVGProps>;
  export const PHX: React.FC<NBASVGProps>;
  export const POR: React.FC<NBASVGProps>;
  export const SAC: React.FC<NBASVGProps>;
  export const SAS: React.FC<NBASVGProps>;
  export const TOR: React.FC<NBASVGProps>;
  export const UTA: React.FC<NBASVGProps>;
  export const WAS: React.FC<NBASVGProps>;
}

declare module 'react-icons/lib/index' {
  export type IconType = (props: IconBaseProps) => ReactNode
}