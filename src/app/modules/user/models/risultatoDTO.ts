export class RisultatoDTO<S> {
  success!: boolean;
  descrizione!: string;
  warnings!: string;
  info!: string;
  code!: number;
  count!: number;
  data!: S;

  constructor(obj?: any) {
    if (obj) {
      this.success = obj.success;
      this.descrizione = obj.descrizione;
      this.warnings = obj.warnings;
      this.info = obj.info;
      this.count = obj.count;
      this.data = obj.data;
      this.code = obj.code;
    }
  }

  setErrorDescrizione(descrizione: string) {
    this.success = false;
    this.descrizione = descrizione;
  }
}
