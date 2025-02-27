import * as React from 'react';
import { DecoratorFunction } from '@storybook/addons';
import { ExtendedStoryFnReturnType } from './types';
import { makeStyles, mergeClasses } from '@griffel/react';

export const TestWrapperDecorator: DecoratorFunction<ExtendedStoryFnReturnType> = story => (
  <div style={{ display: 'flex' }}>
    <div className="testWrapper" style={{ padding: '10px', overflow: 'hidden' }}>
      {story()}
    </div>
  </div>
);

export const TestWrapperDecoratorTall: DecoratorFunction<ExtendedStoryFnReturnType> = story => (
  <div style={{ display: 'flex' }}>
    <div className="testWrapper" style={{ padding: '10px 10px 120px' }}>
      {story()}
    </div>
  </div>
);

export const TestWrapperDecoratorTallFixedWidth: DecoratorFunction<ExtendedStoryFnReturnType> = story => (
  <div style={{ display: 'flex' }}>
    <div className="testWrapper" style={{ padding: '10px 10px 120px', width: '300px' }}>
      {story()}
    </div>
  </div>
);

export const TestWrapperDecoratorFixedWidth: DecoratorFunction<ExtendedStoryFnReturnType> = story => (
  <div style={{ display: 'flex' }}>
    <div className="testWrapper" style={{ padding: '10px', width: '300px' }}>
      {story()}
    </div>
  </div>
);

export const TestWrapperDecoratorFullWidth: DecoratorFunction<ExtendedStoryFnReturnType> = story => (
  <div style={{ display: 'flex' }}>
    <div className="testWrapper" style={{ padding: '10px', width: '100%', overflow: 'hidden' }}>
      {story()}
    </div>
  </div>
);

const useNoAnimationStyles = makeStyles({
  root: {
    animationDuration: '0s !important',
    transitionDuration: '0s !important',
    '& *': {
      animationDuration: '0s !important',
      transitionDuration: '0s !important',
    },
  },
  paused: {
    animationPlayState: 'paused !important',
    animationDelay: '-1s !important',
    '& *': {
      animationPlayState: 'paused !important',
      animationDelay: '-1s !important',
    },
  },
});
export const TestWrapperDecoratorNoAnimation: DecoratorFunction<ExtendedStoryFnReturnType> = story => {
  const noAnimationStyles = useNoAnimationStyles();
  const className = mergeClasses(noAnimationStyles.root, 'testWrapper');
  return (
    <div style={{ display: 'flex' }}>
      <div
        className={className}
        style={{
          padding: '10px',
          overflow: 'hidden',
        }}
      >
        {story()}
      </div>
    </div>
  );
};
export const TestWrapperDecoratorPauseAnimation: DecoratorFunction<ExtendedStoryFnReturnType> = story => {
  const noAnimationStyles = useNoAnimationStyles();
  const className = mergeClasses(noAnimationStyles.paused, 'testWrapper');
  return (
    <div style={{ display: 'grid' }}>
      <div
        className={className}
        style={{
          padding: '10px',
          overflow: 'hidden',
        }}
      >
        {story()}
      </div>
    </div>
  );
};
