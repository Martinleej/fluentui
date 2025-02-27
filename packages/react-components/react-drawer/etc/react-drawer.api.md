## API Report File for "@fluentui/react-drawer"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

/// <reference types="react" />

import type { ComponentProps } from '@fluentui/react-utilities';
import type { ComponentState } from '@fluentui/react-utilities';
import type { DialogProps } from '@fluentui/react-dialog';
import type { DialogSurfaceProps } from '@fluentui/react-dialog';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import * as React_2 from 'react';
import type { Slot } from '@fluentui/react-utilities';
import type { SlotClassNames } from '@fluentui/react-utilities';

// @public
export const Drawer: ForwardRefComponent<DrawerProps>;

// @public
export const DrawerBody: ForwardRefComponent<DrawerBodyProps>;

// @public (undocumented)
export const drawerBodyClassNames: SlotClassNames<DrawerBodySlots>;

// @public
export type DrawerBodyProps = ComponentProps<DrawerBodySlots> & {};

// @public (undocumented)
export type DrawerBodySlots = {
    root: Slot<'div'>;
};

// @public
export type DrawerBodyState = ComponentState<DrawerBodySlots>;

// @public (undocumented)
export const drawerClassNames: SlotClassNames<DrawerSlots>;

// @public
export const drawerCSSVars: {
    size: string;
    borderRadius: string;
};

// @public
export type DrawerProps = ComponentProps<Partial<DrawerSlots>> & {
    position?: 'left' | 'right';
    type?: 'inline' | 'overlay';
    size?: 'small' | 'medium' | 'large' | 'full';
    modal?: boolean;
    lightDismiss?: boolean;
    separator?: boolean;
} & Pick<DialogProps, 'open' | 'defaultOpen' | 'onOpenChange'>;

// @public (undocumented)
export type DrawerSlots = {
    root: Slot<'div'>;
};

// @public
export type DrawerState = ComponentState<DrawerSlots> & Required<Pick<DrawerProps, 'type' | 'position' | 'open' | 'size' | 'separator'>> & {
    dialog: DialogProps;
    dialogSurface: DialogSurfaceProps;
};

// @public
export const renderDrawer_unstable: (state: DrawerState) => JSX.Element | null;

// @public
export const renderDrawerBody_unstable: (state: DrawerBodyState) => JSX.Element;

// @public
export const useDrawer_unstable: (props: DrawerProps, ref: React_2.Ref<HTMLElement>) => DrawerState;

// @public
export const useDrawerBody_unstable: (props: DrawerBodyProps, ref: React_2.Ref<HTMLElement>) => DrawerBodyState;

// @public
export const useDrawerBodyStyles_unstable: (state: DrawerBodyState) => DrawerBodyState;

// @public
export const useDrawerStyles_unstable: (state: DrawerState) => DrawerState;

// (No @packageDocumentation comment for this package)

```
