import React, { useState } from 'react';
import { useParams } from 'react-router';
import ShowSheet from './ShowSheet';
import ButtonsSelectDrums from './ButtonsSelectDrums';
import { songsList } from '../../database/database';
import './sheet.css';
import { Row } from 'reactstrap';

function OneSheet() {
  const [drums, setDrums] = useState(false);
  let { id } = useParams();

  const musicSheet = songsList.find((element) => element.id == id);

  return (
    <>
      <Row className=' text-center mt-3'>
        <ButtonsSelectDrums setDrums={setDrums} />
      </Row>
      <Row>
        <ShowSheet id={id} drums={drums} src={musicSheet.sheet} srcdrum={musicSheet.sheetDrum} />
      </Row>
    </>
  );
}

export default OneSheet;
