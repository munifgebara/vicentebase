
export class AlertMessage {

    private message: string;
    private description: string;
    private type: string;
    private cssClass: string;
    public show: boolean;

    constructor() {
        this.show = false;
    }

    public createErrorAlert(msg: string, description: string) {
        this.description = description;
        this.message = msg;
        this.cssClass = "alert-danger";
        this.type = "error";
        this.show = true;
        return this;
    }

    public createSuccessAlert(msg: string, description: string) {
        this.description = description;
        this.message = msg;
        this.cssClass = "alert-success";
        this.type = "success";
        this.show = true;
        return this;
    }

    public createWarningAlert(msg: string, description: string) {
        this.description = description;
        this.message = msg;
        this.cssClass = "alert-warning";
        this.type = "warning";
        this.show = true;
        return this;
    }

    public get $description(): string {
        return this.description;
    }

    public get $message(): string {
        return this.message;
    }

    public get $type(): string {
        return this.type;
    }

    public get $cssClass(): string {
        return this.cssClass;
    }

}