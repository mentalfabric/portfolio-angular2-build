import { Component, OnInit } from "@angular/core";
import { fadeInAnimation } from "../_animations/fade-in.animation";

import { NavAwayFromForm } from "../services/dirty-form-guard.service";

@Component ({
    selector : "pt-contact",
    templateUrl: "./contact.component.html",
    animations: fadeInAnimation
})

export class ContactComponent implements NavAwayFromForm {
    public state: string;

    canDeactivate():boolean {
		return window.confirm("You will lose the information you filled out. Are you sure?");
	}

    ngOnInit() {
        this.state = "init"
        setTimeout(() => this.state = "loaded", 0)
    }
}