import { Component, OnInit } from "@angular/core";
import { fadeInAnimation } from "../_animations/fade-in.animation";
import { ActivatedRoute } from "@angular/router"

interface Stats {
    name: string,
    value: number
}

@Component ({
    selector: "pt-about",
    templateUrl: "./about.component.html",
    animations: fadeInAnimation
})

export class AboutComponent {
    public state: string;
    

    myStats : Stats[] = [{
        name: "HTML",
        value: 5
    }]

    ngOnInit() {
        this.state = "init";
        setTimeout(() => this.state = "loaded", 0)
    }
}