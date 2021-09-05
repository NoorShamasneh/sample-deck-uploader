import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FileUpload} from 'primeng/fileupload';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-deck-creator',
  templateUrl: './deck-creator.component.html',
  styleUrls: ['./deck-creator.component.scss']
})
export class DeckCreatorComponent implements OnInit {

  editForm = this.fb.group({
    companyName: ['', Validators.required],
    description: ['', Validators.required],
    fileName: ['', Validators.required],
    file: ['', Validators.required]

  });

  isSaving = false;
  @ViewChild('offerUploader', {static: false}) offerUploader: FileUpload;

  offersURL = environment.SERVER_API_URL;
  uploadedFiles: any[] = [];


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  save() {
  }

  previousState(): void {
    window.history.back();
  }

  chooseFile($event) {
    let newFileValue;
    if ($event.target.files.length > 0) {
      const selectedFile = $event.target.files[0];
      if (selectedFile.name.toLowerCase().match(/.(ppt|pdf|pptx)$/i)){
        newFileValue = selectedFile;
      } else {
        this.editForm.patchValue({
          fileName: ''
        });
      }
    }
    this.editForm.patchValue({
      file: newFileValue
    });
  }


}
