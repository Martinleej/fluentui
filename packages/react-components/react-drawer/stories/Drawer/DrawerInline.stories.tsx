import * as React from 'react';
import { Drawer } from '@fluentui/react-drawer';
import { Button, makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    ...shorthands.border('2px', 'solid', '#ccc'),
    ...shorthands.overflow('hidden'),
    display: 'flex',
    height: '480px',
    backgroundColor: '#fff',
  },

  content: {
    ...shorthands.flex(1),
    ...shorthands.padding('16px'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export const Inline = () => {
  const styles = useStyles();

  const [leftOpen, setLeftOpen] = React.useState(false);
  const [rightOpen, setRightOpen] = React.useState(false);

  return (
    <div className={styles.root}>
      <Drawer type="inline" position="left" open={leftOpen} onOpenChange={(_, { open }) => setLeftOpen(open)}>
        <Button appearance="outline" onClick={() => setLeftOpen(false)}>
          Close
        </Button>
        <p>Left Drawer</p>
      </Drawer>

      <div className={styles.content}>
        <Button appearance="primary" onClick={() => setLeftOpen(!leftOpen)}>
          Toggle left
        </Button>

        <Button appearance="primary" onClick={() => setRightOpen(!rightOpen)}>
          Toggle right
        </Button>
      </div>

      <Drawer type="inline" position="right" open={rightOpen} onOpenChange={(_, { open }) => setRightOpen(open)}>
        <Button appearance="outline" onClick={() => setRightOpen(false)}>
          Close
        </Button>
        <p>Right Drawer</p>
      </Drawer>
    </div>
  );
};
