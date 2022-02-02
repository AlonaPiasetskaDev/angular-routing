import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface ComponentCanDeactivate {
  CanDeactivate: () => boolean | Observable<boolean>;
}

export class ExitLoginGuard implements CanDeactivate<ComponentCanDeactivate> {

  canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean {
    return component.CanDeactivate ? component.CanDeactivate() : true;
  }

}
