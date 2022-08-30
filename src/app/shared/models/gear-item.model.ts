export class gearItem {
  gearitemid      : number | undefined;
  customname      : string | undefined;
  category        : string | undefined;
  brandname       : string | undefined;
  productname     : string | undefined;
  weightkg!       : { value :number, validflag: boolean };
  quantity!       : { value :number, validflag: boolean };
  userid!         : { value :number, validflag: boolean };
  picture         : string | undefined;
  cost            : string | undefined;
  tempfromcelc!   : { value :number, validflag: boolean };
  tempuptocelc!   : { value :number, validflag: boolean };
  datepurchased   : string | undefined;
  dateadded       : string | undefined;
  notes           : string | undefined;
}
