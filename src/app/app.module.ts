
import { Routes, RouterModule } from '@angular/router';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadingFilesComponent } from './uploading-files/uploading-files.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatNativeDateModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import { AddTagsComponent } from './add-tags/add-tags.component';
import {MatSelectModule} from '@angular/material/select';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { AllComponentComponent } from './all-component/all-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { CarouselModule } from 'ngx-owl-carousel-o';


// ---------------------------------------------------------------------------------------------------------------
import { PrTeamPageComponent } from './pr-team-page/pr-team-page.component';
import { PrPageLoginComponent } from './pr-page-login/pr-page-login.component';
import { LoginPrComponent } from './login-pr/login-pr.component';
import { PrRegisterComponent } from './pr-register/pr-register.component';
import { SelectionTypeComponent } from './selection-type/selection-type.component';
import { OrganizationRegisterComponent } from './organization-register/organization-register.component';
import { AgencyRegisterComponent } from './agency-register/agency-register.component';
import {UserserviceService} from './userservice.service';
import {DataServiceService} from './data-service.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// ----------------------------------------------------------------------------------------------------------------
import {RecommendedPageComponent, PublishingPlanComponent} from './recommended-page/recommended-page.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PrPricingComponent } from './pr-pricing/pr-pricing.component';
import { PrProfileComponent } from './pr-profile/pr-profile.component';
import { PrHeaderComponent } from './pr-header/pr-header.component';
import { DraftsComponent } from './drafts/drafts.component';
import { HomeDashboardComponent, ComingSoonComponent } from './home-dashboard/home-dashboard.component';
import { WindowRef} from './window_ref';
import { LoginBapComponent } from './login-bap/login-bap.component';
import { BrandHeaderComponent } from './brand-header/brand-header.component';
import { ProfileComponent } from './profile/profile.component';
import { BapComponent } from './bap/bap.component';
import { BapuploadComponent } from './bapupload/bapupload.component';
import { BrandAmbFormComponent } from './brand-amb-form/brand-amb-form.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NewHomeComponent } from './new-home/new-home.component';
import { ItAmbassidorComponent } from './it-ambassidor/it-ambassidor.component';
import { PrRegiHeaderComponent } from './pr-regi-header/pr-regi-header.component';
import { EditprPageComponent } from './editpr-page/editpr-page.component';
import { PrMypostComponent } from './pr-mypost/pr-mypost.component';
import { PrPageLoginComponentBeforeComponent } from './pr-page-login-component-before/pr-page-login-component-before.component';
import { PrPageJournalistLoginComponent } from './pr-page-journalist-login/pr-page-journalist-login.component';
import { PrPageJournalistComponent } from './pr-page-journalist/pr-page-journalist.component';
import { EditDraftComponent } from './edit-draft/edit-draft.component';
import { EditorModule } from '@progress/kendo-angular-editor';

import { PrLandingPageNewswireComponent } from './pr-landing-page-newswire/pr-landing-page-newswire.component';
import { PrFooterComponent } from './pr-footer/pr-footer.component';
import { SlidertryComponent } from './slidertry/slidertry.component';
import { AuthorDashboardComponent } from './author-dashboard/author-dashboard.component';
import { EditorLoginComponent } from './editor-login/editor-login.component';
import { EditorApprovalComponent } from './editor-approval/editor-approval.component';
import { SingleuserapprovalComponent } from './singleuserapproval/singleuserapproval.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { PublishComponent } from './publish/publish.component';
import { ApplyPostComponent } from './apply-post/apply-post.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { QuestionaireComponent } from './questionaire/questionaire.component';
import { HrloginComponent } from './hrlogin/hrlogin.component';
import { StudentslistComponent } from './studentslist/studentslist.component';
import { SinglestudentComponent } from './singlestudent/singlestudent.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { ImagesComponent } from './images/images.component';
import { AudiosPageComponent } from './audios-page/audios-page.component';
import { VideosPageComponent } from './videos-page/videos-page.component';

import { SliderModule } from 'angular-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    UploadingFilesComponent,
    AddTagsComponent,
    DashboardComponent,
    AllComponentComponent,

    // -----------------------------------------------
    PrTeamPageComponent,
    PrPageLoginComponent,
    LoginPrComponent,
    PrRegisterComponent,
    SelectionTypeComponent,
    OrganizationRegisterComponent,
    AgencyRegisterComponent,
    ForgotPasswordComponent,

    ResetPasswordComponent,
    PrPricingComponent,
    PrProfileComponent,
    PrHeaderComponent,
    DraftsComponent,
    HomeDashboardComponent,
    ComingSoonComponent,
    LoginBapComponent,
    BrandHeaderComponent,
    ProfileComponent,
    BapComponent,
    BapuploadComponent,
    BrandAmbFormComponent,
    NewHomeComponent,
    ItAmbassidorComponent,
    PrRegiHeaderComponent,
    EditprPageComponent,
    PrMypostComponent,
    PrPageLoginComponentBeforeComponent,
    PrPageJournalistLoginComponent,
    PrPageJournalistComponent,
    EditDraftComponent,
    RecommendedPageComponent,
    PublishingPlanComponent,

    PrLandingPageNewswireComponent,
    PrFooterComponent,
    SlidertryComponent,
    AuthorDashboardComponent,
    EditorLoginComponent,
    EditorApprovalComponent,
    SingleuserapprovalComponent,
    AdvertisingComponent,
    VerifyEmailComponent,
    PublishComponent,
    ApplyPostComponent,
    PersonalDetailsComponent,
    QuestionaireComponent,
    HrloginComponent,
    StudentslistComponent,
    SinglestudentComponent,
    
    AboutUsComponent,
    ImagesComponent,
    AudiosPageComponent,
    VideosPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpModule,
    HttpClientModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    MatToolbarModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    MatSidenavModule,
    VgBufferingModule,
    MatDialogModule,
    MatMenuModule,

    SliderModule,

    RouterModule.forRoot([]),
    CarouselModule,
    HttpClientModule,
    MatProgressBarModule,
    HttpModule,
    // ------------------------------
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBegOaO4MOHq0TRJgtcxMHh3as6CRncugI',
      authDomain: 'dpmtrd.firebaseapp.com',
      databaseURL: 'https://dpmtrd.firebaseio.com',
      projectId: 'dpmtrd',
      storageBucket: 'dpmtrd.appspot.com',
      messagingSenderId: '84699580355'
    }),
    AngularFireDatabaseModule,
    EditorModule,
  ],
  entryComponents: [PrPageLoginComponent,PublishingPlanComponent,ComingSoonComponent],
  providers: [MatDatepickerModule, WindowRef, UserserviceService, DataServiceService, AuthGuardService, AuthenticationService],
  bootstrap: [AppComponent],

})
export class AppModule { }
