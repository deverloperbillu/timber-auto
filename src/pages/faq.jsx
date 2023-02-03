import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import { useState} from 'react'
const Faq = () => {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected (i)

    }
    const data = [
        {
            question : 'What is Lorem Ipsum?',
            answer : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.'
        },
        {
            question : 'What is Lorem Ipsum?',
            answer : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.'
        }, 
        {
            question : 'What is Lorem Ipsum?',
            answer : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.'
        }, 
        {
            question : 'What is Lorem Ipsum?',
            answer : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.'
        },     
    ]
  return (
    <>
    <div className='inner-banner'>
      <div className='container'>
        <h3>FAQ</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><span className='sap'><FaAngleRight /></span></li>
          <li><span>FAQ</span></li>
        </ul>
      </div>
    </div>
    
    <div className='inner-page'>
        <div className='faq-sec'>
            <div className='container'>
                <div className='custom-heading'>
                    <h2>FREQUENTLY ASK QUESTIONS</h2>
                </div>
                <div className='wrap-acrding'>
                    <div className='acrd'>
                        {data.map((item, i) =>(
                            <div className='item'>
                                <div className='title' onClick={() => toggle(i)}>
                                    <h2>{item.question}</h2>
                                    <span>{selected === i ? '-' : '+'}</span>
                                </div>
                                <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Faq
