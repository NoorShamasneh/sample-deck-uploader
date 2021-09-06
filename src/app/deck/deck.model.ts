import {Moment} from 'moment';

export class Deck {
  constructor(
    public id?: string,
    public companyName?: string,
    public description?: string,
    public originalFileURL?: string,
    public originalFileName?: string,
    public createdDate?: Moment,
    public numberOFImages?: number,
    public images?: string[],
    public originalFile?: any
  ) {
  }
}
