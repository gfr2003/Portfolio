import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateForms } from 'src/app/form.utils';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public contactForm: FormGroup = CreateForms.contactForm();
  formInvalid = false;
  constructor() {}
  ngOnInit() {}
  removeMessage() {
    return (this.formInvalid = false);
  }
  sendMail() {
    if (this.contactForm.invalid) {
      return (this.formInvalid = true);
    }
    window.location.href = `mailto:gustavo.felixr@outlook.com?subject=${this.contactForm.value.assunto}
    &body=${this.contactForm.value.desc}`;
  }
}
