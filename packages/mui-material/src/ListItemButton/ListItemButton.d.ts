import * as React from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '../styles';
import { ExtendButtonBase, ExtendButtonBaseTypeMap } from '../ButtonBase';
import { OverrideProps } from '../OverridableComponent';
import { ListItemButtonClasses } from './listItemButtonClasses';

export interface ListItemButtonBaseProps {
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems?: 'flex-start' | 'center';
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus?: boolean;
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ListItemButtonClasses>;
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense?: boolean;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters?: boolean;
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider?: boolean;
  /**
   * Use to apply selected styling.
   * @default false
   */
  selected?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
}

export type ListItemButtonTypeMap<
  AdditionalProps = {},
  DefaultComponent extends React.ElementType = 'div',
> = ExtendButtonBaseTypeMap<{
  props: AdditionalProps & ListItemButtonBaseProps;
  defaultComponent: DefaultComponent;
}>;

/**
 *
 * Demos:
 *
 * - [Lists](https://mui.com/material-ui/react-list/)
 *
 * API:
 *
 * - [ListItemButton API](https://mui.com/material-ui/api/list-item-button/)
 * - inherits [ButtonBase API](https://mui.com/material-ui/api/button-base/)
 */
declare const ListItemButton: ExtendButtonBase<ListItemButtonTypeMap>;

export type ListItemButtonProps<
  RootComponent extends React.ElementType = ListItemButtonTypeMap['defaultComponent'],
  AdditionalProps = {},
> = OverrideProps<ListItemButtonTypeMap<AdditionalProps, RootComponent>, RootComponent>;

export default ListItemButton;
