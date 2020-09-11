import { AppPage } from './app.po';
import {logging } from 'protractor';
import {browser, by, element, protractor} from 'protractor';
describe('Blogs', () => {
  let page: AppPage;
  const EC = protractor.ExpectedConditions;
  beforeEach(() => {
    page = new AppPage();
    
  });



  


           

   it('should dashbord Icon Button and dashbord title', () => {
    browser.manage().window().maximize();
    page.navigateTo();
     page.tryLogin('trdsip.rahul@gmail.com' , '12345');
     browser.switchTo().alert().accept();
     page.buttonIcon().click();
   });

   it('should click home and check the page heading', () => {
    browser.manage().window().maximize();
    page.navigateTo();
    page.tryLogin('trdsip.rahul@gmail.com' , '12345');
    browser.switchTo().alert().accept();
    page.buttonIcon().click();
    page.Home().click();
    expect(element(by.className('page-heading')).getText()).toEqual('QC Officer Dashboard');

   });

   it('should click home and check the contents', () => {
    browser.manage().window().maximize();
    page.navigateTo();
    page.tryLogin('trdsip.rahul@gmail.com' , '12345');
    browser.switchTo().alert().accept();
    page.buttonIcon().click();
    page.Home().click();
    expect(element(by.id('videos')).getText()).toEqual(' Videos');
    //expect(element(by.id('podcast')).getText()).toEqual('Podcast');

   });

   it('should click videos and check the page heading', () => {
    browser.manage().window().maximize();
    page.navigateTo();
    page.tryLogin('trdsip.rahul@gmail.com' , '12345');
    browser.switchTo().alert().accept();
    page.buttonIcon().click();
    page.Home().click();
    page.getvideolist().click();
    expect(element(by.className('page-heading')).getText()).toEqual('Videos List');

   });

   it('should click pending videos and check the page heading', () => {
    browser.manage().window().maximize();
    page.navigateTo();
    page.tryLogin('trdsip.rahul@gmail.com' , '12345');
    browser.switchTo().alert().accept();
    page.buttonIcon().click();
    page.Pending().click();
    expect(element(by.className('page-heading')).getText()).toEqual('Pending Videos');

   });

   it('should display home page', () => {
    browser.manage().window().maximize();
     page.navigateTo(); 
     
     browser.sleep(1000);

     page.pr_button.click();

     browser.sleep(1000);
     
   });

   it('direct to journalist side', () => {
    
     page.journalist_button.click();

     browser.sleep(1000);

     });

     it('should login if correct credentials entered and display the publisher form', () => {
    
      page.tryLogin('ask' , 'ask');

      // browser.switchTo().alert().accept();

      browser.sleep(1000);
 
      });



      it('login Successfully , publisher form displayed', () => {
    
        // page.fill_form('title' , 'description');
  
        // browser.switchTo().alert().accept();
  
        browser.sleep(1000);
   
        });

        it('filling the publisher form', () => {
    
          page.fill_form('title' , 'description');
    
          // browser.switchTo().alert().accept();
    
          browser.sleep(1000);
     
          });

          it('form published successfully if all fields filled and limit not exceeded', () => {
    
            // page.fill_form('title' , 'description');
      
            // browser.switchTo().alert().accept();
      
            browser.sleep(1000);
       
            });

            it('show profile component', () => {
    
              // page.fill_form('title' , 'description');
        
              // browser.switchTo().alert().accept();
        
              browser.sleep(1000);
         
              });
          it('show draft component', () => {
    
           // page.fill_form('title' , 'description');
          
          // browser.switchTo().alert().accept();
          
          browser.sleep(1000);

          });

          it('check edit draft option working correctly', () => {
    
            // page.fill_form('title' , 'description');
           
           // browser.switchTo().alert().accept();
           
           browser.sleep(1000);
 
           });

           it('filling the publisher form in the edit draft', () => {
    
            // page.fill_form('title' , 'description');
           
           // browser.switchTo().alert().accept();
           
           browser.sleep(1000);
 
           });

          it('show myposts component', () => {
    
            // page.fill_form('title' , 'description');
           
           // browser.switchTo().alert().accept();
           
           browser.sleep(1000);
 
           });

           it('check logout option in the menu', () => {
    
            // page.fill_form('title' , 'description');
           
           // browser.switchTo().alert().accept();
           
           browser.sleep(1000);
 
           });

           it('all test verified', () => {
    
            // page.fill_form('title' , 'description');
           
           // browser.switchTo().alert().accept();
           
           browser.sleep(1000);
 
           });
   it('should click approved videos and check the page heading', () => {
    browser.manage().window().maximize();
    page.navigateTo();
    page.tryLogin('trdsip.rahul@gmail.com' , '12345');
    browser.switchTo().alert().accept();
    page.buttonIcon().click();
    page.Approved().click();
    expect(element(by.className('page-heading')).getText()).toEqual('Approved Videos');

   });

  it('should open a video', () => {
  browser.manage().window().maximize();
  page.navigateTo();
  page.tryLogin('trdsip.rahul@gmail.com','12345');
  browser.switchTo().alert().accept();
  page.buttonIcon().click();
  page.Home().click();
  page.getvideolist().click();
  page.videohead().click();

  });

  it('should open a video and check the page-heading', () => {
    browser.manage().window().maximize();
    page.navigateTo();
    page.tryLogin('trdsip.rahul@gmail.com','12345');
    browser.switchTo().alert().accept();
    page.buttonIcon().click();
    page.Home().click();
    page.getvideolist().click();
    page.videohead().click();
    expect(element(by.className('page-heading')).getText()).toEqual('Video checking');
  
    });

    it('should open a video and check if rules are present', () => {
      browser.manage().window().maximize();
      page.navigateTo();
      page.tryLogin('trdsip.rahul@gmail.com','12345');
      browser.switchTo().alert().accept();
      page.buttonIcon().click();
      page.Home().click();
      page.getvideolist().click();
      page.videohead().click();
      expect(element(by.id('rules')).getText()).toEqual('Rules');
    
      });

      it('should open a video and check if comments are present', () => {
        browser.manage().window().maximize();
        page.navigateTo();
        page.tryLogin('trdsip.rahul@gmail.com','12345');
        browser.switchTo().alert().accept();
        page.buttonIcon().click();
        page.Home().click();
        page.getvideolist().click();
        page.videohead().click();
        expect(element(by.id('comments')).getText()).toEqual('Comments');
      
        });

        it('should open a video and check if check list is present', () => {
          browser.manage().window().maximize();
          page.navigateTo();
          page.tryLogin('trdsip.rahul@gmail.com','12345');
          browser.switchTo().alert().accept();
          page.buttonIcon().click();
          page.Home().click();
          page.getvideolist().click();
          page.videohead().click();
          expect(element(by.id('checklist')).getText()).toEqual('Check List');
          expect(element(by.id('audiocheck')).getText()).toEqual('Audio Check');
          expect(element(by.id('brightcheck')).getText()).toEqual('Brightness Check');
          expect(element(by.id('fontcheck')).getText()).toEqual('Font Check');
          expect(element(by.id('videocheck')).getText()).toEqual('Video Check');
          });

          it('should open a video and check if check list is present', () => {
            browser.manage().window().maximize();
            page.navigateTo();
            page.tryLogin('trdsip.rahul@gmail.com','12345');
            browser.switchTo().alert().accept();
            page.buttonIcon().click();
            page.Home().click();
            page.getvideolist().click();
            page.videohead().click();
            page.AddComment('Rajshaxsaxa');
            });



 
it('redirect to blogs main home page', () => {

  // page.fill_form('title' , 'description');

  // browser.switchTo().alert().accept();

  browser.sleep(1000);

  });

it('redirect to published tab', () => {
    
  // page.fill_form('title' , 'description');

  // browser.switchTo().alert().accept();

  browser.sleep(1000);

  });

  it('showing the concerned posts in the tab', () => {
    
    // page.fill_form('title' , 'description');
  
    // browser.switchTo().alert().accept();
  
    browser.sleep(1000);
  
    });
  
  
    it('redirecting to link when particular post is clicked', () => {

      // page.fill_form('title' , 'description');

      // browser.switchTo().alert().accept();

      browser.sleep(1000);
 
      });
//   });
});



     
    // it('show draft component', () => {

    //  // page.fill_form('title' , 'description');
    
    // // browser.switchTo().alert().accept();
    
    // browser.sleep(1000);

    // });

    // it('check edit draft option working correctly', () => {

    //   // page.fill_form('title' , 'description');
     
    //  // browser.switchTo().alert().accept();
     
    //  browser.sleep(1000);

    //  });