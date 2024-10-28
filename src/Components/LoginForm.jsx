import React, { useState, useEffect } from 'react';
import countryData from './countryData';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import './LoginForm.css';

const LoginForm = () => {
  const { t } = useTranslation();
  const [country, setCountry] = useState('US');
  const [currency, setCurrency] = useState('$');
  const [language, setLanguage] = useState('en');
  const [price, setPrice] = useState(100);
  const [formData, setFormData] = useState({
    phoneNumber: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    const savedCountry = localStorage.getItem('country');
    const savedLanguage = localStorage.getItem('language');
    if (savedCountry) setCountry(savedCountry);
    if (savedLanguage) setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    const selectedCountry = countryData.find((c) => c.code === country);
    if (selectedCountry) {
      setCurrency(selectedCountry.currencySymbol);
    }
    localStorage.setItem('country', country);
    localStorage.setItem('language', language);
  }, [country, language]);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
  };

  return (
    <div className="login-form">
      <h1>{t('login.title')}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {t('login.countryCode')}:
          <select value={country} onChange={handleCountryChange}>
            {countryData.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.dialCode}
              </option>
            ))}
          </select>
        </label>

        <label>
          {t('login.phoneNumber')}: +{countryData.find((c) => c.code === country)?.dialCode}
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder={t('login.phoneNumberPlaceholder')}
          />
        </label>

        <label>
          {t('login.email')}:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={t('login.emailPlaceholder')}
          />
        </label>

        <label>
          {t('login.password')}:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder={t('login.passwordPlaceholder')}
          />
        </label>

        <p>
          {t('login.price')}: {currency}{price}
        </p>

        <label>
          {t('login.language')}:
          <select value={language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </label>

        <button type="submit">{t('login.submit')}</button>
      </form>
    </div>
  );
};

export default LoginForm;
