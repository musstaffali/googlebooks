import React, { useState } from 'react';
import './App.css';
import {
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  Spinner
} from 'reactstrap';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import JournalBoard from './JournalBoard.jsx';
function App() {
  const [inquire, setQuery] = useState('');
  const [stack, setLoading] = useState(false);
  const [plastic, setCards] = useState([]);
  const driveComply = () => {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${inquire}`
        )
        .then(res => {
    
            if (res.data.items.length > 0) {
              setCards(res.data.items);
              setLoading(false);
            }})
        .catch(err => {
          setLoading(true);
          console.log(err.response);
        });
    };
  const headline = () => {
    return (
      <div className='main-image d-flex justify-content-center align-items-center flex-column'>
        {/* Overlay */}
        <div className='filter'></div>
        <h1
          className='display-2 text-center text-white mb-3'
          style={{ zIndex: 2 }}
        >
          Google Books
        </h1>
        <div style={{ width: '59%', zIndex: 2 }}>
          <InputGroup size='lg' className='mb-3'>
            <Input
              placeholder='Book Search'
              value={inquire}
              onChange={e => setQuery(e.target.value)}
            />
            <InputGroupAddon addonType='append'>
              <Button color='secondary' onClick={driveComply}>
                <i className='fas fa-search'></i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    );
  };
  const OperateCards = () => {
    if (stack) {
      return (
        <div className='d-flex justify-content-center mt-3'>
          <Spinner style={{ width: '4rem', height: '4rem' }} />
        </div>
      );
    } else {
      const items = plastic.map((item, i) => {
        let thumbnail = '';
        if (item.volumeInfo.imageLinks) {
          thumbnail = item.volumeInfo.imageLinks.thumbnail;
        }
        return (
          <div className='col-lg-4 mb-3' key={item.id}>
            <JournalBoard
              thumbnail={thumbnail}
              title={item.volumeInfo.title}
              pageCount={item.volumeInfo.pageCount}
              language={item.volumeInfo.language}
              authors={item.volumeInfo.authors}
              publisher={item.volumeInfo.publisher}
              description={item.volumeInfo.description}
              previewLink={item.volumeInfo.previewLink}
              infoLink={item.volumeInfo.infoLink}
            />
          </div>
        );
      });
      return (
        <div className='container my-5'>
          <div className='row'>{items}</div>
        </div>
      );
    }
  };
  return (
    <div className='w-99 h-99'>
      {headline()}
      {OperateCards()}
    </div>
  );
}

export default App;
