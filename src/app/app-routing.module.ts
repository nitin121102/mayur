import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UploadingFilesComponent} from './uploading-files/uploading-files.component';
import { AddTagsComponent } from './add-tags/add-tags.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AllComponentComponent} from './all-component/all-component.component';
import { AuthGuardService } from './auth-guard.service';

import {PrTeamPageComponent} from './pr-team-page/pr-team-page.component';
import {PrPageLoginComponent} from './pr-page-login/pr-page-login.component';
import {PrRegisterComponent} from './pr-register/pr-register.component';
import {SelectionTypeComponent} from './selection-type/selection-type.component';
import {OrganizationRegisterComponent} from './organization-register/organization-register.component';
import {AgencyRegisterComponent} from './agency-register/agency-register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PrPricingComponent } from './pr-pricing/pr-pricing.component';
import {RecommendedPageComponent} from './recommended-page/recommended-page.component';
import {PrProfileComponent} from './pr-profile/pr-profile.component';
import {DraftsComponent} from './drafts/drafts.component';
import {HomeDashboardComponent} from './home-dashboard/home-dashboard.component';
import {LoginBapComponent} from './login-bap/login-bap.component';
import {ProfileComponent} from './profile/profile.component';
import {BapComponent} from './bap/bap.component';
import {BrandAmbFormComponent} from './brand-amb-form/brand-amb-form.component';
import {BapuploadComponent} from './bapupload/bapupload.component';
import {NewHomeComponent} from './new-home/new-home.component';
import { EditprPageComponent } from './editpr-page/editpr-page.component';
import { PrMypostComponent } from './pr-mypost/pr-mypost.component';
import { PrPageLoginComponentBeforeComponent } from './pr-page-login-component-before/pr-page-login-component-before.component';
import { PrPageJournalistLoginComponent } from './pr-page-journalist-login/pr-page-journalist-login.component';
import { PrPageJournalistComponent } from './pr-page-journalist/pr-page-journalist.component';
import { EditDraftComponent } from './edit-draft/edit-draft.component';

import { PrLandingPageNewswireComponent } from './pr-landing-page-newswire/pr-landing-page-newswire.component';
import { PrFooterComponent } from './pr-footer/pr-footer.component';
import { SlidertryComponent } from './slidertry/slidertry.component';
import {AuthorDashboardComponent } from './author-dashboard/author-dashboard.component';
import { EditorLoginComponent } from './editor-login/editor-login.component';
import { EditorApprovalComponent } from './editor-approval/editor-approval.component';
import { SingleuserapprovalComponent} from './singleuserapproval/singleuserapproval.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { PublishComponent } from './publish/publish.component';
import { ApplyPostComponent } from './apply-post/apply-post.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { QuestionaireComponent } from './questionaire/questionaire.component';
import { StudentslistComponent } from './studentslist/studentslist.component';
import { SinglestudentComponent } from './singlestudent/singlestudent.component';
// <<<<<<< HEAD
import { HrloginComponent } from './hrlogin/hrlogin.component';
// =======


import { AboutUsComponent } from './about-us/about-us.component';
import { ImagesComponent } from  './images/images.component';
import {AudiosPageComponent } from './audios-page/audios-page.component';
import {VideosPageComponent } from './videos-page/videos-page.component';
// >>>>>>> 10cd750ba5f5b78de7a06fa75944acf69ef5b988
const routes: Routes = [
    //BAP
  // {path: 'old' , component: BapComponent},
  // {path: 'brand-ambassador-program' , component: NewHomeComponent},
  // {path: 'brand-form/:stream' , component: BrandAmbFormComponent},
  // {path: 'brand_login' , component: LoginBapComponent},
  {path: 'user_upload' , component: BapuploadComponent},
  {path: 'questionaire', component: QuestionaireComponent},
  {path: 'apply-post',component: ApplyPostComponent},
  {path: 'personal-details', component: PersonalDetailsComponent},
  {path: 'profile' , component: ProfileComponent},
  {path: 'advertising' , component: AdvertisingComponent},
  {path: 'verify-email', component: VerifyEmailComponent},
  // {path: 'Publicaton-type', component: PublishComponent},

  {path: 'about', component: AboutUsComponent },
  {path: 'formats/audios', component: AudiosPageComponent},
  {path: 'formats/images', component: ImagesComponent},
  {path: 'formats/videos', component: VideosPageComponent},
  //BAP

    // MAM
    {path: 'hr-login', component: HrloginComponent},
    {path: 'studentslist', component: StudentslistComponent},
  {path: '' , component: HomeDashboardComponent},
  {path: 'login' , component: PrPageLoginComponent},
  {path: 'login-before' , component: PrPageLoginComponentBeforeComponent},
  {path: 'journalist-login' , component: PrPageJournalistLoginComponent},
  {path: 'Upload/edit-draft/:id' , component: EditDraftComponent},
  {path: 'editor-login', component: EditorLoginComponent},
  {path: 'editor-approval' , component: EditorApprovalComponent},
  
  {path: 'editor-approval/:id/:title' , component: SingleuserapprovalComponent},
  {path: 'studentslist/:id/:college', component: SinglestudentComponent},
  // {path: 'pr-journalist-page' , component: PrPageJournalistComponent},
  {path: 'register' , component: PrRegisterComponent},
  // {path: 'register' , component: SelectionTypeComponent},
  {path: 'your-profile' , component: PrProfileComponent},
  {path: 'mydrafts/:id' , component: DraftsComponent},
  {path: 'pr-reg-organization/:authority' , component: OrganizationRegisterComponent},
  {path: 'pr-reg-agency/:authority' , component: AgencyRegisterComponent},
  {path: 'Upload' , component: PrTeamPageComponent},
  {path: 'myposts/:id', component: PrMypostComponent},
  {path: 'editpr-page/:id', component : EditprPageComponent},
  {path: 'forgot-password' , component: ForgotPasswordComponent},
  {path: 'new/password/:id', component: ResetPasswordComponent },
  {path: 'pricing', component: PrPricingComponent },
  {path: 'packages', component: RecommendedPageComponent},
  {path: 'add-tag' , component: AddTagsComponent},

  {path:'pr-landing-page-newswire',component: PrLandingPageNewswireComponent},
  {path:'pr-footer',component: PrFooterComponent},
  {path:'slidertry',component: SlidertryComponent},
  {path: 'author-dashboard' , component: AuthorDashboardComponent},
  {path: 'dashboard' , component: DashboardComponent,
    children: [
      {path: '' , component: AllComponentComponent} ,
      {path: 'All' , component: AllComponentComponent},
    ]
  },
    // QC -control
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
