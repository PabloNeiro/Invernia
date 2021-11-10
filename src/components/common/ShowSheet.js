import React from 'react';
import NoSheet from './NoSheet';

function ShowSheet({ id, drums, src, srcdrum }) {
  return (
    <>
      {drums && srcdrum === null ? (
        <NoSheet instrument={'percusión'} />
      ) : drums && srcdrum !== null ? (
        <img src={srcdrum} alt={id} height='100%' width='100%'></img>
      ) : !drums && src === null ? (
        <NoSheet instrument={'gaita'} />
      ) : (
        <img src={src} alt={id} height='100%' width='100%'></img>
      )}
    </>
  );
}

export default ShowSheet;
