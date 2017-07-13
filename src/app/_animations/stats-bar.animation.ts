import { trigger, state, animate, transition, style } from "@angular/core";

export const statBarAnimation = 
    [trigger('statBarAnimation', [
        state("init",
            style({
                width: "0"
            })),
        state("one",
            style({
                width: "20%"
            })),
        state("two",
            style({
                width: "40%"
            })),
        state("three",
            style({
                width: "60%"
            })),
        state("four",
            style({
                width: "80%"
            })),
        state("five",
            style({
                width: "100%"
            })),
        transition("init <=> one", animate("1000ms")),
        transition("init <=> two", animate("1000ms")),
        transition("init <=> three", animate("1000ms")),
        transition("init <=> four", animate("1000ms")),
        transition("init <=> five", animate("1000ms"))
    ])]