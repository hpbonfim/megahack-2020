import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/shared/services/user-data.service';
import markForm from 'src/app/shared/functions/mark-form.function';
import Swal from 'sweetalert2';
import messageFormValidation from 'src/app/shared/functions/form-message-validation.function';
import { ContractDecryptService } from './contract-decrypt.service';
import { Contract } from 'src/app/shared/models/contract.model';

@Component({
  selector: 'app-page-confirm-contract-preview',
  templateUrl: './page-confirm-contract-preview.component.html',
  styleUrls: ['./page-confirm-contract-preview.component.scss'],
})
export class PageConfirmContractPreviewComponent implements OnInit {
  @Input() contractId: number;
  @Output() handleClose = new EventEmitter();

  form: FormGroup;
  user: User;
  showContract = false;
  contract: Contract;

  constructor(
    private router: Router,
    private userDataService: UserDataService,
    private contractDecryptService: ContractDecryptService
  ) {}

  ngOnInit(): void {
    this.user = this.userDataService.getUserData();

    this.createForm();
  }

  closeContract = () => {
    this.contract = null;
    this.showContract = false;
    this.handleClose.emit();
  };

  handleSubmit = async () => {
    const { _id } = this.user;
    markForm(this.form);
    if (this.form.invalid) {
      return;
    }

    const { password } = this.form.value;

    const data = { _id: this.contractId, password };

    const response = await this.contractDecryptService.post(data).toPromise();
    this.contract = response;
    console.log(response);

    if (response) {
      Swal.fire('Sucesso', 'Códico validado!', 'success').then(() => {
        this.showContract = true;
      });
    }
  };

  getErrorMessage = (controlName) =>
    messageFormValidation(this.form.get(controlName));

  private createForm() {
    this.form = new FormGroup({
      password: new FormControl('', [Validators.required]),
    });
  }
}
