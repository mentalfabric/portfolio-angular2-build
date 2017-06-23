import {Component} from "@angular/core";

interface Navigation {
    text: string,
    url: string
}

@Component({
    selector : "pt-nav",
    templateUrl : "./nav.component.html"
})

export class NavComponent {
    state : string = "active";
    menuItems : Navigation[] = [{
        text: "About",
        url: "/about"
    },
    {
        text: "Projects",
        url: "/projects"
    },
    {
        text: "Contact",
        url: "/contact"
    }]
    toggleState() {
        return "active";
    }
}