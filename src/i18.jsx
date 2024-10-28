import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      login: {
        title: 'Login',
        countryCode: 'Country Code',
        phoneNumber: 'Phone Number',
        phoneNumberPlaceholder: 'Enter your phone number',
        email: 'Email',
        emailPlaceholder: 'Enter your email',
        password: 'Password',
        passwordPlaceholder: 'Enter your password',
        price: 'Price',
        language: 'Language',
        submit: 'Submit'
      }
    }
  },
  es: {
    translation: {
      login: {
        title: 'Iniciar Sesión',
        countryCode: 'Código de país',
        phoneNumber: 'Número de teléfono',
        phoneNumberPlaceholder: 'Ingrese su número de teléfono',
        email: 'Correo electrónico',
        emailPlaceholder: 'Ingrese su correo electrónico',
        password: 'Contraseña',
        passwordPlaceholder: 'Ingrese su contraseña',
        price: 'Precio',
        language: 'Idioma',
        submit: 'Enviar'
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
