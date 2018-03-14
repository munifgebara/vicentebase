export class BaseEntity {
    id: string;
    oi: string;
    gi: string;
    ui: string;
    rights: number;
    extra: string;
    cd: string;
    ud: string;
    active: boolean;
    version: number;
    r: String;


    /* nao funcionou....
        public isOwner(): boolean {
            return this.r.charAt[0] !== '_';
        }
        public commonGroup(): boolean {
            return this.r.charAt[1] !== '_';
        }
        public canRead(): boolean {
            return this.r.charAt[2] !== '_';
        }
        public canUpdate(): boolean {
            return this.r.charAt[3] !== '_';
        }
        public canDelete(): boolean {
            return this.r.charAt[4] !== '_';
        }
      */

}