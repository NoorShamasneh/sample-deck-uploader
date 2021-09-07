import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FileUpload} from 'primeng/fileupload';
import {DeckService} from '../deck.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {NgxUiLoaderService} from 'ngx-ui-loader';

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
  showError = false;
  @ViewChild('offerUploader', {static: false}) offerUploader: FileUpload;


  constructor(private fb: FormBuilder, private deckService: DeckService, private router: Router, private ngxService: NgxUiLoaderService) {
  }

  ngOnInit() {
  }

  save() {
    this.isSaving = true;
    this.showError = false;
    const formData = new FormData();
    this.ngxService.start();
    formData.append('originalFile', this.editForm.get('file').value);
    formData.append('companyName', this.editForm.get('companyName').value);
    formData.append('description', this.editForm.get('description').value);
    formData.append('originalFileName', this.editForm.get('fileName').value);
    this.deckService.create(formData).subscribe((res) => {
      this.isSaving = false;
      this.ngxService.stop();
      if (res.body.id) {
        this.router.navigate([res.body.id]);
      }
    }, error => {
      this.isSaving = false;
      this.ngxService.stop();
      this.showError = true;
    });

  }

  previousState(): void {
    window.history.back();
  }

  chooseFile($event) {
    let newFileValue;
    if ($event.target.files.length > 0) {
      const selectedFile = $event.target.files[0];
      if (selectedFile.name.toLowerCase().match(/.(ppt|pdf|pptx)$/i)) {
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
