import { atwoodText } from './atwood';
import { bradburyText } from './bradbury';
import { christieText } from './christie';
import { dickText } from './dick';
import { doyleText } from './doyle';
import { faulknerText } from './faulkner';
import { fitzgeraldText } from './fitzgerald';
import { jacksonText } from './jackson';
import { kingText } from './king';
import { londonText } from './london';
import { lovecraftText } from './lovecraft';
import { mccarthyText } from './mccarthy';
import { nabokovText } from './nabokov';
import { salingerText } from './salinger';
import { shakespeareText } from './shakespeare';
import { steinbeckText } from './steinbeck';
import { tolkienText } from './tolkien';
import { tolstoyText } from './tolstoy';
import { updikeText } from './updike';
import { wildeText } from './wilde';
import { williamsText } from './williams';

export type Author = 
  | 'atwood' | 'bradbury' | 'christie' | 'dick' | 'doyle' 
  | 'faulkner' | 'fitzgerald' | 'jackson' | 'king' | 'london'
  | 'lovecraft' | 'mccarthy' | 'nabokov' | 'salinger' | 'shakespeare'
  | 'steinbeck' | 'tolkien' | 'tolstoy' | 'updike' | 'wilde'
  | 'williams';

export const AUTHORS: Record<Author, string[]> = {
  atwood: atwoodText,
  bradbury: bradburyText,
  christie: christieText,
  dick: dickText,
  doyle: doyleText,
  faulkner: faulknerText,
  fitzgerald: fitzgeraldText,
  jackson: jacksonText,
  king: kingText,
  london: londonText,
  lovecraft: lovecraftText,
  mccarthy: mccarthyText,
  nabokov: nabokovText,
  salinger: salingerText,
  shakespeare: shakespeareText,
  steinbeck: steinbeckText,
  tolkien: tolkienText,
  tolstoy: tolstoyText,
  updike: updikeText,
  wilde: wildeText,
  williams: williamsText,
};

export const AUTHOR_NAMES: Record<Author, string> = {
  atwood: 'Margaret Atwood',
  bradbury: 'Ray Bradbury',
  christie: 'Agatha Christie',
  dick: 'Philip K. Dick',
  doyle: 'Arthur Conan Doyle',
  faulkner: 'William Faulkner',
  fitzgerald: 'F. Scott Fitzgerald',
  jackson: 'Shirley Jackson',
  king: 'Stephen King',
  london: 'Jack London',
  lovecraft: 'H.P. Lovecraft',
  mccarthy: 'Cormac McCarthy',
  nabokov: 'Vladimir Nabokov',
  salinger: 'J.D. Salinger',
  shakespeare: 'William Shakespeare',
  steinbeck: 'John Steinbeck',
  tolkien: 'J.R.R. Tolkien',
  tolstoy: 'Leo Tolstoy',
  updike: 'John Updike',
  wilde: 'Oscar Wilde',
  williams: 'Tennessee Williams',
};