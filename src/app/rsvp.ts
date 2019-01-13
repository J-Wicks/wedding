export class RSVP {
  constructor(
    public first:  string,
    public last:   string,
    public attending:  boolean,
    public guests: number,
    public dietaryRestrictions: boolean,
    public dietaryRestrictionDetails: string,
  ) {  }

}