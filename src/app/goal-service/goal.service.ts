/**Create a service by ng g s name-0f-service */


/**Angular injectable */

import { Injectable } from '@angular/core';
import { Goals } from '../goalList'; /**we import Goals array from the goalList */

/**The class is annotated with @injectable() decorator - tells angular that this class is a service*/

@Injectable()

export class GoalService {

  getGoals(){  /**method which returns our Goals array */
    return Goals
  }

  constructor() { }
}
