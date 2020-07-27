import * as React from 'react';
import { useCallback, useState } from 'react';
import { IconButton } from '@storybook/components';
import { API } from '@storybook/api';
import { DIR_CHANGE_EVENT, DIRECTION_STORAGE_ID } from './constants';
import { Direction } from './types';
import DirectionLTR from './icons/DirectionLTR';
import DirectionRTL from './icons/DirectionRTL';

interface DirButtonProps {
  api: API;
}

// Use this to detect if the page is being loaded for the first time.
let init = false;

const emitChannelEvent = (api: API, dir: Direction): void => {
  api.getChannel().emit(DIR_CHANGE_EVENT, dir);
};

// This is used for bidirectionality in angular projects.
const updateBodyDir = (dir: Direction) => {
  const iframe = document.getElementById('storybook-preview-iframe');
  // @ts-ignore
  const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  innerDoc.body.setAttribute('dir', dir);
};

const invertDir = (dir: Direction) => dir === 'rtl' ? 'ltr' : 'rtl';

export const DirButton: React.FC<DirButtonProps> = (props) => {
  const { api } = props;
  const defaultDir = init ? localStorage.getItem(DIRECTION_STORAGE_ID) : 'ltr';
  const [direction, setDirection] = useState<Direction>(defaultDir as Direction);
  init = true;

  const toggleDirection = useCallback(() => {
      setDirection((dir: Direction) => {
        const newDir = invertDir(dir);
        updateBodyDir(newDir);
        localStorage.setItem(DIRECTION_STORAGE_ID, newDir);
        emitChannelEvent(api, newDir);
        return newDir;
      });
    }, [api]
  );

  return (
    <IconButton
      title={
        direction === 'ltr'
          ? 'Toggle Right-to-Left Direction'
          : 'Toggle Left-to-Right Direction'
      }
      onClick={toggleDirection}
    >
      {direction === 'ltr' ? <DirectionLTR /> : <DirectionRTL />}
    </IconButton>
  )
};

export default DirButton;
