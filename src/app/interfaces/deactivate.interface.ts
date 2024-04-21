import { Observable } from "rxjs";

export interface IDeactivateComponent{
  canExit: () => boolean | Promise<boolean> | Observable<boolean>;
}