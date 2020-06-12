import React from 'react';
import axios from 'axios';
import {
  Grid, Paper,
} from '@material-ui/core';
import { TranslationInputForm } from '../TranslationInputForm';
import { baseUrl } from '../config/config';
import { Header } from '../Header';

import { Footer } from '../Footer';
import { Translation } from '../Translation';

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
      const response = await axios.get(`${baseUrl}/api/v1/translation/${this.state.sourceLanguage}/${target}/${text}`);

      this.setState({ translated: [...this.state.translated, { text: response.data.data.translations[0].translatedText, target }] });
    } catch (error) {
      console.error(error);
    }
  };

  public handleSubmit = (text: any) => {
    this.setState({ translated: [] });
    this.state.targetLanguages.forEach((target) => this.getTranslation({ target, text }));
  };

  public render() {
    return (
      <div className="app">
        <Grid
          container
          spacing={3}
        >
          <Grid item xs={12} className="app-header">
            <Header sourceLanguage={this.state.sourceLanguage} />
          </Grid>
          <Grid item xs={12} className="app-body">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className="app-paper">
                  <TranslationInputForm handleSubmit={this.handleSubmit} />
                </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              {this.state.translated.length ? this.state.translated.map(({ text, target }) => (
                <Grid
                  item
                  xs={12}
                >
                  <Translation text={text} target={target} />
                </Grid>
              )) : null}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </div>
    );
  }
}
