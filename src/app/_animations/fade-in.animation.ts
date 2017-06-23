import { trigger, state, animate, transition, style } from "@angular/core";

export const fadeInAnimation =
    [trigger('fadeInAnimation', [
        state("init",
            style({ 
                opacity: 0,
                transform: "translate( 0, 30px)" 
            })),
        state("loaded",
            style({
                opacity: 1,
                transform: "none"
            })
        ),
        transition("init <=> loaded", animate("500ms"))
    ]
)];