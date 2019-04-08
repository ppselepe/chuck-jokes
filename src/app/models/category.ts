export class Category {
  public category:any;
  public icon_url:string;
  public id: string;
  public url: string;
  public value: string;


  constructor(json?:any) {
    if (json) {
      this.category = json.category;
      this.icon_url = json.icon_url;
      this.id = json.id;
      this.url = json.url;
      this.value = json.value;
    } else {
      this.category = '';
      this.icon_url = '';
      this.id = '';
      this.url = '';
      this.value = '';
    }
  }
}
