import * as React from 'react';
import { SxProps } from '@mui/system';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';
import { Theme } from '..';
import { CardContentClasses } from './cardContentClasses';

export interface CardContentTypeMap<
  AdditionalProps = {},
  DefaultComponent extends React.ElementType = 'div',
> {
  props: AdditionalProps & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<CardContentClasses>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  defaultComponent: DefaultComponent;
}
/**
 *
 * Demos:
 *
 * - [Card](https://mui.com/material-ui/react-card/)
 *
 * API:
 *
 * - [CardContent API](https://mui.com/material-ui/api/card-content/)
 */
declare const CardContent: OverridableComponent<CardContentTypeMap>;

export type CardContentProps<
  RootComponent extends React.ElementType = CardContentTypeMap['defaultComponent'],
  AdditionalProps = {},
> = OverrideProps<CardContentTypeMap<AdditionalProps, RootComponent>, RootComponent>;

export default CardContent;
