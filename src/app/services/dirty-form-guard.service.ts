import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

export interface NavAwayFromForm {
    canDeactivate: () => boolean;
}

@Injectable()
export class DirtyFormGuard implements CanDeactivate<NavAwayFromForm> {
    canDeactivate(component:NavAwayFromForm){
        return component.canDeactivate();
    }
}