/**GearItem is the one item of user's equipment */
export class gearItem {
  gearitemid!     : number;
  customname      : string | undefined;
  category        : string | undefined;
  brandname       : string | undefined;
  productname     : string | undefined;
  weightkg        : number | undefined;
  quantity        : number | undefined;
  userid          : number | undefined;
  picture         : string | undefined;
  cost            : string | undefined;
  tempfromcelc    : number | undefined;
  tempuptocelc    : number | undefined;
  datepurchased   : string | undefined;
  dateadded       : string | undefined;
  notes           : string | undefined;
}
