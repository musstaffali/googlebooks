import React from 'react';
import { Card, CardTitle, CardImg, CardBody, Button } from 'reactstrap';
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
  return (
    <Card style={{ width: '225px' }} className='m-auto '>
      <CardImg
        top
        style={{ width: '99%', height: '225px' }}
        src={thumbnail}
        alt={title}
      />
      <CardBody>
        <CardTitle className='card-title'>{title}</CardTitle>
        <Button>Save Book</Button>
              <p>Language : {language}</p>
              <p>Authors : {authors}</p>
              <p>Publisher : {publisher}</p>
              <p>Description : {description}</p>
      </CardBody>
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
    </Card>
  );
};

export default JournalBoard;
