import React, { useState } from 'react';
import { Card, CardTitle, CardImg, CardBody, Button, Modal } from 'reactstrap';
const JournalBoard = ({
  thumbnail,
  title,
  language,
  description,
  authors,
  publisher,
  previewLink
}) => {
  // States
  const [technique, setModal] = useState(false);
  const paddle = () => setModal(!technique);

  return (
    <Card style={{ width: '222px' }} className='m-auto '>
      <CardImg
        top
        style={{ width: '99%', height: '222px' }}
        src={thumbnail}
        alt={title}
      />
      <CardBody>
        <CardTitle className='card-title'>{title}</CardTitle>
        <Button onClick={paddle}>Main Idea</Button>
        <Button onClick={paddle}>Save Book</Button>
              <p>Language : {language}</p>
              <p>Authors : {authors}</p>
              <p>Publisher : {publisher}</p>
      </CardBody>
      <Modal isOpen={technique} paddle={paddle}>
        <div className='technique-header d-flex justify-content-center'>
          <h5 className='technique-title text-center' id='exampleModalLabel'>
            
          </h5>
          <button
            aria-label='exit'
            className='exit'
            type='button'
            onClick={paddle}
          >
            <span aria-hidden={true}>close</span>
          </button>
        </div>
        <div className='technique-body'>
          <div className='d-flex justify-content-between ml-3'>
            <img  style={{ height: '222px' }} />
            <div>
            </div>
          </div>
          <div className='mt-3'>{description}</div>
        </div>
        <div className='technique-footer'>
          <div className='left-silde'>
            <a
              href={previewLink}
              className='btn-link'
              color='default'
              type='button'
              target='_blank'
              rel='noopener noreferrer'
            >
              Preview to Google
            </a>
          </div>
        </div>
      </Modal>
    </Card>
  );
};

export default JournalBoard;
