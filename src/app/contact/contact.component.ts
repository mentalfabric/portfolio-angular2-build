import { Component } from "@angular/core";

import { NavAwayFromForm } from "../services/dirty-form-guard.service";

@Component ({
    selector : "pt-contact",
    templateUrl: "./contact.component.html"
})

export class ContactComponent implements NavAwayFromForm {

    canDeactivate():boolean {
		return window.confirm("You will lose the information you filled out. Are you sure?");
	}
}