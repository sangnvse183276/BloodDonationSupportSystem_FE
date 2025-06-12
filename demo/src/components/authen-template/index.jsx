import React from 'react';
import './index.css';
import LoginForm from '../../authen-form/LoginForm';
import RegisterForm from '../../authen-form/RegisterForm';
export { default as Header } from './Header';
export { default as Hero } from './Hero';
export { default as AboutSection } from './AboutSection';
export { default as EventsSection } from './EventsSection';
export { default as TestimonialsSection } from './TestimonialsSection';
export { default as FAQSection } from './FAQSection';
export { default as BlogSection } from './BlogSection';
export { default as Footer } from './Footer';

function AuthenTemplate({isLogin}) {
  return (
    <div className='authen-template'>
      <div className="authen-template_form">
        {isLogin ? <LoginForm/> : <RegisterForm/>}
      </div>

      <div className='authen-template_image'></div>
    </div>
  )
}

export default AuthenTemplate
