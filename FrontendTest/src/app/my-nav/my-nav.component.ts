import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // This allows to put condorlabs icon within the toolbar
    iconRegistry.addSvgIcon(
      'condor',
      sanitizer.bypassSecurityTrustResourceUrl('assets/logo-dark.svg'));
   }

}
