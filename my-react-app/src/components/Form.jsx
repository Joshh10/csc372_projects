import React from 'react'
import './Form.css'
import {Button} from './Button';

function Form() {
  return (
    <div className='container'>
        <div className='row1'>
            <div >
                <h1 className='heading1'>Contact Me</h1>
            </div>
        </div>
        <div className='row2'>
            <div className='col2'>
                <h3 className='heading2'>Get in touch</h3>
                <div className='address'>
                    <strong>Email: joshel419@gmail.com</strong>
                    <br/>
                    <br/>
                    <p>
                        <strong>Phone: +1 401 924 3211</strong>
                    </p>
                </div>
            </div>
            <div className='col3'>
                <form className='contact-form'>
                    <div className='name-email'>
                        <div className='col4'>
                            <input className='form-input' id='name' name='name' placeholder='Name' type='text'/>

                        </div>
                        <div className='col4'>
                            <input className='form-input' id='email' name='email' placeholder='Email' type='text'/>

                        </div>
                    </div>
                    <textarea className='form-input3' name='message' placeholder='Message' rows='5'>

                    </textarea>
                    <br/>
                    <div>
                        <div className='form-group'>
                            <Button className='btns' buttonStyle='outline' buttonSize='medium'>
                                Submit
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form
