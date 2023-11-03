import React,{useState} from 'react'
import { FAQData } from './data/FAQ_data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import '../../style/Style.css';

const FAQ = () => {
    const [showDescriptions, setShowDescriptions] = useState([]);
  
    const descriptionController = (id) => {
      const index = showDescriptions.findIndex(desc => desc === id);
      setShowDescriptions(prev => index !== -1
        ? [...prev.slice(0, index), ...prev.slice(index + 1)] 
        : [...prev, id]
      )
    }
  
    return (
      <div className='faq'>
        <h1>FAQ</h1>
        <div className='faq__root'>
          {FAQData.map((item) => (
          <div className='faq__container' key={item.id}>
            <h3 className='faq__header' onClick={() => descriptionController(item.id)}>
              {item.headText}
            </h3>
            <div className={`faq__description ${showDescriptions.includes(item.id) ? "show" : ""}`}>
              <div>
                {item.description}
              </div>
              <FontAwesomeIcon className='icon' icon={faAngleUp}/>
            </div>
          </div>
          ))}
        </div>
      </div>
    )
}

export default FAQ