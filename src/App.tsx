/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-unused-state */
import React from 'react';
import axios from 'axios';
import { TranslationInputForm } from './TranslationInputForm/TranslationInputForm';
import './App.css';


export class App extends React.Component {
  state: any;

  constructor(props) {
    super(props);
    this.state = {
      sourceLanguage: 'pl',
      translated: [],
      targetLanguages: ['en', 'ru'],
    };
  }

  private getTranslation = async ({ target, text }) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/translation/${this.state.sourceLanguage}/${target}/${text}`);


      console.log('App -> privategetTranslation -> response.data.data', response.data.data.translations[0].translatedText);

      this.setState({ translated: [...this.state.translated, { text: response.data.data.translations[0].translatedText, target }] });
      console.log('App -> privategetTranslation -> this.state.translatedText', this.state.translatedText);
    } catch (error) {
      console.error(error);
    }
  };

  public handleSubmit = (text: any) => {
    this.setState({ translated: [] });
    this.state.targetLanguages.forEach((target) => this.getTranslation({ target, text }));

    // this.setState({ translatedText: translatedToAll });
    // console.log('App -> publichandleSubmit -> translatedToAll', translatedToAll);
    // console.log('this.state.translatedText', this.state.translatedText);
  };

  public render() {
    return (
      <div className="App">

        <div>
          Source Language:
          {' '}
          {this.state.sourceLanguage}
        </div>
        <br />
        <TranslationInputForm handleSubmit={this.handleSubmit} />

        <br />

        <br />
        {this.state.translated.length ? this.state.translated.map(({ text, target }) => (
          <div key={target}>
            <br />
            <div>
              {target}
              :
              {' '}
              {text}
            </div>
            <br />

          </div>
        )) : null}


      </div>
    );
  }
}
