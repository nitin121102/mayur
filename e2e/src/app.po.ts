import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('');
  }

  get userEmail() {
    return element(by.name('user_id'));
  }
  get userPassword() {
    return element(by.name('password'));
  }
  get pr_button() {
    return element(by.id('pr-page'));
  }
  get journalist_button() {
    return element(by.id('pr-journalist5'));
  }

  get login_button() {
    return element(by.id('pr-login'));
  }

  get errorMessage() {
    return element(by.id('errsms'));
  }

  tryLogin(username: string , password: string) {
    this.userEmail.sendKeys(username);
    this.userPassword.sendKeys(password);
    this.login_button.click();
  }

  get title() {
    return element(by.id('title1'));
  }

  get description() {
    return element(by.id('description1'));
  }

  fill_form(title: string , description: string){
    this.title.sendKeys(title);
    this.description.sendKeys(description);
  }

  buttonIcon() {
    return element(by.id('iconbtn'));
  }
  Home() {
    return element(by.id('Home'));
  }
  getvideolist() {
    return element(by.id('videos'));
  }
  Pending() {
    return element(by.id('pendingvid'));
  }
  Approved() {
    return element(by.id('approvedvid'));
  }
  videohead() {
    return element(by.className('video-head'));
  }

  AddComment(comment: string) {
    element(by.id('comment')).clear();
    element(by.id('comment')).sendKeys(comment);
  }
  
}
