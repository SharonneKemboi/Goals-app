/** Store our goal list here (which was removed from our goal component) */

import { Goal} from './goal';



export let Goals: Goal[] = [
    new Goal (1, 'Finish Data Science Course', 'Use online tutorials and Udemy course', new Date(2022,3,14)),
    new Goal (2,'Practice Angular content', 'Practice more by building different Angular Apps', new Date(2022,2,14)),
    new Goal (3,'Plan for holiday trip', 'Browse on cool places to visit during summer break',new Date(2022,3,14)),
    new Goal (4,'Visit my family', 'go home and see my siblings and dad', new Date(2022,1,14)),
    new Goal (5,'Prepare for Microsoft Interview', 'Update my cv and do some codility tests', new Date(2022,3,14)),
    new Goal (6,'Watch a Korean series', 'Watch different crime kdrama series', new Date(2022,3,14)),
  ];