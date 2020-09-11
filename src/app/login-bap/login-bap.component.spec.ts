

// import { async , ComponentFixture, TestBed } from '@angular/core/testing';
import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { LoginBapComponent } from './login-bap.component';
import {browser, by, element,protractor} from 'protractor';

describe('LoginBapComponent', () => {
  let component: LoginBapComponent;
  // let fixture: ComponentFixture<LoginBapComponent>;
  //
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ LoginBapComponent ]
  //   })
  //   .compileComponents();
  // }));
  //
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LoginBapComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  let originalTimeout;
  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    // fixture = TestBed.createComponent(SingleArticleVideoComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should create', function(){
    browser.driver.manage().window().maximize();
    browser.get('http://localhost:4200/brand_login');
    browser.sleep(5000);
    element(by.id('username')).sendKeys("trdsip.ganesh@gmail.com");
    browser.sleep(5000);
    element(by.id('reg_pass')).sendKeys("1111");
    browser.sleep(5000);
    element(by.id("submit")).click();
    browser.sleep(5000);
  });




});
