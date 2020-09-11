import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploading-files',
  templateUrl: './uploading-files.component.html',
  styleUrls: ['./uploading-files.component.css']
})
export class UploadingFilesComponent implements OnInit {
  tags: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  openTags() {
     this.tags = true;
     console.log('please Enter tags');
  }

}
